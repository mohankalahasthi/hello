import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { welcomePageContainer } from './containers/welcome/welcome-page.container'


const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "auth/signin" },
    {
        path: "welcome",
        loadChildren: "./modules/welcome/welcome.module#WelcomeModule",
    },


];




@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class AppRoutingModule { }