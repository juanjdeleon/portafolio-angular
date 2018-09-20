import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';

const app_routes: Routes = [
    { path: '', component: PortfolioComponent },
    { path: 'about', component: AboutComponent},
    { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
    imports: [
        RouterModule.forRoot (app_routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }