import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

class Hobi {
  id: number = 0;
  name: string = '';

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const VALIDATORS = {
  nameValidator: [
    Validators.required,
    Validators.maxLength(15),
    Validators.pattern('^[a-zA-Z]+$'),
  ],
  genderValidator: [Validators.required],
  hobiValidator: [Validators.required],
  address: {
    cityValidator: [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(5),
    ],
    streetValidator: [
      Validators.required,
      Validators.maxLength(100),
      Validators.minLength(10),
    ],
    zipCodeValidator: [
      Validators.required,
      Validators.maxLength('11620'.length),
      Validators.minLength('11620'.length),
    ],
  },
};

@Component({
  selector: 'app-day8',
  templateUrl: './day8.component.html',
  styleUrl: './day8.component.css'
})
export class Day8Component implements OnInit{
  listOfHobi: Hobi[] = [
    new Hobi(1, 'Memasak'),
    new Hobi(2, 'Mancing'),
    new Hobi(3, 'Membaca'),
  ];

  form: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  form4: FormGroup;

  active = 1;

  ppn: number = 0.11;
  hargaAfterPPN: number = 0;

  // form2
  diskon: number = 0;
  hargaAfterDiskon: number = 0;
  dibayar: number = 0;
  sisa: number = 0;
  grandTotal: number = 0;
  kembalian: number = 0;
  // form: FormGroup = new FormGroup({
  //   name: new FormControl('Farrell Cerdas', VALIDATORS.nameValidator),
  //   isMarried: new FormControl(true),
  //   gender: new FormControl('', VALIDATORS.genderValidator),
  //   hobi: new FormControl(0, VALIDATORS.hobiValidator),
  //   address: new FormGroup({
  //     city: new FormControl('', VALIDATORS.address.cityValidator),
  //     street: new FormControl('', VALIDATORS.address.streetValidator),
  //     zipCode: new FormControl('', VALIDATORS.address.zipCodeValidator),
  //   }),
  // });

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ['', VALIDATORS.nameValidator],
      harga: [0],
      isMarried: [false],
      gender: ['', VALIDATORS.genderValidator],
      hobi: [null, VALIDATORS.hobiValidator],
      address: this.formBuilder.group({
        city: ['', VALIDATORS.address.cityValidator],
        street: ['', VALIDATORS.address.streetValidator],
        zipCode: ['', VALIDATORS.address.zipCodeValidator],
      }),
    });

    this.form2 = this.formBuilder.group({
      hargaTotal: [50000],
      diskon: [0],
      dibayar: [0],
    });

    this.form3 = this.formBuilder.group({
      name: ['', [Validators.required]],
      skills: this.formBuilder.array([]),
    });

    this.form4 = this.formBuilder.group({
      employees: this.formBuilder.array([]),
    });
  }


  ngOnInit(): void {
    this.form.get('name')?.statusChanges.subscribe((status: string) => {
      console.log("Listen status name : field", status);
    });
    this.form.get('hobi')?.statusChanges.subscribe((valeue: string) => {
      console.log("Listen status name : field", valeue);
    })
    this.form.get('harga')?.valueChanges.subscribe((value: number) => {
      let hargaPPN = this.ppn * value;
      this.hargaAfterPPN = hargaPPN + value;
    });
    this.form2.get('diskon')?.valueChanges.subscribe((value: number) => {
      this.calculateGrandTotal();
    });
    this.form2.get('dibayar')?.valueChanges.subscribe((value: number) => {
      this.calculateKembalianSisa();
    });
    this.calculateGrandTotal();
  }
  calculateGrandTotal() {
    const hargaTotal = this.form2.get('hargaTotal')?.value || 0;
    const diskon = this.form2.get('diskon')?.value || 0;

    const hargaDiskon = hargaTotal * (diskon / 100);

    this.hargaAfterDiskon = hargaTotal - hargaDiskon;

    this.form2.patchValue({
      grandTotal: this.hargaAfterDiskon
    });

    this.calculateKembalianSisa();
  }

  calculateKembalianSisa() {
    this.grandTotal = this.form2.get('grandTotal')?.value || 0;
    this.dibayar = this.form2.get('dibayar')?.value || 0;

    if (this.dibayar >= this.grandTotal) {
      this.kembalian = this.dibayar - this.grandTotal;
      this.form2.patchValue({
        sisa: 0
      });
    }
    else {
      this.sisa = this.grandTotal - this.dibayar;
      this.form2.patchValue({
        kembalian: 0,
      });
    }
  }
  getSkills(): FormArray {
    return this.form3.get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.formBuilder.group({
      skill: ['', [Validators.required]],
      exp: [0, [Validators.required]],
    });
  }

  addSkill() {
    this.getSkills().push(this.newSkill());
  }

  getSkill(index: number): FormGroup {
    return this.getSkills().at(index) as FormGroup;
  }

  removeSkill(index: number) {
    this.getSkills().removeAt(index);
  }
  onSubmit() {
    console.log(this.form.value);
    console.log(this.form2.value);
    if (this.form3.valid) {
      console.log(this.form3.value);
    }
  }

  getEmployees(): FormArray {
    return this.form4.get('employees') as FormArray;
  }

  getEmployee(indexEmployee: number): FormGroup {
    return this.getEmployees().at(indexEmployee) as FormGroup;
  }

  newEmployee() {
    return this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      skills: this.formBuilder.array([]),
    });
  }

  addEmployee() {
    this.getEmployees().push(this.newEmployee());
  }

  removeEmployee(indexEmployee: number) {
    this.getEmployees().removeAt(indexEmployee);
  }

  addSkill4(indexEmployee: number) {
    this.getSkills4(indexEmployee).push(this.newSkill());
  }
  getSkills4(indexEmployee: number): FormArray {
    return this.getEmployee(indexEmployee).get('skills') as FormArray;
  }
  removeSkill4(indexEmployee: number, indexSkill: number) {
    this.getSkills4(indexEmployee).removeAt(indexSkill);
  }
}
