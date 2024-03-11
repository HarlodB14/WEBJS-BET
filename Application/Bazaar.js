import {Form} from "../Form/Form.js";
import {FormStep} from "../Form/FormStep.js";
import {Truck} from "../Truck/Truck.js";

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
    }


    drawTruck(truck) {
        if (truck) {
            this.truck.draw(truck.height, truck.width, this.shadowRoot);
        }
    }

    collectFormData() {
        const form = this.shadowRoot.querySelector("form");
        const formData = new FormData(form);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });
        console.log(formDataObject);
        this.formData = formDataObject;
        this.createTruck();
    }




    createTruck() {
        if (this.checkIfSubmitted()) {
            const {lengte, breedte, interval, type} = this.formData;
            this.truck = new Truck(lengte, breedte, interval, type);
            this.drawTruck(this.truck)
        }
    }


    //methode om header te tekenen boven formulier
    drawHeader(container) {
        const header = document.createElement('h3');
        header.classList.add('mb-3');
        header.textContent = 'Bazaar Express Transport';
        container.appendChild(header);
    }


    checkIfSubmitted() {
        return Object.keys(this.formData).length > 0;
    }
}
