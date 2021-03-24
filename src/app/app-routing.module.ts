import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationViewComponent } from './application-view/application-view.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'register', component: RegisterModalComponent },
  { path: 'application-view', component: ApplicationViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignInComponent, RegisterModalComponent, ApplicationViewComponent];