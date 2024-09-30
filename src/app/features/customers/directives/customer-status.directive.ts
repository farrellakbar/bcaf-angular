import { Directive, ElementRef, Input, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCustomerStatus]',
})
export class CustomerStatusDirective implements OnInit {
  @Input() appCustomerStatus: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.updateStatus();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appCustomerStatus']) {
      this.updateStatus();
    }
  }

  private updateStatus() {
    // Hapus class sebelumnya agar tidak ada konflik
    this.el.nativeElement.classList.remove('text-bg-success', 'text-bg-danger', 'text-bg-warning');

    // Update class berdasarkan status
    if (this.appCustomerStatus === 'lunas') {

      this.el.nativeElement.classList.add('badge', 'text-bg-success');
    } else if (this.appCustomerStatus === 'macet') {
      this.el.nativeElement.classList.add('badge', 'text-bg-danger');
    } else {
      this.el.nativeElement.classList.add('badge', 'text-bg-warning');
    }
  }
}
