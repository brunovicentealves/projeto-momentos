import { Component,OnInit,Input, Output, EventEmitter } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Moment } from 'src/app/Moments';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit{
  //enviando dados do component filho para o pai
  @Output() onSubmit = new EventEmitter<Moment>()
  @Input() btnText!:string
  @Input() momentData:Moment | null = null;

  //linha 1 [formGroup]="momentForm"
  momentForm!:FormGroup

 


  constructor(){

  }

  ngOnInit(): void {
      this.momentForm=new FormGroup({
        id:new FormControl(this.momentData? this.momentData.id :''),
        title:new FormControl(this.momentData? this.momentData.title :'',[Validators.required]),
        description:new FormControl(this.momentData? this.momentData.description :'',[Validators.required]),
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

  onFileSelected(event:any){
    //pega o arquivo que vem do formulario
    const file:File = event.target.files[0];

    this.momentForm.patchValue({ image: event.target.files[0] });

  }


  submit(){
    //valida se submit for invalido não deixa terminar submissão
    if(this.momentForm.invalid){
      return
    }

    console.log(this.momentForm.value);

    // enviando dados do formulario do component filho para o pai
    this.onSubmit.emit(this.momentForm.value);
    
  }
}
