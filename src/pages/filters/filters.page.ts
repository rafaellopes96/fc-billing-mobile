import { BillingsPage } from '../pages';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'filters.page.html'
})

export class FiltersPage{

    letterName: string;

    status= [
        {id:'AP', name:'Aguardando pagamento'},
        {id:'EA', name:'Em aberto'},
        {id:'LC', name:'Liberado cliente'},
        {id:'LF', name:'Liberado FCamara'},
        {id:'P', name:'Pago'}
    ]

    issued= [
        'Emitida',
        'Pendente'
    ]

    constructor(public nav: NavController){}

    goToBillingsPage($event, issue, stat, letterName){
        this.nav.push(BillingsPage, issue, stat, letterName);
    }

    filtersPage($event, status){

    }
}