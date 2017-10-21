import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from './hero';
import { HeroService } from '../hero-service/hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      console.log('Param value : ' + params['id']);
      let idValue = params['id'];
      console.log('idValue : ' + idValue);
      // call in a promise way, the then function is saying, assign the return value as hero & 
      // then assign that object to local variable this.hero  
      // by default idValue come as a sting, so need to convert to number using + symbol
      this.heroService.getHero(+idValue).then(hero => this.hero = hero);
      // this will be called every time route changes
      // so you can perform your functionality here

    });
  }

  goBack(): void {
    this.location.back();
  }
  
  save(): void {
  this.heroService.update(this.hero)
    .then(() => this.goBack());
}
}