//clase abstracta averiguar diferencia con interface
export abstract class FiguraGeometrica {
    //constructor por defecto
    nombre: string
    constructor(nombre : string) {
        this.nombre=nombre
        
    }
    abstract calcularPerimetro():number
}

export class Circulo extends FiguraGeometrica{

    radio: number
    constructor(radio: number){
    //con esto cada vez que llame la clase Circulo su nombre será circulo
    super("circulo")
    this.radio=radio
    }
    
    override calcularPerimetro(): number {
        //llamamos la clase interna Math para obtener el valor de pi
        return 2*this.radio*Math.PI
    }
}

export class TrianguloEscaleno extends FiguraGeometrica{

    ladoA: number
    ladoB: number
    ladoC: number
    constructor(ladoA: number, ladoB:number, ladoC:number){
    //con esto cada vez que llame la clase TrianguloEscaleno su nombre será trianguloEscaleno
    super("trianguloEscaleno")
    this.ladoA=ladoA
    this.ladoB=ladoB
    this.ladoC=ladoC
    }
    
    override calcularPerimetro(): number {
        return this.ladoA+this.ladoB+this.ladoC
    }
}
export class TrianguloEquilatero extends TrianguloEscaleno{
    //aqui el constructor es sobre el triangulo equilatero
    constructor(ladoEq:number){
        super(ladoEq,ladoEq,ladoEq)
        //recordar que esta clase por escalas sigue heredando de FiguraGeometrica
        this.nombre="trianguloEquilatero"
    }
    //no es necesario re-establecer el perimetro pues la formula hereda y aplica desde TrianguloEscaleno
}