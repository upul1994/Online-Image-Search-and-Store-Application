import { Component, OnInit } from '@angular/core';
import {ImageService} from "../../image.service";
import {ActivatedRoute, Router} from "@angular/router";
import {timeout} from "rxjs/operators";

@Component({
  selector: 'app-showsaveimages',
  templateUrl: './showsaveimages.component.html',
  styleUrls: ['./showsaveimages.component.css']
})
export class ShowsaveimagesComponent implements OnInit {

  constructor(private imageService:ImageService,private router :Router,private activatedRoute:ActivatedRoute) { }

  dataArray:any
  arrayIndex:any
  dbRowArray:any
  msg=false;
  msg1=false;


  ngOnInit(): void {
    this.imageService.getImageDataFromDatabase().subscribe(result=>{
      this.dataArray=result
    })



  }
  deleteRow(id: any) {

    this.dataArray.findIndex((result:any,i:number)=>{
      if(result.id==id){
        this.arrayIndex=i;
      }
    })

    this.dataArray.splice(this.arrayIndex,1);

    this.imageService.deleteImageData(id).subscribe(result=>{
      console.log(result);
      this.msg =true;
    })
  }

  getImageData(id: any) {
    this.imageService.getImageDataById(id).subscribe(result=>{
        this.dbRowArray=result;
    })
  }

  updateData(id: any, name: any) {
    this.imageService.updateImageDataById(id,{name:name}).subscribe(result=>{
      console.log(result)
      // this.router.navigate(["/show"])
      this.msg1 =true;

    })
  }


}
