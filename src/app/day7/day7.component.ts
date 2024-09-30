import { Component, ViewChild } from '@angular/core';
import { IUser } from '../cores/interfaces/i-user';
import { FormGroup, NgForm } from '@angular/forms';

const MOCK_DATA = {
  email: 'budisukma@mail.com',
  username: 'budisukma',
  menikah: false,
  gender: 'pria',
  hobi: 2,
  address: {
    city: 'Jakarta Selatan',
    zipCode: '11234',
    street: 'Jl. Kebangsaan Raya No. 3 Blok A.',
  },
};

@Component({
  selector: 'app-day7',
  templateUrl: './day7.component.html',
  styleUrl: './day7.component.css'
})
export class Day7Component {
  @ViewChild('form') form!: NgForm;
  @ViewChild('form2') form2!: NgForm;

  users: IUser[] = [];
  loading: boolean = false;
  user: {
    username: string;
    email: string;
  } = { username: '', email: '' };

  onDefault() {
    this.form.setValue(MOCK_DATA);
  }

  onChangeHobi() {
    this.form.controls['hobi'].setValue(3);
  }

  onPatching() {
    let obj = {
      menikah: true,
      gender: 'wanita',
    };

    this.form.control.patchValue(obj);
  }

  onChangeAddress() {
    let obj = {
      city: 'Jakarta Barat',
    };

    let formGroup = this.form.controls['address'] as FormGroup;
    formGroup.patchValue(obj);
  }

  onSubmit() {
    this.user = this.form.value;
    console.log(this.form.value);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.form.setValue(MOCK_DATA);
    }, 200);
  }
}
