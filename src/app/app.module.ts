import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero-service/hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroSearchService } from "app/hero-search/hero-search.service";
import { HomeComponent } from "app/home.component";
import { AuthenticationService } from "app/authentication.service";
import { LoginComponent } from "app/login.component";
import { CanActivateAuthGuard } from "app/can-activate.authguard";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule  
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    LoginComponent,
    HeroSearchComponent,
    HomeComponent
  ],
  providers: [HeroService, AuthenticationService, CanActivateAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
