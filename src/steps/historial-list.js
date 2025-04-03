import { html, css, LitElement } from "lit";
import '@material/mwc-select';
import '@material/mwc-button';
import '@material/mwc-list' 

export class HistorialList extends LitElement{

    static get styles(){
        return css`

            .list {
                margin: 3rem;
                display: flex;
                justify-content: center;
            }

            mwc-list {
                --mdc-theme-text-primary-on-background: white;
                --mdc-theme-text-secondary-on-background: white;
                }

        `
    }
    static get properties(){
        return{
            record: {
                type: Array,
            },

            listUnits: {
                type: Array,
            },

            listWish: {
                type: Array,
            },
        }
    }  
    constructor(){
        super();

        this.record = [];
        this.listUnits = [];
        this.listWish = [];
    }


    render(){
            // console.log(this.record)
        return html`
        <div class='list'>
        <mwc-list>
            ${this.record.map( 
                (history, index) =>
                html`
                <mwc-list-item twoline>
                    <span>${history.value}</span>
                    <span slot="secondary">${this.listUnits[index]?.unit} -> ${this.listWish[index]?.wish}</span>
                </mwc-list-item> `
            )}

            </mwc-list>

        </div> 
        `
    }


}

customElements.define('historial-list', HistorialList);