import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrderComponent } from './_pages/order/order.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatModules} from "./_shared/_modules/shared-material-design.module";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import { SubscriptionParamsComponent } from './_shared/_components/subscription-params/subscription-params.component';
import { PaymentDataComponent } from './_shared/_components/payment-data/payment-data.component';
import { FinalizationComponent } from './_shared/_components/finalization/finalization.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    SubscriptionParamsComponent,
    PaymentDataComponent,
    FinalizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModules,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
