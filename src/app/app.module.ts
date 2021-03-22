import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ApplicationViewComponent } from './application-view/application-view.component';
import { RegisterModalComponent } from './register-modal/register-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicationViewComponent,
    RegisterModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
