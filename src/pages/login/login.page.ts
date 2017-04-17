import { HomePage } from '../pages';
import { NavController, LoadingController } from 'ionic-angular';
import { Component } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Component({
    templateUrl: 'login.page.html'
})

export class LoginPage{

    username: string;
    password: string;
    login: boolean;
    
    constructor(public nav:NavController, public http:Http, public loadingCtrl: LoadingController){
    }

    private urlAuthentication = "http://api-fcamara.azurewebsites.net/v1/token";
    public getObject: Object = {};

    authUserClient = (username,password) => {

        this.presentLoadingDefault()

        return new Promise((resolve, reject) => {
            let headers = new Headers({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic YWI1YmJjZjAyYjRmNDA5ZjllYTVmYTViNWViMGI1MGQ6cG9ydGFsQHRpbWVzaGVldA=='
            });


            let options = new RequestOptions({ headers: headers });
            let body = 'grant_type=password&username=' + username + '&password=' + password;

            this.http
                .post(this.urlAuthentication, body, options)
                .map((res: Response) => res.json())
                //.subscribe(data => , err => reject(err));
                .subscribe(
                    data => this.saveJwt(data.access_token),
                    err => reject(err),
                    () => this.goToHomePage()
                );
        })
            .then(function(data){
                console.log(data);
            })
            .catch(function(err){
                alert('Usuário e/ou senha inválidos!');
            })
    }
    

    goToHomePage(){
        this.nav.push(HomePage);
    }

    saveJwt(jwt) {
        if(jwt) {
            localStorage.setItem('jwtToken', jwt);
            //window.localStorage.setItem('access_token', jwt);
        }
    }


    presentLoadingDefault() {
        let loading = this.loadingCtrl.create({
            content: 'Aguarde por favor...'
        });

        loading.present();

        setTimeout(() => {
            loading.dismiss();
        }, 2500);
    }
}

 
 