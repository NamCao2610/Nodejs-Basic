import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { BrowserModule } from '@angular/platform-browser';
// import { getHeapSpaceStatistics } from 'v8';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {
checkToken = false;
  constructor(private http: HttpClient) { }

  sendPost(value) {
    const url = 'https://testitvuong.herokuapp.com/user/signin';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };
    const body = JSON.stringify(value);
    return this.http.post(url, body, httpOptions )  
  };

  sendLogin(value){
    const url = 'https://testitvuong.herokuapp.com/user/signin';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };
    const body = JSON.stringify(value);
    return this.http.post(url, body, httpOptions);
  }

  sendSignUp(value){
    const url = 'https://testitvuong.herokuapp.com/user/signup';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };
    const body = JSON.stringify(value);
    return this.http.post(url, body, httpOptions);    
  }

  //check token thu co dung khong khi click vao thi
  sendCheckToken(): Promise<boolean>{
    const token = localStorage.getItem('token');
    if(!token) return  Promise.resolve(false);
    const url = 'https://testitvuong.herokuapp.com/user/checktoken';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };   
    const body  = JSON.stringify({token}); 
    return this.http.post(url, body, httpOptions ) 
    .toPromise()
    .then( res => true)
    .catch( res => false);
  }

  sendForgotPassword(form){
    const url = 'https://testitvuong.herokuapp.com/user/forgotpassword';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };
    const body = JSON.stringify(form);
    return this.http.post(url, body, httpOptions);
  }

  sendRestorePassword(form){
    const url = 'https://testitvuong.herokuapp.com/user/restorepassword';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };
    const body = JSON.stringify(form);
    return this.http.post(url, body, httpOptions);
  }

  sendChangePass(form){
    const url = 'https://testitvuong.herokuapp.com/user/changepassword';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };
    const body = JSON.stringify(form);
    return this.http.post(url, body, httpOptions);
  }

  sendChangeName(form){
    const url = 'https://testitvuong.herokuapp.com/user/changeinfo';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };
    const body = JSON.stringify(form);
    return this.http.post(url, body, httpOptions);
  }

  sendQK(subject, score){ 
    const url = 'https://testitvuong.herokuapp.com/user/sendKQ';
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //'Authorization': 'my-auth-token'
      })
    };
    const bodyy = { email, name, subject, score};
    const body = JSON.stringify(bodyy);
    return this.http.post(url, body, httpOptions);
  }

  getSubjects(){
    const url = './assets/TaiNguyen/db/Subjects.js';
    return this.http.get(url);
  }
  
  getQuiz(id){
    const url = `./assets/TaiNguyen/db/Quizs/${id}.js`;
     return this.http.get(url);
  }

}
