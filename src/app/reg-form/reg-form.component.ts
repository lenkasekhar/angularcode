import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.scss']
})
export class RegFormComponent implements OnInit {
public myForm:FormGroup;


  constructor() { 
    this.myForm = new FormGroup({
      id: new FormControl("",[Validators.required]),
     name:new FormControl("",[Validators.required]),
      password:new FormControl("",[Validators.required]),
      gender:new FormControl("",[Validators.required])

    })
  }
  selectedCities: string[] = [];
  one: boolean = true;
  fig:string="";

  ngOnInit(): void {
  }

}
