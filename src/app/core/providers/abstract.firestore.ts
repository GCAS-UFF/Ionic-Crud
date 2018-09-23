import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, filter } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

export class AbstractFirestore<T> {

    private collection: AngularFirestoreCollection<T>;

    constructor(protected collectionName: string, protected db: AngularFirestore) {
        this.collection = this.db.collection<T>(collectionName);
    }

    async create(object: T) {
        let id = await this.collection.ref.doc().id;
        this.collection.doc(id).set(object);
    }

    update(object: T) {
        let id = object['id'];
        delete object['id'];
        this.collection.doc(id).update(object);
    }

    delete(object: T) {
        this.collection.doc(object['id']).delete();
    }

    findBy(id: string) {
        return this.collection.doc(id).get();
    }

    findByField(text: string, field: string) {

        const start = text;
        const end = start + '\uf8ff';

        return Observable
            .create(subscriber => {

                this.collection.ref
                    .orderBy(field)
                    .startAt(start)
                    .endAt(end)
                    .onSnapshot(snapshot => {
                        let results = [];
                        snapshot.docs.forEach(doc =>
                            results.push(doc.data())
                        )
                        subscriber.next(results);
                    });
            })

    }

    findAll() {

        return this.collection
            .snapshotChanges()
            .pipe(
                map(results => {
                    return results.map(
                        result => {
                            let doc = result.payload.doc.data() as T;
                            doc['id'] = result.payload.doc.id;
                            return doc;
                        }
                    )
                })
            )
    }

}