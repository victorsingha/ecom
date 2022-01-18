import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from 'src/pages/landing/landing.component';
import { PagenotfoundComponent } from 'src/pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: "", component: LandingComponent, pathMatch: 'full' },
  {
    path: '**',component: PagenotfoundComponent,pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
