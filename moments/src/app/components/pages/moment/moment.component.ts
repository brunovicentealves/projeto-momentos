import { Component,OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';

import {Router ,ActivatedRoute} from '@angular/router'  ;

import { Moment } from 'src/app/Moments';

import { environment } from 'src/app/environments/environment';

import {faTimes,faEdit} from '@fortawesome/free-solid-svg-icons';

import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  moment?: Moment;

  baseApiUrl = environment.baseApiUrl;

  faEdit = faEdit;

  faTimes = faTimes ;


  constructor(private momentService:MomentService, 
    private route:ActivatedRoute,
    private messageService:MessagesService,
    private router:Router
    ){

  }

  ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));

      this.momentService.getMoment(id).subscribe(item=>(this.moment = item.data));
  }


  async removeHandler(id:number) {
    await this.momentService.deleteMoment(id).subscribe();

    this.messageService.add("Momento Excluido com sucesso!")

    this.router.navigate(['/'])

  }

}
