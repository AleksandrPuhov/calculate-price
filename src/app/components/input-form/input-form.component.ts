import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CalculateService } from 'src/app/services/calculate.servise';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent implements OnInit {
  inputForm = this.fb.group({
    distance: [''],
    age: [''],
    weight: [''],
  });

  constructor(
    private fb: FormBuilder,
    private calculateService: CalculateService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.calculateService.getCalculate(this.inputForm.value);
  }
}
