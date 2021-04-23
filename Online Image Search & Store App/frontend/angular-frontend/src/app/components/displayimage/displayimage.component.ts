import {Component, Input, OnInit} from '@angular/core';
import {ImageService} from "../../image.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-displayimage',
  templateUrl: './displayimage.component.html',
  styleUrls: ['./displayimage.component.css']
})
export class DisplayimageComponent implements OnInit {

  @Input() searchData:any

  constructor(private imageService: ImageService, private activatedRoute: ActivatedRoute, private router:Router) {
  }

  id: any;
  searchValue:any
  ListDataById:any
  busy =false;


  ngOnInit(): void {

    this.activatedRoute.queryParamMap.subscribe(params => {
      this.id = params.get("id")
    })

    this.activatedRoute.queryParamMap.subscribe(params=>{
      this.searchValue =params.get("q")

    })

    this.busy =true
    this.imageService.sendSearchDataAndId(this.id,{data:this.searchValue}).subscribe(result=>{

      this.ListDataById =result;
      this.busy=false
    })



  }


  saveToDatabase(largeImageURL: any, tags: any) {

   this.imageService.addImageDataToDatabase({imageUrl:largeImageURL,name:tags}).subscribe(result=>{
     console.log(result);

     this.router.navigate(["/show"])
   })


  }
}
