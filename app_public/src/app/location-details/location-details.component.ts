import { Component, OnInit, Input, Renderer2, Inject } from '@angular/core';
import { Location, Review } from '../location';
import { DOCUMENT } from '@angular/common';
import { Loc8rDataService } from '../loc8r-data.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() location: Location;

  // newLocation: Location;

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document,
    private loc8rDataService: Loc8rDataService
  ) {}

  public newReview: Review = {
    author: '',
    rating: 5,
    reviewText: ''
  }

  public formError:string;

  public formVisible: boolean = false;

  private formIsValid(): boolean{
    if(this.newReview.author && this.newReview.rating && this.newReview.reviewText){
      return true;
    }else{
      return false;
    }
  }

  private resetAndHideReviewForm(): void{
    this.formVisible = false;
    this.newReview.author = '';
    this.newReview.rating = 5;
    this.newReview.reviewText = '';
  }

  public onReviewSubmit(): void{
    this.formError = '';
    if(this.formIsValid()){
      console.log(this.newReview);
      this.loc8rDataService.addReviewByLocationId(this.location._id, this.newReview)
      .then((review: Review) => {
        console.log('Review saved', review);
        let reviews = this.location.reviews.slice(0);
        reviews.unshift(review);
        this.location.reviews = reviews;
        this.resetAndHideReviewForm();
      });
    } else {
      this.formError = 'All fields required, please try again.';
    }
  }

  ngOnInit(): void {
    let script = this._renderer2.createElement('script');
    script.text = `
      var mymap = L.map('mapid').setView([${this.location.coords.coordinates[1]}, ${this.location.coords.coordinates[0]}], 13);
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
      }).addTo(mymap);
      var marker = L.marker([${this.location.coords.coordinates[1]}, ${this.location.coords.coordinates[0]}]).addTo(mymap);
      `;
    // script.setAttribute({{'*ngIf = newLocation'}});
    this._renderer2.appendChild(this._document.body, script);
  }

}
