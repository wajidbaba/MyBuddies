import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  usersRef: AngularFireList<any>;

  constructor(private http: HttpClient, private firebaseDb: AngularFireDatabase) { }
  public TotalData: any = [];
  getUsers() {
    // return this.http.get('../assets/sampleData.json');
    this.usersRef = this.firebaseDb.list("users");
    return this.usersRef;
  }

  getUser(userId) {
    return this.TotalData.filter(function (item) {
      return item.id == userId;
    })[0];
  }

  setData(data) {
    this.TotalData = data;
  }

  updateUser(userDetails) {
    this.usersRef.update(userDetails.$key, {
      bio: userDetails.bio,
      email: userDetails.email,
      desingnation: userDetails.designation,
      education: userDetails.education,
      gpa: userDetails.gpa,
      Interests: userDetails.Interests,
    })
  }

}
