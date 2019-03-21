import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomeNavComponent } from 'src/app/components/welcome-nav/welcome-nav.component';
import { RouterModule, Routes } from '@angular/router';
import { welcomePageContainer } from './welcome-page.container';

const routes: Routes = [
  { path: "", component: welcomePageContainer, },


];



@NgModule({
  declarations: [WelcomeNavComponent, welcomePageContainer],
  imports: [
    CommonModule,
    SharedModule, RouterModule.forChild(routes),



  ]
})
export class WelcomeModule { }
