import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroInformationComponent } from './hero-information/hero-information.component';
import {HeroInformationResolveService} from './hero-information/hero-information-resolver.service';

const routes: Routes = [
  { path: '', component: HeroListComponent },
  { path: 'add-hero', component: HeroFormComponent },
  { path: 'hero-information/:id', component: HeroInformationComponent, resolve :{heroInfo: HeroInformationResolveService} },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
