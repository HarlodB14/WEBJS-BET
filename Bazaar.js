export default class Bazaar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});

        // Create the form container
        this.createFormContainer();

    }

    createFormContainer() {
        this.formContainer = document.createElement('div');
        this.formContainer.classList.add('container', 'mt-3');
        this.formContainer.innerHTML = `
            <div class="row">
                <div class="col">
                    <h3 class="mb-3">Bazaar Express Transport</h3>
                </div>
            </div>
        `;

        // Append the form container to the shadow DOM
        this.shadowRoot.appendChild(this.formContainer);
    }
}
