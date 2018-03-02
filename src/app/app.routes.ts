import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficasComponent } from './pages/graficas/graficas.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: 'registrate', component: LoginComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'graficas', component: GraficasComponent },
    { path: '', redirectTo: '/dashboard', pathMatch : 'full' },
    { path: '**', component: NopagefoundComponent }

];


export const APP_ROUTES =  RouterModule.forRoot(appRoutes, { useHash: true });
