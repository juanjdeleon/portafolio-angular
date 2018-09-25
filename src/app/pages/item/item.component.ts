import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {

    this.router.params.subscribe(params => {
      console.log(params);
    });

  }

}
