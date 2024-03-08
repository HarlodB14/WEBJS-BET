import Bazaar from "./Bazaar.js";
import {Form} from "../Form/Form.js";
customElements.define('custom-form', Form, { extends: 'form' });
customElements.define("bazaar-element", Bazaar); // Corrected custom element name
