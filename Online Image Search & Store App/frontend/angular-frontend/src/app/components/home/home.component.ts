import { Component, OnInit } from '@angular/core';
import {ImageService} from "../../image.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private imageService:ImageService) { }


  alldata:any;
  value: any;
  busy = false;

  ngOnInit(): void {

  }



  searchValue() {
    this.busy=true;
    this.imageService.sendSearchData({value:this.value}).subscribe(result=>{
      this.alldata=result;
      this.busy=false;
    })
  }
}
