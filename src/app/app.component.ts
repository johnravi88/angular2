import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { Ng2BootstrapModule } from 'ng2-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';


@NgModule({
	imports: [BrowserModule,
		FormsModule,
		ReactiveFormsModule, HttpModule, Ng2BootstrapModule],       // module dependencies
	declarations: [AppComponent, LoginComponent],   // components and directives
	bootstrap: [AppComponent],     // root component
	providers: []
})

@Component({
	selector: 'my-app',
	template: '<login></login>'
})

export class AppComponent { }