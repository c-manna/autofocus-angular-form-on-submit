import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactsForm: FormGroup;
  contact = {
    name: '',
    email: '',
    department: ''
  }
  constructor(private _fb: FormBuilder) {
    this.contactsForm = this._fb.group({
      id: [Number],
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z-,]+(s{0,1}[a-zA-Z-, ])*$')
        ]
      ],
      department: ['', [Validators.required]],
      email: [
        '',
        [
          Validators.required
          //Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}')
        ]
      ]
    });
  }

  get formControls() {
    return this.contactsForm.controls;
  }

  submitContactsForm() {
    if (this.contactsForm.invalid) {
      return;
    } else {
      console.log(this.contactsForm.value);
    }
  }
}
