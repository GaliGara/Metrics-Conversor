import { html, css, LitElement } from "lit";
import '@material/mwc-textfield'
import '@material/mwc-select'

export class Addlongitude extends LitElement{

  static get styles(){
      return css`
        mwc-textfield.rounded {
          --mdc-shape-small: 28px;
        }

        mwc-textfield {
          --mdc-theme-primary: white;
          --mdc-text-field-outlined-idle-border-color: white;
          --mdc-text-field-outlined-hover-border-color: white;
          --mdc-text-field-ink-color: white;
          --mdc-text-field-label-ink-color: white;

        }

        mwc-select {
          --mdc-theme-primary: white;
          --mdc-select-outlined-idle-border-color: white;
          --mdc-select-outlined-hover-border-color: white;
          --mdc-select-ink-color: white;
          --mdc-select-label-ink-color: white;
        }
      `
  }

  static get properties(){
      return{
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
      }
  }

  constructor(){
    super();
    this.longitud = 0;
    this.wishToConvert = '';
    this.currentUnit = '';
  }

  addNewLongitude(){
    this.longitud = this.shadowRoot.querySelector('#imputMetric').value;
    this.currentUnit = this.shadowRoot.querySelector('#unidad-entrada').value;
    this.wishToConvert = this.shadowRoot.querySelector('#unidad-salida').value;

    this.dispatchEvent(new CustomEvent('add-new-longitude', {
      detail: {longitud: this.longitud, unidad: this.currentUnit, wishToConvert: this.wishToConvert},

    }));

  }


  render(){
    return html`
      <div class="longitud">

        <mwc-textfield
          id='imputMetric'
          class="rounded"
          label="My Textfield"
          outlined>
        </mwc-textfield>

        <mwc-select id="unidad-entrada" outlined label="Unidad de entrada">
          <mwc-list-item></mwc-list-item>
          <mwc-list-item selected value="mm">milimetros (mm)</mwc-list-item>
          <mwc-list-item value="cm">centimetros (cm)</mwc-list-item>
          <mwc-list-item value="in">pulgadas (in)</mwc-list-item>
          <mwc-list-item value="ft">pies (ft)</mwc-list-item>
        </mwc-select>

        <br></br>
        <mwc-select id="unidad-salida" outlined label="Unidad a convertir">
          <mwc-list-item></mwc-list-item>
          <mwc-list-item selected value="mm">milimetros (mm)</mwc-list-item>
          <mwc-list-item value="cm">centimetros (cm)</mwc-list-item>
          <mwc-list-item value="in">pulgadas (in)</mwc-list-item>
          <mwc-list-item value="ft">pies (ft)</mwc-list-item>
        </mwc-select>

        <mwc-button @click="${this.addNewLongitude}" class='btn-convertir' raised label="Convertir"></mwc-button>

      </div>
      `
  }

}

customElements.define('add-longitude', Addlongitude);