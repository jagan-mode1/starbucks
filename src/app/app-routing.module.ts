import { Routes, RouterModule } from '@angular/router';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SurveyComponent } from './survey/survey.component';


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
  {
    path: 'survey',
    component: SurveyComponent
  },
];  

export default appRoutes;

