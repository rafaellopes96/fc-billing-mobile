import { BillingsPage } from '../pages';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'home.page.html'
})

export class HomePage {

    divisions = [
        {
            id: "innovation",
            name: "Inovação"
        },
        {
            id: "ecomerce",
            name: "E-Comerce"
        },
        {
            id: "port",
            name: "Porto"
        },
        {
            id: "oc",
            name: "OC"
        },
        {
            id: "todas",
            name: "Todas"
        }

    ]

    constructor(public nav:NavController){}

    itemTapped($event, div){
        this.nav.push(BillingsPage, div);
    }


}