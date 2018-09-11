import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userId: String;
  public userDetails: any = {};

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.userId = params.id);
  }
  ngOnInit() {
    this.userDetails = this.data.getUser(this.userId);
  }

}
