import { Component } from '@angular/core'
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Http, Response, Request, RequestMethod} from '@angular/http';

@Component({
    selector: '<login></login>',
    templateUrl: 'src/app/login/login.component.html',
    styles: [`
    .margin{margin-top:90px;}
    `

    ]
})


export class LoginComponent {
    constructor(fb: FormBuilder, public http: Http){
    }
    private data: any;
    loginForm: FormGroup;
    public login(value: any) {
        console.log(value);
        let formVal = {
            'email': value.email,
            'password': value.password
        }
        console.log(formVal);
    }
}