import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayComponent } from './components/play/play.component';
import { FinishComponent } from './components/finish/finish.component';
import { HomeComponent } from './components/home/home.component';
import { FinishGuard } from './guards/finish-guard/finish-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, 
  { path: 'play/:name', component: PlayComponent },
  { path: 'finish', component: FinishComponent,canActivate: [FinishGuard] },
  {path:"**",redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
