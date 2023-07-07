import { Component,OnInit,Input } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit{
  @Input() btnText!:string

  //linha 1 [formGroup]="momentForm"
  momentForm!:FormGroup


  constructor(){

  }

  ngOnInit(): void {
      this.momentForm=new FormGroup({
        id:new FormControl(''),
        title:new FormControl('',[Validators.required]),
        description:new FormControl('',[Validators.required]),
        image:new FormControl(''),
        
      })
  }

  //linha 5 valida o html *ngIf="title.invalid && formDir.submitted"
  get title (){
    return this.momentForm.get('title')!;
  }
  //linha 12 valida html *ngIf="description.invalid && formDir.submitted"
  get description (){
    return this.momentForm.get('description')!;
  }


  submit(){
    //valida se submit for invalido não deixa terminar submissão
    if(this,this.momentForm.invalid){
      return
    }

    console.log("enviar formulario");
    
  }
}
