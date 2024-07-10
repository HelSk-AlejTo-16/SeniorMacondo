import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

interface Empleado {
  nombre: string;
  entrada: string;
  salida: string;
  editing: boolean;
}

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent {
  empleados: Empleado[] = [
    { nombre: 'Empleado 1', entrada: 'xx/xx/xx', salida: 'xx/xx/xx', editing: false },
    { nombre: 'Empleado 2', entrada: 'xx/xx/xx', salida: 'xx/xx/xx', editing: false },
    { nombre: 'Empleado 3', entrada: 'xx/xx/xx', salida: 'xx/xx/xx', editing: false },
  ];

  removeRow(empleado: Empleado): void {
    this.empleados = this.empleados.filter(e => e !== empleado);
  }

  editRow(empleado: Empleado): void {
    empleado.editing = true;
  }

  saveRow(empleado: Empleado): void {
    empleado.editing = false;
  }
  number:number = 1

  decrementar() {
    this.number--;
  }
}