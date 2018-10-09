import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {

  @Input() userDetails = {};
  @Input() interestsFormatted: any;

  constructor(private dataService: DataService,
    public activeModal: NgbActiveModal, private toastr: ToastrService) { }

  onInterestBlur(interests) {
    this.interestsFormatted = interests.split(';');
  }

  prepareInterestsArray(userDetails) {
    let arrayTemp = [];
    for (let i = 0; i < this.interestsFormatted.length; i++) {
      let objTemp = {};
      objTemp = {
        name: 'Int' + Math.random(),
        description: this.interestsFormatted[i]
      }
      arrayTemp.push(objTemp);
    }
    userDetails.Interests = arrayTemp;
  }

  onSaveClick(userDetails) {
    this.prepareInterestsArray(userDetails);
    this.dataService.updateUser(userDetails);
    this.activeModal.close('Close click');
    this.toastr.success('Data Saved Successfully.');

  }

  ngOnInit() {
  }

}
