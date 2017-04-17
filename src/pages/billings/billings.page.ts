import { FiltersPage, LetterPage } from '../pages';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Component({
    templateUrl: 'billings.page.html'

})

@Injectable()
export class BillingsPage{

    public letters: any;

    div: any;
    sum: number;
    i: number;
    //private valueReturn;

    constructor(private nav:NavController, private navParams: NavParams, private http: Http){

        this.initializeLetters().then(data => console.log(this.letters = data)).catch(err => err);

       

        this.div = this.navParams.data;

        console.log(this.letters);

        //filtrando as letters pelo departamento selecionado na home page
        //this.divFilterLetters();    

        //fazendo a soma dos valores das cartas pelo departamento selencionado na home page
        //this.valueReturn = this.totalValue();

    }

    
        


    public initializeLetters = () => {
        return new Promise((resolve, reject) => {
        let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${ localStorage.getItem('jwtToken') }`
        });
        let options = new RequestOptions({ headers: headers });
        this.http
            .get('http://api-fcamara.azurewebsites.net/v1/billingLetters', options)
            .map((res: Response) => JSON.stringify(res.json().results))
            .subscribe(data => resolve(JSON.parse(data)), err => reject(err))
        })
    }

//botão de filtrar clicado
    goToFiltersPage(){
        this.nav.push(FiltersPage);
    }

//carta selecionada na lista
    letterTapped($event, letter){
        this.nav.push(LetterPage, letter);
    }

    divFilterLetters(){
        
        if(this.div.id == 'todas'){
            this.initializeLetters();
        }
        else{
            this.letters.forEach(element => {
                this.letters = this.letters.filter((letter) => {
                    return (letter.division.indexOf(this.div.id) > -1);
                })
            })
        }
        
    }

//soma do valor das cartas da divisão selecionada na homepage
    totalValue(){

        this.sum = 0;
        this.i = 0;

        this.letters.forEach(element => {
            this.sum += Number(this.letters[this.i].value);
            this.i++;

        });
        
            return this.sum;
    }

//pequisa para filtragem por nome de carta 
     getLetters(ev) {

         this.initializeLetters();
         this.divFilterLetters();
        
        let val = ev.target.value;

        if (val && val.trim() != '') {
            this.letters = this.letters.filter((letter) => {
                return (letter.client.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }


    }


    
}