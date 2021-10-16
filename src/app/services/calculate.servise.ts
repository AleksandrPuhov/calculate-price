import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { COMPANY_TARIFFS_LIST } from './mock-data';
import {
  CalculateProps,
  CompanyTariffs,
  CompanyTariffsCalculate,
} from './types';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  private companyTariffsList: CompanyTariffs[];

  private pricesList: CompanyTariffsCalculate[] = [];

  private pricesListSubject = new Subject<CompanyTariffsCalculate[]>();
  public pricesList$ = this.pricesListSubject.asObservable();

  constructor() {
    this.companyTariffsList = COMPANY_TARIFFS_LIST;
  }

  getCalculate(value: CalculateProps) {
    const prices = this.companyTariffsList.map((companyTariffs) => {
      const priseList = companyTariffs.tariffList.map((tariff) => {
        let fullPrice = value.distance * tariff.priceTariff;
        let baggagePrice = 0;

        if (value.weight > tariff.maxWeight) {
          fullPrice = -1;
        } else {
          if (
            tariff.baggageLimit &&
            tariff.baggageLimitsWeight !== undefined &&
            tariff.baggagePriceLess !== undefined &&
            tariff.baggagePriceMore !== undefined
          ) {
            const baggageTariff =
              value.weight <= tariff.baggageLimitsWeight
                ? tariff.baggagePriceLess
                : tariff.baggagePriceMore;

            baggagePrice = tariff.baggagePricePerKG
              ? baggageTariff * value.weight
              : baggageTariff;
          }
          if (
            tariff.ageLimit &&
            tariff.ageLimitNum !== undefined &&
            tariff.ageLimitDiscontWithBaggage !== undefined &&
            tariff.ageLimitDiscount !== undefined
          ) {
            fullPrice = tariff.ageLimitDiscontWithBaggage
              ? (fullPrice + baggagePrice) * tariff.ageLimitDiscount
              : fullPrice + baggagePrice * tariff.ageLimitDiscount;
          } else {
            fullPrice = fullPrice + baggagePrice;
          }
        }
        return {
          tarifname: tariff.nameTariff,
          price: fullPrice,
        };
      });

      return {
        nameCompany: companyTariffs.nameCompany,
        prises: priseList,
      };
    });

    this.pricesList = prices;
    this.pricesListSubject.next(this.pricesList);
  }
}
