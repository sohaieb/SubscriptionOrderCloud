import {Component, Input, OnInit, Output, EventEmitter, AfterViewInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-finalization',
  templateUrl: './finalization.component.html',
  styleUrls: ['./finalization.component.scss']
})
export class FinalizationComponent implements OnInit {
  @Input() findOptionTextBy: any;
  @Input() orderForm: any;
  @Input() total: number = 0;
  @Output() onFinishPayement = new EventEmitter();
  get finalizationGroup() : FormGroup {
    return this.orderForm.get('finalization') as FormGroup;
  }

  constructor() { }

  ngOnInit(): void {

  }

  finishPayement() {
    this.onFinishPayement.emit();
  }
}
