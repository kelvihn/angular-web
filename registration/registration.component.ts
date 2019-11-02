import { Component, OnInit } from '@angular/core';
import { RegData } from './../reg-data';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(private _register: ApiService) { }

  userModel = new RegData('', '', '', '', '', '', null, '');

  onSubmit() {
    this._register.register(this.userModel)
      .subscribe(
        data => console.log('Success', data),
        error => console.error('Error', error)
      )
  }
}
