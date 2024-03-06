export class FormStep {

    //constructor
    constructor(title, fields, renderSelect = false) {
        this.title = title;
        this.fields = fields;
        this.renderSelect = renderSelect;
    }

    //methode om invulvelden te tekenen per stap
    render(container) {
        let fieldset = document.createElement('fieldset');
        let legend = document.createElement('legend');
        legend.textContent = this.title;
        fieldset.appendChild(legend);
        this.fields.forEach(fieldName => {
            let element;
            if (this.renderSelect && fieldName === 'Type') {
                // Create select element for the 'Type' field
                element = document.createElement('select');
                element.setAttribute('name', fieldName.toLowerCase());
                element.classList.add('form-control');

                // Define options for the select element
                let options = ['Koud transport', 'Breekbaar transport', 'Algemeen transport', 'Pallets', 'Snelkoerier'];
                options.forEach(optionText => {
                    let option = document.createElement('option');
                    option.textContent = optionText;
                    element.appendChild(option);
                });
            } else {
                // Create input element for other fields
                element = document.createElement('input');
                element.setAttribute('type', 'text');
                element.setAttribute('name', fieldName.toLowerCase());
                element.classList.add('form-control');
            }

            let div = document.createElement('div');
            div.classList.add('form-group');
            let label = document.createElement('label');
            label.textContent = fieldName + ':';
            div.appendChild(label);
            div.appendChild(element);
            fieldset.appendChild(div);
        });
        container.appendChild(fieldset);
    }
}
