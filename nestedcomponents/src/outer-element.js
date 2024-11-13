import OuterModel from "./outer-model";
import { LitElement, html } from "lit";

export default class OuterElement extends LitElement {
    
    constructor(){
        super();
        this.model = new OuterModel();
    }

    static get properties(){
        return {
            model: {type: OuterModel}
        }
    }

    #handleTest(e){
        console.log(e);
    }

    render(){
        return html`
            <h1>${this.model.message}</h1>
            ${this.model.innerModels.map((i) => html`<div><inner-element .model=${i} @test-event=${this.#handleTest}></div>`)}
            `
    }
}

let x = i => i+1;

window.customElements.define('outer-element', OuterElement)