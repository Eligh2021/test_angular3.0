import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iluha',
  templateUrl: './iluha.component.html',
  styleUrls: ['./iluha.component.scss']
})
export class IluhaComponent implements OnInit {

   title = "iluha"
   a = "люблю гараж"

  constructor() { }

  ngOnInit(): void {
  }

}
