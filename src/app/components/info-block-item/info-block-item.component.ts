import { Component, Input, OnInit } from '@angular/core';
import { TariffCalculate } from 'src/app/services/types';

@Component({
  selector: 'app-info-block-item',
  templateUrl: './info-block-item.component.html',
  styleUrls: ['./info-block-item.component.scss'],
})
export class InfoBlockItemComponent implements OnInit {
  @Input() tariffList: TariffCalculate[] = [];

  constructor() {}

  ngOnInit(): void {}
}
