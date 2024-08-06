import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Persona } from '../../Modelo/Persona';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.css'
})
export class AgregarComponent implements OnInit{

  /* personas: Persona = new Persona(); */

  constructor(private router:Router, private service:ServiceService){}

  ngOnInit(): void {
  }

  guardarPersona(personas:Persona){
    this.service.createPersona(personas).subscribe(data =>{
      alert("Se ha guaradado correctamente");
      this.router.navigate(["listar"]);
    })
  }

}
