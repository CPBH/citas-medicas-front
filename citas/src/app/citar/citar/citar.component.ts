import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TipoCitaEntity } from 'src/app/entity/tipocita';

@Component({
  selector: 'app-citar',
  templateUrl: './citar.component.html',
  styleUrls: ['./citar.component.css']
})
export class CitarComponent implements OnInit {

  citaentity:TipoCitaEntity={};
  tipocitas = ['General', 'Odontología', 'Especializada']

  constructor() { }

  ngOnInit() {
  }
  selectedCar!: string;

  cars: Car[] = [
    {value: 'general', viewValue: 'General'},
    {value: 'odontologia', viewValue: 'Odontología'},
    {value: 'especializada', viewValue: 'Especializada'},
  ];
}
interface Car {
  value: string;
  viewValue: string;
}