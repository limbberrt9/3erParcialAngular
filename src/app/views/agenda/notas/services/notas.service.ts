import {HttpClient} from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { NotasModel } from "../models/notas.models"
 
@Injectable ({
    providedIn:'root' 
})
export class NotasService{
   //URL DE API 
   
        private API_URL ='http://localhost:7500/agenda/'
        constructor (private http:HttpClient){
        }


    getTraerNotas (): Observable<NotasModel[]>{
        return this.http.get<NotasModel[]>(`${this.API_URL}traerNotas`);
  }

  agregarNotas(receta: NotasModel) : Observable<NotasModel> {
    return this.http.post<NotasModel>(`${this.API_URL}/crear`, receta);
  }




  eliminarNotas(idNotas : string) : Observable<NotasModel> {
    console.log(idNotas);
    //return this.http.delete<NotasModel>(`${this.API_URL}/eliminar/${idNotas}`);
    return this.http.delete<NotasModel>(this.API_URL+'/eliminar/'+idNotas);
  }


  editarNotas  (notas: NotasModel) : Observable<NotasModel> {
    return this.http.put<NotasModel>(`${this.API_URL}/editar/${notas._id}`, notas);
  }


















  
}