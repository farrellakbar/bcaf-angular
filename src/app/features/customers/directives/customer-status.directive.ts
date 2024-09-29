import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomerStatus]',
})
export class CustomerStatusDirective implements OnInit {
  @Input() appCustomerStatus: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    console.log(this.appCustomerStatus);

    if (this.appCustomerStatus === 'lunas') {
      this.el.nativeElement.classList.add('badge', 'text-bg-success');
    } else if (this.appCustomerStatus === 'macet') {
      this.el.nativeElement.classList.add('badge', 'text-bg-danger');
    } else {
      this.el.nativeElement.classList.add('badge', 'text-bg-secondary'); // Perbaiki typo 'secodary' menjadi 'secondary'
    }
  }
}
