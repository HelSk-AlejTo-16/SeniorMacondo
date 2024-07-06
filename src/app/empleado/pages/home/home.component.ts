import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {
  constructor(private router: Router) { }

 comida() {
  this.router.navigate(['../empleado/']);
}
regresar() {
  this.router.navigate(['../WebSrMacondo/home']);
}
}
