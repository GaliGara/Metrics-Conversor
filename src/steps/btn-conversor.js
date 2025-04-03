import { html, css, LitElement } from "lit";
import '@material/mwc-select';
import '@material/mwc-button';

export class BtnConversor extends LitElement{

    static get styles(){
        return css`

        `
    }
    static get properties(){
        return{

        }
    }  
    constructor(){
        super();
    }
    render(){
        return html`
        <div class='list'>
            <p>lista...</p>


        </div> 
        `
    }


}

customElements.define('btn-conversor', BtnConversor);