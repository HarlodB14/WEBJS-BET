export class Form extends HTMLFormElement {

    //constructor
    constructor(steps) {
        super();
        this.container = document.createElement('form');
        this.header = document.createElement('h2');
        this.steps = steps;
        this.currentStep = 0;

        // Add Bootstrap class to the container
        this.container.classList.add('container', 'mt-3'); // Adjust classes as needed

        this.draw();
    }

    //teken methode van form
    draw() {
        this.container.innerHTML = ''; // Clear existing content
        this.container.style.width = '250px'
        this.container.id = 'form-container'; // Add an id attribute to the container

        let currentStep = this.steps[this.currentStep];
        let currentStepContainer = document.createElement('div'); // Create a container for the current step

        currentStep.render(currentStepContainer); // Pass the container to the render method

        this.container.appendChild(this.header);
        this.container.appendChild(currentStepContainer); // Append the container for the current step
        this.drawNextButton();
    }

    //methode wat stappen bijhoudt voordat die 'aanmaken' toont teruggeeft als buttontext
    getNextButtonText() {
        return this.currentStep === this.steps.length - 1 ? 'Vrachtwagen aanmaken' : 'Volgende';
    }

    //methode om button the tekenen
    drawNextButton() {
        let button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.classList.add('btn', 'btn-primary', 'mb-2');
        button.textContent = this.getNextButtonText();
        button.addEventListener('click', () => {
            if (this.validate()) {
                if (this.currentStep < this.steps.length - 1) {
                    this.currentStep++;
                    this.draw(); // Redraw the form to display the next step
                }
            }
        });
        this.container.appendChild(button); // Append button to the form container
    }

    validate() {
        const currentStepFields = this.steps[this.currentStep].fields;
        const formData = new FormData(this.container);
        const formDataObject = Object.fromEntries(formData.entries());
        const clearWarnings = () => {
            const warningContainer = this.container.querySelector('.warning');
            if (warningContainer) {
                warningContainer.remove();
            }
        };

        const addWarning = (message) => {
            const warning = document.createElement('div');
            warning.classList.add('alert', 'alert-warning', 'warning');
            warning.textContent = message;
            warning.style.color = 'red';
            this.container.appendChild(warning);
        };

        clearWarnings();

        for (const field of currentStepFields) {
            const fieldName = field.toLowerCase();
            const fieldValue = (formDataObject[fieldName] || '').trim();

            if (fieldValue === "") {
                addWarning(`Vul een ${fieldName} in AUB.`);
                return false;
            }

            if (fieldName === 'lengte' || fieldName === 'breedte') {
                const fieldValueNum = Number(fieldValue);
                if (isNaN(fieldValueNum) || fieldValueNum < 3 || fieldValueNum > 10) {
                    addWarning(`Vul een geldige ${fieldName} in tussen 3 en 10.`);
                    return false;
                }
            }
        }

        return true;
    }


}
