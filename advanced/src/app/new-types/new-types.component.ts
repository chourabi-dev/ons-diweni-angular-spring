import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-types',
  templateUrl: './new-types.component.html',
  styleUrls: ['./new-types.component.css']
})
export class NewTypesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

/*
  initCamera(){
    const cameraPromise = new Promise( ( success,error )=>{
      setTimeout(()=>{
        // ...

        success( { camera:"success" } );

      },3000)

    } );


    return cameraPromise;
  }

  async takePhoto(){


    /*this.initCamera().then( (data)=>{
      console.log(data);

      // ...

      console.log("camera obtained !!!");
      
      
    } ).catch( (err)=>{
      console.log(err);
      
    } )



    // 100% ganateeeeeeeeee promise => success
    const camera = await this.initCamera();


    console.log("camera obtained !!!");
    

  }*/



  /***************************** observable ************************/


  




}
