import { Component, OnInit } from '@angular/core';

export class Location{
  _id: string;
  name: string;
  distance: number;
  address: string;
  rating: number;
  facilities: string[];
}

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor() { }

  location: Location = {
    _id: '5f10f74a0bc9ff1f95a55654',
    name: 'Costy',
    distance: 14000.1234,
    address: 'High Street, Reading',
    rating: 3,
    facilities: ['hot drinks','food','power']
  };

  ngOnInit(): void {
  }

}
