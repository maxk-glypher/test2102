import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashPageComponent } from './components/pages/splash-page/splash-page.component';

const routes: Routes = [
  { path: '', component: SplashPageComponent},
  { path: '**', component: SplashPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
