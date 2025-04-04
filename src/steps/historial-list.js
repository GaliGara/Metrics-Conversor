import { html, css, LitElement, nothing } from "lit";
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
                flex-direction: column;
                align-items: center;
            }

            mwc-list {
                --mdc-theme-text-primary-on-background: white;
                --mdc-theme-text-secondary-on-background: white;
                width: 100%;
                max-width: 600px;
                background-color: #555; 
                border-radius: 8px;
                box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Sombra ligera */
                padding: 0;
                }
                
            .item {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 1rem;

            }

            h2 {
            color: var(--title--color);
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

            listLongitud: {
                type: Array,
            },
        }
    }  
    constructor(){
        super();

        this.record = [];
        this.listUnits = [];
        this.listWish = [];
        this.listLongitud = [];
    }


    render(){
        return (this.record.length > 0)
        ? html`
        <div class='list'>
        <h2>Historial de conversiones</h2>
        <mwc-list>
            ${this.record.map( 
                (history, index) =>
                html`
                <mwc-list-item class='item'>
                <span>
                 ${this.listLongitud[index]?.long} ${this.listUnits[index]?.unit} = ${history.value} ${this.listWish[index]?.wish}
                </span>

                </mwc-list-item> 
                <li divider role="separator"></li>
                `
            )}

            </mwc-list>

        </div> 
        `
        : nothing
    }


}

customElements.define('historial-list', HistorialList);