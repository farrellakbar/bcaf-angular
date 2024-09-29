import { Component, EventEmitter, inject, Output, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReservasiService } from '../../../../cores/services/reservasi.service';
import { IReservasi } from '../../../../cores/interfaces/i-reservasi';
import { IPagination } from '../../../../cores/interfaces/i-pagination';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-reservasi-choice',
  templateUrl: './reservasi-choice.component.html',
  styleUrl: './reservasi-choice.component.css',
})
export class ReservasiChoiceComponent {
  // private modalService = inject(NgbModal);
  @Output() emitReservation: EventEmitter<IReservasi> = new EventEmitter();
  page: number = 1;
  query: string = '';
  searchControl: FormControl = new FormControl();  // Ganti [(ngModel)]="query" menjadi reactive form control

  constructor(
    private modalService: NgbModal,
    private reservasiService: ReservasiService
  ) {
    this.searchControl.valueChanges
    .pipe(
      debounceTime(300),           // Menunggu 300ms setelah user selesai mengetik
      distinctUntilChanged()        // Hanya trigger jika query berubah
    )
  }

  closeResult = '';
  loadingReservasi = false; // Tambahkan properti loadingReservasi untuk spinner

  open(content: TemplateRef<any>) {
    this.loadingReservasi = true;

    this.modalService.open(content, { size: 'lg' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
    setTimeout(() => {
      this.onAllReservations();
    }, 1000); // Menunda pemuatan data selama 1 detik
}

  private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }

  get reservations(): IPagination<IReservasi[]> {
    return this.reservasiService.reservations;
  }

  //BEFORE PAGINATION
  // onAllReservations() {
  //   this.reservasiService.all().subscribe((resp: IReservasi[]) => {
  //     this.reservasiService.reservations = resp;
  //     // Nonaktifkan spinner setelah data selesai dimuat
  //     this.loadingReservasi = false;
  //   });
  // }
  //AFTER PAGINATION
  onAllReservations() {
    this.reservasiService.all().subscribe(
      (resp: IPagination<IReservasi[]>) => {
        if (resp && resp.data && resp.data.length > 0) {
          this.reservasiService.reservations = resp;
        } else {
          console.log('No data found or empty response');
          this.reservasiService.reservations = { ...resp, data: [] }; // Handling empty data
        }
        this.loadingReservasi = false;
      },
      (error) => {
        console.error('Error fetching reservations', error);
        this.loadingReservasi = false;
      }
    );
  }


  onPaginateReservation(data: number) {
    console.log(typeof data);
    this.reservasiService
      .all(data)
      .subscribe((resp: IPagination<IReservasi[]>) => {
        this.reservasiService.reservations = resp;
      });
  }

  onGetReservation(data: IReservasi) {
    this.emitReservation.emit(data);
    // TODO: please refer to NgbActiveModal
    // this.modalService.;
    // NgbActiveModal;
    // this.modalService.activeInstances
  }
  onSearchReservation() {
    console.log(this.query);
    this.page = 1;
    this.reservasiService
      .all(this.page, this.query)
      .subscribe((resp: IPagination<IReservasi[]>) => {
        this.reservasiService.reservations = resp;
      });
  }
}
