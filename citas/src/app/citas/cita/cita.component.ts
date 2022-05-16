import { Component, OnInit } from '@angular/core';
import { TipoCitaEntity } from 'src/app/entity/tipocita';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  citaentity:TipoCitaEntity={};

  constructor() { }

  ngOnInit() {
  }
  limpiar(){

  }

}