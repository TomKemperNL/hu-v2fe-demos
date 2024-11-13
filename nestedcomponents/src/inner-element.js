import { LitElement, html } from "lit";
import InnerModel from "./inner-model";

export default class InnerElement extends LitElement {

    constructor() {
        super();
        this.innerModel = new InnerModel();
    }

    static get properties() {
        return {
            model: { type: InnerModel }
        }
    }

    #onclick() {
        let event = new CustomEvent('test-event', { 
            composed: true,
            bubbles: true,
            detail: this.innerModel });
        this.dispatchEvent(event);
    }

    render() {
        return html`
            <h2>${this.model.name} - ${this.model.age}</h2>
            <div><button @click=${this.#onclick}>Test</button>
        `;
    }
}


window.customElements.define('inner-element', InnerElement)