import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: Number = 50;
  @Output() newValor: EventEmitter<Number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onlyNumbers(newValue: Number) {
    

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    this.txtProgress.nativeElement.value = this.porcentaje;
    this.newValor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();
  }

  changePorcentaje(valor) {
    this.porcentaje = this.porcentaje + valor;
    if (this.porcentaje >= 100) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje < 0) {
      this.porcentaje = 0;
      return;
    }

    this.newValor.emit(this.porcentaje);
  }
}
