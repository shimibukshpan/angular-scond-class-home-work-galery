import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor() { }

  imagesArray : String[] = [];


  ngOnInit(): void {
  }

    addImage(url:HTMLInputElement, name:HTMLInputElement){
    // console.log(url.value)
    // console.log(name.value)
    let imagurl = url.value
    let imagName = name.value
    console.log(imagName)

    this.imagesArray.push(imagurl)
    console.log(imagurl)

  }
}
