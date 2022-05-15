import { PercentPipe } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'input-percent',
  templateUrl: './input-percent.html',
})
export class InputPercentComponent implements OnInit {
  @Input() numberOfDecimalPlaces: number = 2;
  digitsInfo: string = `1.${this.numberOfDecimalPlaces}-${this.numberOfDecimalPlaces}`;
  value: number = 0;
  textValue: string = '';

  public percentPipe = new PercentPipe('pt');

  public percentForm: FormGroup = this.formBuilder.group({
    percent: this.formBuilder.control(null),
  });

  constructor(private formBuilder: FormBuilder) {}

  @HostListener('keydown', ['$event.key'])
  hostKeydown(key: string) {
    const teclasAceitas = /^(\d)|(Backspace)$/;
    if (!teclasAceitas.test(key)) {
      return;
    }

    if (key === 'Backspace') {
      key = '';
      this.textValue = this.textValue.substr(0, this.textValue.length - 1);
    } else if (!/\d/.test(key)) {
      return;
    }

    this.textValue += key;

    if (+this.textValue === 0) {
      this.textValue = '';
    }

    this.value =
      +this.textValue / (100 * Math.pow(10, this.numberOfDecimalPlaces));
  }

  ngOnInit(): void {
    this.percentForm.get('percent')?.valueChanges.subscribe((value) => {
      if (this.textValue == '' && value != null) {
        this.value =
          Number(String(value).replace('%', '').replace(',', '.')) / 100;
      }
      this.percentForm
        .get('percent')
        ?.setValue(this.percentPipe.transform(this.value, this.digitsInfo), {
          emitEvent: false,
        });
    });
  }
}
