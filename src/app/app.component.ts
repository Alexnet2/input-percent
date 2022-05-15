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
  ngOnInit(): void {
    (
      this.percentForm.get('percent') || ({} as FormControl)
    ).valueChanges.subscribe((value) => {
      const percent = Number(String(value).replace('%', '')) / 100;
      (this.percentForm.get('percent') || ({} as FormControl)).setValue(value, {
        emitEvent: false,
      });
    });
  }
}
