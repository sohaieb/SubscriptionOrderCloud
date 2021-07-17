import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AMOUNT_GB, DURATIONS} from "../../_constants/GLOBALS";
import {email, expirationDate} from "../../_custom_validators/CustomValidators";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  isLinear = true;
  durations = DURATIONS;
  amounts = AMOUNT_GB;
  // @ts-ignore
  orderForm: FormGroup;
  total = 0;
  defaultReductionValue = 10; // 10%
  private subscription: any;

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

  /**
   * Initialize form group for stepper
   *
   * @private
   */
  private initFormStepper() {
    this.orderForm = this._formBuilder.group({
      subParams: this.getSubscriptionParametersFormGroup(),
      paymentData: this.getPayementDataFormGroup(),
      finalization: this.getFinalizationFormGroup()
    });
    this.calculateTotal();
    this.subscription = this.orderForm
      .get('subParams')?.valueChanges
      .subscribe(
      changes => {
        this.calculateTotal();
      }
    );
  }

  /**
   * Calculate total and check if upfront is checked.
   */
  calculateTotal() {
    let durationObject = this.findOptionTextBy('duration',this.orderForm.get('subParams.duration')?.value);
    let amountObject = this.findOptionTextBy('amount',this.orderForm.get('subParams.amount')?.value);
    let reducedValue = 0;
    this.total = durationObject?.price_per_gb * amountObject.value;
    if(this.orderForm.get('subParams.upfront')?.value){
      reducedValue = this.total * this.defaultReductionValue / 100;
      this.total -= reducedValue;
    }
  }

  /**
   * Get Subscription final form group.
   *
   * @private
   */
  private getFinalizationFormGroup() {
    return this._formBuilder.group({
      userEmail: [null, [Validators.required, email()]],
      termsCondition: [false]
    });
  }

  /**
   * Get Subscription payement card number, card expiration date and
   * card security code form group.
   *
   * @private
   */
  private getPayementDataFormGroup() {
    return this._formBuilder.group({
      cardNumber: ['',[Validators.required]],
      cardExpiration: ['',[Validators.required, expirationDate()]],
      cardSecurityCode: ['',[Validators.required]]
    });
  }

  /**
   * Get Subscription duration,amount and upfront status
   * parameters form group.
   *
   * @private
   */
  private getSubscriptionParametersFormGroup() {
    return this._formBuilder.group({
      duration: [this.durations[2].value],
      amount: [this.amounts[0].value],
      upfront: [false]
    });
  }

  /**
   * Find option by entered key
   */
  findOptionTextBy(option: 'duration' | 'amount' | 'upfront', value: any = null) : any{
    switch (option){
      case 'duration': {
        // @ts-ignore
        return this.durations.find(duration => duration.value == value);
      }
      case 'amount' : {
        return this.amounts.find(amount => amount.value == value);
      }
      case 'upfront' : {
        return this.orderForm.get('subParams.upfront')?.value?'Yes':'No';
      }
    }
  }

  /**
   * Payement finalization process & Send data to server side
   */
  finishPayement() {
    // send data to Server side
  }

  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
