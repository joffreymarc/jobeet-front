import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonEntrepriseService {

  base_url = "http://localhost:3000/entreprises/";
  
  base_url2 = "http://localhost:3000/cv/";
  
  base_url3 = "http://localhost:3000/users/";
  
  constructor(private http: HttpClient) {

  }

  getEntreprise(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.get(this.base_url + "getEntreprise/" + id);
  }

  addEntreprise(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.post(this.base_url +"addEntreprise/", body, httpOptions)
  }

  getEntreprises() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.get(this.base_url + "getEntreprises/");
  }

  modifyIdEntreprise(body) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.put(this.base_url2 + "modifyIdEntreprise/", body, httpOptions)
  }

  getEntrepriseOffres(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    return this.http.get(this.base_url + "getEntrepriseOffres/" + id, httpOptions);
  }

  getUser(id){
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    }
    return this.http.get(this.base_url3 + "getUser/" + id, httpOptions);
  }
  
  updateDescription(description){
    let body = {
      description: description
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    }
    return this.http.put(this.base_url + "updateDescription/" , body, httpOptions);
  }

  uploadPic(fileToUpload: File) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem("token")
      })
    };
    const formData: FormData = new FormData();
    formData.append('picture', fileToUpload, fileToUpload.name);
    return this.http.post(this.base_url + "/upload", formData, httpOptions);
  }

}
