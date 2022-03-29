import React, {Component} from 'react';
import './Calculator.scss';
import Button from '../Components/Button';
import Display from '../Components/Display';

const initialState ={
    displayValue:'0',
    clearDisplay:false,
    operation:null,
    values:[0,0],
    current:0

}


export default class Calculator extends Component{

    state = {...initialState};
    clearMemory(){
       this.setState({...initialState});
    }

    setOperation(operation){
        if(this.state.current=== 0){
            this.setState({operation,current:1,clearDisplay:true})
        }else{
            const equals = operation === "=";
            const currentOperation = this.state.operation;

            const values = [...this.state.values];
            switch(currentOperation){
                case '+':
                    values[0] = values[0]+values[1];
                    values [1] = 0;
                    break;                
                case '-':
                    values[0] = values[0]-values[1];
                    values [1] = 0;
                    break;                
                case '*':
                    values[0] = values[0]*values[1];
                    values [1] = 0;
                    break;                
                case '/':
                    values[0] = values[0]/values[1];
                    values [1] = 0;
                    break;
            }

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals  ? 0 : 1,
                clearDisplay: !equals,
                values
            });
        }
    }
    
    addDigit(n){

        if(n==='.' && this.state.displayValue.includes('.')){
            return
        };

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({displayValue, clearDisplay:false});

        if(n!='.'){
            const i =this.state.current;
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[i] = newValue;
            this.setState({values});
        }
    }    
    
    render() {
        const addDigit = n => this.addDigit(n);
        const setOperation = op => this.setOperation(op);
        const clearMemory = () => this.clearMemory();

        return(
            <div className='calculator'>
                <Display value={this.state.displayValue}/>
                <Button label="AC" classType={'ac'} click={clearMemory}/>
                <Button label="/" classType={'operator'} click={setOperation}/>
                <Button label="7" classType={'number'} click={addDigit}/>
                <Button label="8" classType={'number'} click={addDigit}/>
                <Button label="9" classType={'number'} click={addDigit}/>
                <Button label="*" classType={'operator'} click={setOperation}/>
                <Button label="4" classType={'number'} click={addDigit}/>
                <Button label="5" classType={'number'} click={addDigit}/>
                <Button label="6" classType={'number'} click={addDigit}/>
                <Button label="-" classType={'operator'} click={setOperation}/>
                <Button label="1" classType={'number'} click={addDigit}/>
                <Button label="2" classType={'number'} click={addDigit}/>
                <Button label="3" classType={'number'} click={addDigit}/>
                <Button label="+" classType={'operator'} click={setOperation}/>
                <Button label="0" classType={"zero"} click={addDigit}/>
                <Button label="." classType={'dot'} click={addDigit}/>
                <Button label="=" classType={'operator'} click={setOperation}/>
            </div>
        )
    }
}