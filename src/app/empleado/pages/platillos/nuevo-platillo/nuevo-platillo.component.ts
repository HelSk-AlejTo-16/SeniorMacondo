import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-platillo',
  templateUrl: './nuevo-platillo.component.html',
  styles: ``
})
export class NuevoPlatilloComponent {
  constructor(private router:Router){}
  regresar() {
    this.router.navigate(['../WebSrMacondo/home']);
  }
  regresar1(){
this.router.navigate([])
  }


}
