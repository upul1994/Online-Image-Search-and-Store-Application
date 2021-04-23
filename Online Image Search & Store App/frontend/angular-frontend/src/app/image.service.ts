import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient:HttpClient ) { }


  sendSearchData(searchData:any){
    return this.httpClient.post("http://localhost:5000/all",searchData);
  }


  sendSearchDataAndId(id:any ,searchData:any){
    return this.httpClient.post("http://localhost:5000/getdatabyId/"+id,searchData);
  }


  addImageDataToDatabase(data:any){
   return  this.httpClient.post("http://localhost:5000/add",data)
  }

  getImageDataFromDatabase(){
    return this.httpClient.get("http://localhost:5000/show");
  }

  deleteImageData(id:number){
    return this.httpClient.delete("http://localhost:5000/delete/"+id);
  }

  getImageDataById(id:number){
    return this.httpClient.get("http://localhost:5000/edit/"+id);
  }

  updateImageDataById(id:number,data:any){
    return this.httpClient.put("http://localhost:5000/update/"+id,data);
  }

}
