import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router"
import { HomeComponent } from "./components/pages/home/home.component";
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentsComponent } from './components/pages/new-moments/new-moments.component';
import { MomentComponent } from './components/pages/moment/moment.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';



const routes :Routes=[
  {path:'',component:HomeComponent}, 
  {path:'about',component:AboutComponent}, 
  {path:'moments/new',component:NewMomentsComponent},
  {path:'moments/edit/:id',component:EditMomentComponent},
  {path:'moments/:id',component:MomentComponent},
]

@NgModule({
  declarations:[],
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
