import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';

// MODULES
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

// RUTAS
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        GraficasComponent,
        PagesComponent,
        IncrementadorComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        GraficasComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]
})

export class PageModule { }
