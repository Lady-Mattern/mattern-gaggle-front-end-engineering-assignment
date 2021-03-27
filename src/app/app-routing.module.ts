import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationViewComponent } from './application-view/application-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { RegisterModalComponent } from './register-modal/register-modal.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  // { path: 'register', component: RegisterModalComponent },
  { path: 'application-view', component: ApplicationViewComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SignInComponent, ApplicationViewComponent];