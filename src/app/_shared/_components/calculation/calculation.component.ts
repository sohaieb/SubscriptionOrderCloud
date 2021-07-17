import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.scss']
})
export class CalculationComponent implements OnInit {
  @Input() findOptionTextBy: any;
  @Input() orderForm: any;
  @Input() total: any;
  constructor() { }

  ngOnInit(): void {
  }

}
