import { Component } from '@angular/core';

export interface PeriodicElement{
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Enrique', weight: 62.56, symbol: 'H'},
  {position: 2, name: 'Betja', weight: 72, symbol: 'H'},
  {position: 3, name: 'Cristopher', weight: 65.05, symbol: 'H'},
  {position: 4, name: 'Josafat', weight: 62.56, symbol: 'H'},
  {position: 5, name: 'Yahir', weight: 60, symbol: 'H'},
  {position: 6, name: 'Carolina', weight: 60, symbol: 'M'},
  {position: 7, name: 'Jonathan', weight: 83.56, symbol: 'H'},
  {position: 8, name: 'Joshua', weight: 62, symbol: 'H'},
  {position: 9, name: 'Abraham', weight: 75, symbol: 'H'},
  {position: 10, name: 'Emiliano', weight: 65, symbol: 'H'},
];

@Component({
  selector: 'app-main-personal',
  styleUrls: ['./main-personal.component.css'],
  templateUrl: './main-personal.component.html'
})
export class MainPersonalComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}
