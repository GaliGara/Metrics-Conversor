import { LitElement, css, html } from 'lit'
import './steps/add-longitude'
import './steps/btn-conversor'


export class MetricConversor extends LitElement {

  static get styles() {
    return css `


    `
  }

  static get properties() {
    return {
      longitud: {
        type: Number,
      },
      unitsOfLength: {
        typpe: Array,
      },
      wishToConvert: {
        type: String,
      },
      currentUnit: {
        type: String
      },
      currentMetric: {
        type: Number
      },
    }
  }

  constructor() {
    super()
    this.unitsOfLength = ['mm', 'cm', 'in', 'ft'];
    this.wishToConvert = '';
    this.currentUnit = '';
    this.currentMetric = 0;
    this.longitud = 0;
  }

  mathMM(){

    let { wishToConvert, currentMetric, longitud } = this;

    if( wishToConvert === 'cm'){
      currentMetric = longitud / 10
      console.log(currentMetric)
      
    } else if( wishToConvert === 'in'){
      currentMetric = longitud / 25.4
      console.log(currentMetric)
      
    } else if ( wishToConvert === 'ft'){
      currentMetric = longitud / 304.8
      console.log(currentMetric)
    }    
  }

  mathCM(){
    if( this.wishToConvert === 'mm'){
      this.currentMetric = this.longitud * 10
      console.log(this.currentMetric)

    } else if ( this.wishToConvert === 'in'){
      this.currentMetric = this.longitud / 2.54
      console.log(this.currentMetric)

    } else if ( this.wishToConvert === 'ft'){
      this.currentMetric = this.longitud / 30.48
      console.log(this.currentMetric)

    }
  }

  mathIN(){
    if( this.wishToConvert === 'mm' ){
      this.currentMetric = this.longitud * 25.4
      console.log(this.currentMetric) 
      
    }else if( this.wishToConvert === 'cm'){
      this.currentMetric = this.longitud * 2.54
      console.log(this.currentMetric)

    }else if( this.wishToConvert === 'ft'){
      this.currentMetric = this.longitud / 12
      console.log(this.currentMetric)
      
    }
  }


  mathFT(){
    if( this.wishToConvert === 'mm' ){
      this.currentMetric = this.longitud * 304.8
      console.log(this.currentMetric) 
      
    }else if( this.wishToConvert === 'cm'){
      this.currentMetric = this.longitud * 30.48
      console.log(this.currentMetric)

    }else if( this.wishToConvert === 'in'){
      this.currentMetric = this.longitud * 12
      console.log(this.currentMetric)

    }
  }

  
  conversMetrics(){
    switch(this.currentUnit){
      case 'mm' :
        this.mathMM();
        break;
      case 'cm' :
        this.mathCM();
        break;
      case 'in' :
        this.mathIN();
        break;
      case 'ft' :
        this.mathFT();    
        }
      }
      
      handleMetrics(e){
        const { longitud, unidad, wishToConvert } = e.detail;

        this.longitud = longitud
        this.currentUnit = unidad
        this.wishToConvert = wishToConvert
    
        this.conversMetrics();
      }
  



  render() {
    return html`
      <slot></slot>
      <add-longitude
      @add-new-longitude="${(e) => this.handleMetrics(e)}"
      ></add-longitude> 
      <btn-conversor></btn-conversor>  
    `;
  }


}

window.customElements.define('metric-conversor', MetricConversor)
