import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  first_name = "Tega";
  last_name = "Roy";
  state_of_origin = "Delta State";
  email = "cleverwebcoder@gmail.com";
  address = "No 32, Adiva Plainfield Estate, Beechwood Estate, Ibeju-Lekki Lagos";
  full_name = "Tega Roy";
}
