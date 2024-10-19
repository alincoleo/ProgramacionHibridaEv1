import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel,IonThumbnail, IonImg, IonInput, IonButton } from "@ionic/angular/standalone";
import { Circulo } from '../modelo/figurasGeometricas';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonImg, IonLabel, IonItem, IonList, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard,IonThumbnail,FormsModule],

})
export class CirculoComponent  implements OnInit {
  radiostr: string=""
  resultado: string=""
  constructor() { }
  ngOnInit() {}

calcularPerimetro() {
  const radio = parseInt(this.radiostr)
  const circulo = new Circulo(radio)
  const perimetro = circulo.calcularPerimetro()
  //se encontro el methodo toFixed para ajustar a decimales especificos
  this.resultado=`el perimetro es ${perimetro.toFixed(3)} cm`

}


}
