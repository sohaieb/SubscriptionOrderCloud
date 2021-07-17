import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-subscription-params',
  templateUrl: './subscription-params.component.html',
  styleUrls: ['./subscription-params.component.scss']
})
export class SubscriptionParamsComponent implements OnInit {
  @Input() subscriptionParameters: any;
  @Input() durations: any;
  @Input() amounts: any;
  @Input() configuration: any;

  constructor() { }

  ngOnInit(): void {
  }

}
