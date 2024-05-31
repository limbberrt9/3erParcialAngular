import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ButtonDirective, ButtonGroupComponent, ButtonToolbarComponent, CardBodyComponent, CardComponent, CardHeaderComponent, ColComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective, RowComponent, TableActiveDirective, TableColorDirective, TableDirective, TextColorDirective } from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { DocsExampleComponent } from '@docs-components/public-api';
import {NotasModel}  from "./models/notas.models";
import {NotasService} from "./services/notas.service";

@Component({
  selector: 'app-notas',
  standalone: true,
  imports: [RowComponent, ColComponent,
     TextColorDirective, CardComponent, CardHeaderComponent,
      CardBodyComponent,  
      ReactiveFormsModule, FormsModule, FormDirective, 
      FormLabelDirective, FormControlDirective, 
      ButtonDirective, NgStyle, 



      
      //selector
      FormSelectDirective,
      //button
      ButtonGroupComponent,ButtonToolbarComponent,
      // table
      TableDirective, TableColorDirective, TableActiveDirective
    
    
    
    
    ],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.scss'
})




export class NotasComponent {
  listaNotas: NotasModel []= [] ;
  notasModelo : NotasModel = new NotasModel();
  
  

  
  constructor(private notasServices:NotasService){
  
    this.traerNotas();

  }
  traerNotas(){
   this.notasServices.getTraerNotas().subscribe({
    next:(respuesta)=>{
      console.log(respuesta);
      this.listaNotas = respuesta;
    },
    error:(error)=>{
      console.log(error)
    }
   })   
}

guardarNotas(){
  console.log(this.notasModelo)
  if(this.notasModelo._id == ''){
    console.log("guardar",this.notasModelo)
    this.agregarNotas();
  }
  else {
    console.log("editar",this.notasModelo )
    this.editarNotas();
  }
}

agregarNotas(){
  this.notasServices.agregarNotas(this.notasModelo).subscribe({
    next:(respuesta)=>{
      console.log("Se guardo Exitosamente",respuesta);
      this.traerNotas();
      this.notasModelo = new NotasModel();
    },
    error:(error)=>{
      console.log(error)
    }
   })
}



eliminarNotas(notas:NotasModel){
  console.log("item para eliminar",notas);
  this.notasServices.eliminarNotas(notas._id).subscribe({
    next:(respuesta)=>{
      console.log("Se elimino exitosamente",respuesta);
      this.traerNotas();
      
    },
    error:(error)=>{
      console.log(error)
    }
   })
}


verNotas(notas:NotasModel){
  this.notasModelo = notas;

}

editarNotas(){
  
  this.notasServices.editarNotas(this.notasModelo).subscribe({
    next:(respuesta)=>{
      console.log("Se edito Exitosamente",respuesta);
      this.traerNotas();
      this.notasModelo = new NotasModel();
    },
    error:(error)=>{
      console.log(error)
    }
   })
}
}


