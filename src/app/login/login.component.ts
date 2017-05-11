import { Component } from '@angular/core'
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Http, Response, Request, RequestMethod } from '@angular/http';


@Component({
    selector: '<login></login>',
    templateUrl: 'src/app/login/login.component.html',
    styles: [`
    .margin{margin-top:90px;}
    `

    ]
})


export class LoginComponent {
    constructor(fb: FormBuilder, public http: Http) {
        this.loginForm = fb.group({
            customerName: fb.control(null,
                Validators.compose([Validators.required, Validators.minLength(3)])),
				password: fb.control(null,
                Validators.compose([Validators.required, Validators.minLength(3)]))

        })
    }
    private data: any;
    //private customerName:string ="";
    loginForm: FormGroup;
    public login(value: any) {
        console.log(value);
        let formVal = {
            'email': value.email,
            'password': value.password
        }
        alert("Working Sucessfully");
        console.log(formVal);
    }
}