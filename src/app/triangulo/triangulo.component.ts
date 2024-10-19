import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonLabel,IonThumbnail, IonImg, IonInput, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../modelo/figurasGeometricas';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonImg, IonLabel, IonItem, IonList, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard,IonThumbnail,FormsModule],
})
export class TrianguloComponent  implements OnInit {
  ladoAstr :string=""
  ladoBstr :string=""
  ladoCstr :string=""
  resultado: string=""
  constructor() { }
  ngOnInit() {}

calcularPerimetro() {
  const ladoA = parseInt(this.ladoAstr)
  const ladoB = parseInt(this.ladoBstr)
  const ladoC = parseInt(this.ladoCstr)
  const trianguloEscaleno = new TrianguloEscaleno(ladoA,ladoB,ladoC)
  const perimetro = trianguloEscaleno.calcularPerimetro()
  //se encontro el methodo toFixed para ajustar a decimales especificos
  this.resultado=`el perimetro es ${perimetro.toFixed(0)} cm`

}


}