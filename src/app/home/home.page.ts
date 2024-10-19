import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonSelect,IonSelectOption,IonList, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from "../circulo/circulo.component";
import { TrianguloComponent } from "../triangulo/triangulo.component";
import { IonSelectCustomEvent } from '@ionic/core';
// me fallo unos minutos puesto no había realizado este import
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, IonList, CirculoComponent, TrianguloComponent,CommonModule],
})
export class HomePage {
  seleccionFigura : string =""
  //el metodo creado en home es igual al valor de la seleccion de la lista en home
  esSeleccionCirculo(){return this.seleccionFigura == "circulo"}
  esSeleccionTriangulo(){return this.seleccionFigura == "triangulo"}
  constructor() {}
  //cada vez que se eliga algo del selector se gatilla este evento el cual asigna el valor de la lista en home
  manejarSeleccionFigura($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
    this.seleccionFigura=$event.detail.value
    // console.log(this.seleccionFigura) //tuve que usar la consola para saber que me faltaba un import
  }
}
