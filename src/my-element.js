import { LitElement, css, html } from 'lit'
import './steps/add-longitude'
import './steps/history-list'


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
    }
  }

  constructor() {
    super()
    this.wishToConvert = '';
    this.currentUnit = '';
    this.currentMetric = 0;
    this.longitud = 0;
    this.conversionHistory = [];
  }

    static conversionRates = {
      mm: { cm: 0.1, in: 0.03937, ft: 0.0032808 },
      cm: { mm: 10, in: 0.3937, ft: 0.032808 },
      in: { mm: 25.4, cm: 2.54, ft: 0.083333 },
      ft: { mm: 304.8, cm: 30.48, in: 12 }
    };

    conversMetrics(){
      const { longitud, currentUnit, wishToConvert } = this;
      const conversionRates = MetricConversor.conversionRates[currentUnit]?.[wishToConvert];

      if (currentUnit === wishToConvert) {

        this.currentMetric = longitud;
      } else {

        this.currentMetric = longitud * conversionRates;
      }

      this.updateHistory(this.currentMetric, currentUnit, wishToConvert, longitud);    

    }
        
    handleMetrics(e){
      const { longitud, unidad, wishToConvert } = e.detail;

      this.longitud = longitud
      this.currentUnit = unidad
      this.wishToConvert = wishToConvert

      this.conversMetrics();
    }

    updateHistory(value, unit, wish, long) {
      // Se crea una nueva referencia del array para que Lit detecte el cambio
      const historyItem = {value, unit, wish, long};
      this.conversionHistory = [...this.conversionHistory, historyItem];
    }

    render() {
      return html`
        <slot></slot>
        <add-longitude
        @add-new-longitude="${(e) => this.handleMetrics(e)}"
        ></add-longitude> 
        <historial-list
        .record=${this.conversionHistory}
        ></historial-list>  
      `;
    }


}

window.customElements.define('metric-conversor', MetricConversor)
