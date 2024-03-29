import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private route: Router) {}

  openEditor() {
    this.route.navigate(['editor']);
  }

  openSearch() {
    this.route.navigate(['search']);
  }
}
