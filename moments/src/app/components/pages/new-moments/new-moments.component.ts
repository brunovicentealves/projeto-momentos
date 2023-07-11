import { Component,OnInit ,} from '@angular/core';

import { Moment } from 'src/app/Moments';

import { MomentService } from 'src/app/services/moment.service';

import { Observable } from 'rxjs';

import { MessagesService } from 'src/app/services/messages.service';

import {Router} from '@angular/router';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent implements OnInit{
  btnText='compartilhar!';

  constructor(private momentService:MomentService,private messagesService:MessagesService,private router:Router){

  }

  ngOnInit(): void {
      
  }


  async createHandler(moment:Moment) {

    console.log(moment.image);
    
  
    const formData = new FormData();

    formData.append('title',moment.title);
    formData.append('description',moment.description);

    if(moment.image){
      formData.append('image',moment.image);
    }

    await this.momentService.createMoment(formData).subscribe();

    this.messagesService.add("Momento adcionado com sucesso!");

    this.router.navigate(['/']);

  }
}
