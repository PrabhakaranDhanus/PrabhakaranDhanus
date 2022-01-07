import { LightningElement } from 'lwc';

export default class FirstComponent extends LightningElement {
 dynamicValue = "Prabhakaran"

changeValue(event){
    this.dynamicValue = event.target.value;
}
}