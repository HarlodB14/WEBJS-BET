import {Form} from "../Form/Form.js";
import {FormStep} from "../Form/FormStep.js";
import {Truck} from "../Truck/Truck";

export default class Bazaar extends HTMLElement {
    formData = {};

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.createFormContainer();
    }

    //methode om formulier aan te maken
    createFormContainer() {
        let steps = [
            new FormStep('Stap 1: Afmetingen', ['Lengte']),
            new FormStep('Stap 2: Afmetingen', ['Breedte']),
            new FormStep('Stap 3: Aankomst Interval', ['Interval']),
            new FormStep('Stap 4: Type', ['Type'], true)
        ];

        let form = new Form(steps);
        let container = document.createElement('div');
        container.classList.add('container', 'mt-3');

        this.drawHeader(container);

        let formElement = form.container;
        container.appendChild(formElement);
        this.shadowRoot.appendChild(container);

        this.collectFormData();
        this.handleClickEvent();
        this.validateForm();
    }


    drawTruck() {

    }

    //methode om input waardes te checken
    hasValidValues(formData) {
        const errorContainer = document.createElement('div');
        if (formData.hasOwnProperty('Lengte')) {
            const lengteValue = Number(formData['Lengte']);
            if (isNaN(lengteValue) || lengteValue < 3 || lengteValue > 10) {
                const errorMessage = document.createTextNode('Invalide waarde voor lengte. vul AUB getal tussen 3 en 10.');
                errorContainer.appendChild(errorMessage);
                // Append error message to the container's parent element
                this.shadowRoot.querySelector('.container').insertBefore(errorContainer, this.shadowRoot.querySelector('.container').children[1]);
                return false;
            }
        }

        if (formData.hasOwnProperty('Breedte')) {
            const breedteValue = Number(formData['Breedte']);
            if (isNaN(breedteValue) || breedteValue < 3 || breedteValue > 10) {
                const errorMessage = document.createTextNode('Invalide waarde voor Breedte. vul AUB getal tussen 3 en 10.');
                errorContainer.appendChild(errorMessage);
                // Append error message to the container's parent element
                this.shadowRoot.querySelector('.container').insertBefore(errorContainer, this.shadowRoot.querySelector('.container').children[1]);
                return false;
            }
        }

        return true;
    }

    collectFormData() {
        const formFields = document.querySelectorAll('input, select');

        formFields.forEach(field => {
            this.formData[field.name] = field.value
        });
    }

    validateForm() {
        for (let fieldName in this.formData) {
            if (this.hasValidValues(this.formData[fieldName])) {
                let truck = new Truck(this.formData);
                this.drawTruck(truck);
            }
        }

    }


    //methode om header te tekenen boven formulier
    drawHeader(container) {
        const header = document.createElement('h3');
        header.classList.add('mb-3');
        header.textContent = 'Bazaar Express Transport';
        container.appendChild(header);
    }

    handleClickEvent() {
        const nextButton = this.shadowRoot.querySelector('button');
        nextButton.addEventListener('click', (event) => {
            if (!this.hasValidValues(this.formData) || !this.formData) {
                event.preventDefault();
            }

        });
    }


}
