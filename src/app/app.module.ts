import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoBlockItemComponent } from './components/info-block-item/info-block-item.component';
import { CalculateService } from './services/calculate.servise';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    InfoBlockComponent,
    InfoBlockItemComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [CalculateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
