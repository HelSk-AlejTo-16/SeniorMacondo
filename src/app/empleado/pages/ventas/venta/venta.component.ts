import { Component,ViewChild } from '@angular/core';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styles: ``
})
export class VentaComponent {
  @ViewChild('modal') modal: any;

  openModal() {
    this.modal.nativeElement.showModal();
  }

  closeModal() {
    this.modal.nativeElement.close();
}
}

