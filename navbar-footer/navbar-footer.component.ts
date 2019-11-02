import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-navbar-footer',
  templateUrl: './navbar-footer.component.html',
  styleUrls: ['./navbar-footer.component.scss']
})
export class NavbarFooterComponent {
  weapons = ['iron', 'sword', 'belt', 'shoe', 'bata', 'egba'];
  specialities = ['tech', 'code', 'programs', 'highlight', 'macosx', 'arm-binaries'];
  model = new Hero(1, '', this.weapons[1], this.specialities[2], 'yaya');

  submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log(this.model.name);
    console.log(this.model.weapon);
    console.log(this.model.speciality);
  }
}
