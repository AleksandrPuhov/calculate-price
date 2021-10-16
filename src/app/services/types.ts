export interface Tariff {
  id?: number;
  nameTariff: string;
  priceTariff: number;
  maxWeight: number;
  baggageLimit: boolean;
  baggageLimitsWeight?: number;
  baggagePriceLess?: number;
  baggagePriceMore?: number;
  baggagePricePerKG?: true;
  ageLimit: boolean;
  ageLimitNum?: number;
  ageLimitDiscontWithBaggage?: boolean;
  ageLimitDiscount?: number;
}

export interface CompanyTariffs {
  id?: number;
  nameCompany: string;
  tariffList: Tariff[];
}

export interface TariffCalculate {
  tarifname: string;
  price: number;
}

export interface CompanyTariffsCalculate {
  id?: number;
  nameCompany: string;
  prises: TariffCalculate[];
}

export interface CalculateProps {
  distance: number;
  age: number;
  weight: number;
}
