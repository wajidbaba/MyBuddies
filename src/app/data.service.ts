import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  public TotalData: any = [];
  getUsers() {
     return this.http.get('../assets/sampleData.json');
  }

  getUser(userId) {
    return this.TotalData.filter(function (item) {
      return item.id == userId;
    })[0];
  }

  setData(data){
    this.TotalData = data;
  }
}
