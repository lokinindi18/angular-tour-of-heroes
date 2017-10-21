import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home.component";
import { LoginComponent } from "app/login.component";
import { CanActivateAuthGuard } from "app/can-activate.authguard";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [CanActivateAuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [CanActivateAuthGuard] },
    { path: 'detail/:id', component: HeroDetailComponent, canActivate: [CanActivateAuthGuard] },
    { path: 'heroes', component: HeroesComponent, canActivate: [CanActivateAuthGuard] }
];
@NgModule( {
    imports: [RouterModule.forRoot( routes )],
    exports: [RouterModule]
} )
export class AppRoutingModule {}