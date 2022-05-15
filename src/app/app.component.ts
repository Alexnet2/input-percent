import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public percentForm = new FormGroup({
    percent: this.formBuilder.control(null),
  });

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {}

  save() {
    console.log('EStou aqui: ', this.percentForm.value);
  }
}
