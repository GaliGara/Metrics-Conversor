import { LitElement, css, html } from 'lit'
import './steps/add-longitude'
import './steps/historial-list'


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
        type: String,
      },
      currentMetric: {
        type: Number,
      },
      conversionHistory: {
        type: Array,
      },
      unitsHistory: {
        type: Array,
      },
      wishHistory: {
        type: Array,
      },
    }
  }

  constructor() {
    super()
    this.wishToConvert = '';
    this.currentUnit = '';
    this.currentMetric = 0;
    this.longitud = 0;
    this.conversionHistory = [];
    this.unitsHistory = [];
    this.wishHistory = [];
  }

  updateHistory(value, unit, wish) {
    // 🔹 Se crea una nueva referencia del array para que Lit detecte el cambio
    this.conversionHistory = [...this.conversionHistory, { value }];
    this.unitsHistory = [...this.unitsHistory, {unit} ];
    this.wishHistory = [...this.wishHistory, {wish}];
  }

  mathMM(){

    let { wishToConvert, currentMetric, longitud } = this;

    if( wishToConvert === 'cm'){
      currentMetric = longitud / 10

      
    } else if( wishToConvert === 'in'){
      currentMetric = longitud / 25.4

      
    } else if ( wishToConvert === 'ft'){
      currentMetric = longitud / 304.8

    }
    if( currentMetric !== undefined ) this.updateHistory(currentMetric, this.currentUnit, wishToConvert);

    
  }

  mathCM(){

    let { wishToConvert, currentMetric, longitud } = this;

    if( wishToConvert === 'mm'){
      currentMetric = longitud * 10


    } else if ( wishToConvert === 'in'){
      currentMetric = longitud / 2.54


    } else if ( wishToConvert === 'ft'){
      currentMetric = longitud / 30.48
   

    }

    if( currentMetric !== undefined ) this.updateHistory(currentMetric, this.currentUnit, wishToConvert);

  }

  mathIN(){

    let { wishToConvert, currentMetric, longitud } = this;

    if( wishToConvert === 'mm' ){
      currentMetric = longitud * 25.4
 
      
    }else if( wishToConvert === 'cm'){
      currentMetric = longitud * 2.54


    }else if( wishToConvert === 'ft'){
      currentMetric = longitud / 12

      
    }

    if( currentMetric !== undefined ) this.updateHistory(currentMetric, this.currentUnit, wishToConvert);

  }


  mathFT(){

    let { wishToConvert, currentMetric, longitud } = this;

    if( wishToConvert === 'mm' ){
      currentMetric = longitud * 304.8
 
      
    }else if( wishToConvert === 'cm'){
      currentMetric = longitud * 30.48


    }else if( wishToConvert === 'in'){
      currentMetric = longitud * 12


    }

    if( currentMetric !== undefined ) this.updateHistory(currentMetric, this.currentUnit, wishToConvert);

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
      <historial-list
      .record=${this.conversionHistory}
      .listUnits=${this.unitsHistory}
      .listWish=${this.wishHistory}
      ></historial-list>  
    `;
  }


}

window.customElements.define('metric-conversor', MetricConversor)
