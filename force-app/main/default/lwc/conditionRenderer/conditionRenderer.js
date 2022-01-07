import { LightningElement,track } from 'lwc';

export default class ConditionRenderer extends LightningElement {

   @track showMessage = false;

   checkVale=(event)=>{
       this.showMessage = event.target.checked;

   }


}