import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AMOUNT_GB, DURATIONS} from "../../_constants/GLOBALS";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  isLinear = true;
  durations = DURATIONS;
  amounts = AMOUNT_GB;
  // @ts-ignore
  orderForm: FormGroup;
  get subscriptionParameters(): FormGroup {
    return this.orderForm.get('subParams') as FormGroup;
  }

  get paymentData() : FormGroup {
    return this.orderForm.get('paymentData') as FormGroup;
  }


  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initFormStepper();
  }

  private initFormStepper() {
    this.orderForm = this._formBuilder.group({
      subParams: this.getSubscriptionParametersFormGroup(),
      paymentData: this.getPayementDataFormGroup(),
      finalization: this.getFinalizationFormGroup()
    });
  }

  private getFinalizationFormGroup() {
    return this._formBuilder.group({
      userEmail: [],
      termsCondition: []
    });
  }

  private getPayementDataFormGroup() {
    return this._formBuilder.group({
      cardNumber: ['',[Validators.required]],
      cardExpiration: ['',[Validators.required]],
      cardSecurityCode: ['',[Validators.required]]
    });
  }

  private getSubscriptionParametersFormGroup() {
    return this._formBuilder.group({
      duration: [this.durations[2].value],
      amount: [this.amounts[0].value],
      upfront: [false]
    });
  }
}
