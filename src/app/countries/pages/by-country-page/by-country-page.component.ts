import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  public countries:Country[] = [];
  public isLoading:boolean = false;
  public initialValue:string = ''

  constructor (
    private CountriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byCountry.countries;
    this.initialValue = this.CountriesService.cacheStore.byCountry.term
  }

  searchbyCountry (term:string):void {
    this.isLoading = true;
    this.CountriesService.searchCountry(term)
    .subscribe( countries => {
      this.countries = countries
      this.isLoading = false;
    });
  }

}
