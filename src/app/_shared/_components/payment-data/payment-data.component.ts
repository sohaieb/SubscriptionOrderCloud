import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-payment-data',
  templateUrl: './payment-data.component.html',
  styleUrls: ['./payment-data.component.scss']
})
export class PaymentDataComponent implements OnInit {
  @Input() paymentData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
