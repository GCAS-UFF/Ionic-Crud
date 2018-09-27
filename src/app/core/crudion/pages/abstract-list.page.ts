import { OnInit } from "@angular/core";
import { AbstractFirestore } from "../../providers/abstract.firestore";
import { BehaviorSubject, Observable } from "rxjs";
import { GenericUtils } from "../utils/generic.utils";
import { NavController } from "@ionic/angular";

export class AbstractListPage<T> implements OnInit {

    fields: string[];

    objects = new BehaviorSubject(Observable.create([]));

    constructor(
        private clazz: any,
        private path: string,
        private searchOptions: { field: string, message: string },
        private abstractDB: AbstractFirestore<T>,
        private navCtrl: NavController
    ) { }


    ngOnInit() {

        this.objects.next(this.abstractDB.findAll());

        this.fields = GenericUtils.getFields(this.clazz);

    }


    visualizar(event) {
        this.navCtrl.navigateForward(`/${this.path}/edit/${event.id}`);
    }

    add() {
        this.navCtrl.navigateForward(`/${this.path}/add`);
    }

    searchBy(q: string) {

        this.objects.next(this.abstractDB.findByField(q, this.searchOptions.field));

    }

    orderBy(q: any) {

        this.objects.next(this.abstractDB.findOrderBy(q.field, q.type));
    }

}