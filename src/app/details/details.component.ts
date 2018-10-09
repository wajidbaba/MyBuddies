import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from "@angular/router";
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EditDetailsComponent } from '../edit-details/edit-details.component';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  userId: Number;
  public userDetails: any = {};

  constructor(private route: ActivatedRoute, private data: DataService, private modalService: NgbModal) {
    this.route.params.subscribe(params => this.userId = params.id);
  }

  openModal() {
    // const modalRef = this.modalService.open(ModalComponent);
    const modalRef = this.modalService.open(EditDetailsComponent);
    modalRef.componentInstance.title = 'Edit Details of ' + this.userDetails.shortName;
    (modalRef.componentInstance as EditDetailsComponent).userDetails = this.userDetails;

    let tempIntr = '', InterestsLength = this.userDetails.Interests.length;
    this.userDetails.Interests.map(function (item, index) {
      tempIntr += item.description + (index < InterestsLength - 1 ? ';' : '');
    });

    (modalRef.componentInstance as EditDetailsComponent).interestsFormatted = tempIntr;
  }

  ngOnInit() {
    this.userDetails = this.data.getUser(this.userId);
  }

}
