import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-result-popup',
  templateUrl: './result-popup.component.html',
  styleUrls: ['./result-popup.component.css'],
})
export class ResultPopupComponent implements OnInit {
  @Input() data: any = {};
  @Output() closePopup = new EventEmitter<{ isOpen: boolean }>();
  constructor() {}
  ngOnInit(): void {}

  setIsOpen = (): void => {
    this.closePopup.emit({ isOpen: false });
  };
}
