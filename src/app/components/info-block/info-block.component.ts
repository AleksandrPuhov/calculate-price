import { Component, OnInit } from '@angular/core';
import { CalculateService } from 'src/app/services/calculate.servise';
import { CompanyTariffsCalculate } from 'src/app/services/types';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.scss'],
})
export class InfoBlockComponent implements OnInit {
  pricesList: CompanyTariffsCalculate[] = [];

  constructor(private calculateService: CalculateService) {}

  ngOnInit(): void {
    this.calculateService.pricesList$.subscribe((pricesList) => {
      this.pricesList = pricesList;
    });
  }
}
