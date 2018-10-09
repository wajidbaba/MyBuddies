import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title = `Information`;

  @Output() saveClick = new EventEmitter();
  constructor(public activeModal: NgbActiveModal) {
  }

  onClick() {
    this.saveClick.emit(null);
  }

  ngOnInit() {
  }

}
