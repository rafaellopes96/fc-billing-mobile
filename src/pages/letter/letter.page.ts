import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'letter.page.html'
})

export class LetterPage{

    letter: any;

    constructor(private nav:NavController, private navParams: NavParams){
    
        this.letter = this.navParams.data;
    }
}