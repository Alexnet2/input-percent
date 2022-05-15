import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public percentForm = new FormGroup({
    percent: this.formBuilder.control(null),
  });

  public percentControl = new FormControl();

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.percentControl = this.percentForm.get('percent') as FormControl;
  }

  save() {
    console.log('EStou aqui: ', this.percentForm.value);
  }
}
