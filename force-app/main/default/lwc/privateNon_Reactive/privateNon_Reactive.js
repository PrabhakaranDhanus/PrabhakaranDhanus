import { LightningElement } from 'lwc';

export default class PrivateNon_Reactive extends LightningElement {
    result;
    weight;
    height;


    getValue(event){
        if(event.target.name == 'weight'){
            this.weight = parseInt(event.target.value)
        }else{
           this.height = parseInt(event.target.value)
        }
    }

    getResult(){
        this.result = (weight)/()
    }


}