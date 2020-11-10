import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelocomePageComponent } from './welocome-page/welocome-page.component';
import { SeatsComponent } from './seats/seats.component';

const routes: Routes = [
  {path:'',component:WelocomePageComponent},
  {path:'seats',component:SeatsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
