import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationViewComponent } from './application-view/application-view.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';


const routes: Routes = [
    { path: 'register', component: RegisterModalComponent },
    { path: 'application-view', component: ApplicationViewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }