import Form from './Form.js'; // Make sure to use the correct path

export default class Bazaar extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.form = new Form();
        this.createFormContainer();
    }

    createFormContainer() {
        this.formContainer = document.createElement('div');
        this.formContainer.classList.add('container', 'mt-3');

        this.draw();
        this.formContainer.appendChild(this.form.header);
        this.formContainer.appendChild(this.form.formelement);
        // Append the form container to the shadow DOM
        this.shadowRoot.appendChild(this.formContainer);
    }

    draw() {
        this.formContainer.innerHTML = `
            <div class="row">
                <div class="col">
                    <h3 class="mb-3">Bazaar Express Transport</h3>
                </div>
            </div>
        `;
    }
}
