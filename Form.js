export default class Form {

    container;
    constructor() {
        this.container = document.createElement('div')
        this.header = document.createElement('h2');
        this.formelement = document.createElement('form');
        this.drawForm();
    }

    drawForm() {
        this.header.textContent = 'Maak een nieuwe vrachtwagen aan:';
        this.formelement.innerHTML = `
            <div class="form-group mb-2">
                <label for="staticEmail2" class="sr-only">Email</label>
                <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">Password</label>
                <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
        `;
        this.container.appendChild(this.header);
        this.container.appendChild(this.formelement);
    }
}
