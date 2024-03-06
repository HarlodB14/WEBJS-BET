export class Form {

    //constructor
    constructor(steps) {
        this.container = document.createElement('div');
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
        this.container.style.width = '100px'

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
            if (this.currentStep < this.steps.length - 1) {
                this.currentStep++;
                this.draw(); // Redraw the form to display the next step
            }
        });
        this.container.appendChild(button); // Append button to the form container
    }
}
