import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  text: string = '';
  constructor(private router: Router) {}

  ngOnInit() {}

  delete() {
    console.log(this.text);
    if (this.text == '') {
      this.router.navigateByUrl('home');
    } else {
      this.text = '';
    }
  }
}
