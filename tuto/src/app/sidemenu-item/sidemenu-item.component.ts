import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu-item',
  templateUrl: './sidemenu-item.component.html',
  styleUrls: ['./sidemenu-item.component.css']
})
export class SidemenuItemComponent implements OnInit {

  @Input() title;
  @Input() descreption;
  constructor() { }

  ngOnInit(): void {
  }

}
