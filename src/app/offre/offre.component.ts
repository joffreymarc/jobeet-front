import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavbarService } from '../navigation/service/navbar.service';
import { DomSanitizer } from '@angular/platform-browser';
import { OffreService } from './service/offre.service';


@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OffreComponent implements OnInit {

  display_form = false;
  offre;
  entreprise;
  competences;

  constructor(private nav: NavbarService, private _sanitizer: DomSanitizer, private http: OffreService) {
    this.offre = JSON.parse(localStorage.getItem("offre"));
    this.getCompetences(this.offre.id)
    console.log("c'est mooiii : ", this.offre)
    if (this.offre.id_entreprise != null)
      this.getEntreprise(this.offre.id_entreprise);
    else
      return;
   }

  ngOnInit() {
    this.nav.show();
  }

  getEntreprise(id) {
    this.http.getEntreprise(id)
      .subscribe(data => {
        this.entreprise = JSON.parse(JSON.stringify(data)).data[0];
      })
  }

  getCompetences(id) {
    this.http.getCompetencesByOffre(id)
      .subscribe(data => {
        this.competences = JSON.parse(JSON.stringify(data)).data;
        console.log(this.competences)
      })
  }

}
