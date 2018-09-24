import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map, filter } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { GenericUtils } from '../crudion/utils/generic.utils';

export class AbstractFirestore<T> {

    private collection: AngularFirestoreCollection<T>;

    constructor(protected collectionName: string, protected db: AngularFirestore) {
        this.collection = this.db.collection<T>(collectionName);
    }

    async create(clazz: any, object: T) {
        let tObject = GenericUtils.getGenericObject(clazz, object);
        let id = await this.collection.ref.doc().id;
        this.collection.doc(id).set(tObject);
    }

    update(clazz: any, object: T) {
        let id = object['id'];
        delete object['id'];
        let tObject = GenericUtils.getGenericObject(clazz, object);
        this.collection.doc(id).update(tObject);
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

    findOrderBy(orderField: string, orderType: firebase.firestore.OrderByDirection, limit?: number) {

        return Observable.create(subscriber => {

            this.collection.ref
                .orderBy(orderField, orderType)
                .limit(10)
                .onSnapshot(snapshot => {
                    let results = [];
                    snapshot.docs.forEach(
                        doc => results.push(doc.data())
                    )
                    subscriber.next(results);
                })
        })
    }

}