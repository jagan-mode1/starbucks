import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './sign-in/sign-in.component';
import appRoutes from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    QrCodeComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    // AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
