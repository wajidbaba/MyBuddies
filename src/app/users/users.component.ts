import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public users: any = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    //using local json
    // this.dataService.getUsers().subscribe(
    //   res => {
    //     this.users = res,
    //       this.dataService.setData(this.users)
    //   }
    // );


    // Using firebase Database
    let data = this.dataService.getUsers();

    data.snapshotChanges().subscribe(item => {
      item.forEach(element => {
        let y = element.payload.toJSON(),
          interests = y['Interests'],
          interestesTemp = [];

        for (var key in interests) {
          if (interests.hasOwnProperty(key)) {
            interestesTemp.push(interests[key]);
          }
        }
        y['Interests'] = interestesTemp;
        y['$key'] = element.key;
        this.users.push(y);
      });
      this.dataService.setData(this.users);
    });

  }

}
