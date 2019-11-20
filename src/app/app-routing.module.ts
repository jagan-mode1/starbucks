import { Routes, RouterModule } from '@angular/router';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { SignInComponent } from './sign-in/sign-in.component';


const appRoutes: Routes = [

  {
    path: '',
    redirectTo: "/home",
    pathMatch: 'full'
  },

  { path: 'home',
    component: QrCodeComponent 
  },
  {
    path: 'signin',
    component: SignInComponent
  },
];  

export default appRoutes;

