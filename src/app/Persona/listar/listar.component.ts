import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Persona } from '../../Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{

  personas:Persona[] = [];
  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(): void{
    this.listarPersonas();
  }

  listarPersonas(){
    this.service.getPersonas().subscribe(data => {
      this.personas=data;
    })
  }

}
