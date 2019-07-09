import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CardContent } from '@material-ui/core';
import './compoundInterestCalc.css';
export class CompoundInterestCalc extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          'p': 0,
          'r': 0,
          'n': 0,
          't': 0,
          'a': 0
      }
      this.handlePChange = this.handlePChange.bind(this);
      this.handleRChange = this.handleRChange.bind(this);
      this.handleNChange = this.handleNChange.bind(this);
      this.handleTChange = this.handleTChange.bind(this);
      this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handlePChange(e){this.setState({'p': e.target.value});}
  handleRChange(e){this.setState({'r': e.target.value});}
  handleNChange(e){this.setState({'n': e.target.value});}
  handleTChange(e){this.setState({'t': e.target.value});}

  handleButtonClick(e){
    this.setState({'a': this.calculate().toFixed(2)});
  }

  calculate(){
      var p = parseFloat(this.state.p, 10);
      var r = parseFloat(this.state.r, 10);
      var n = parseFloat(this.state.n, 10);
      var t = parseFloat(this.state.t, 10);
      return (p * Math.pow((1 + (r/n)), (n * t)));
  }


    render(){
        const style = {
            'input': {
                'display': 'flex',
                'margin': '1em 8%',
            },
            'button': {
                'display': 'block',
                'margin': '1em 30%',
            }
        };
        return (
                <div className = "calculator">
                <Card>
                <h1 className = "title">Compound Interest</h1>
                    <CardContent>
                        <form>
                        <TextField
                            style = {style.input}
                            id = "outlined"
                            label = "Principal"
                            variant = "outlined" 
                            onChange = {this.handlePChange}
                            autoComplete="off"/>
                        <TextField
                            style = {style.input}
                            id = "outlined"
                            label = "Rate"
                            variant = "outlined" 
                            onChange = {this.handleRChange}
                            autoComplete="off"/>
                        <TextField
                            style = {style.input}
                            id = "outlined"
                            label = "Annual compounds"
                            variant = "outlined" 
                            onChange = {this.handleNChange}
                            autoComplete="off"/>
                        <TextField
                            style = {style.input}
                            id = "outlined"
                            label = "Number of years"
                            variant = "outlined" 
                            onChange = {this.handleTChange}
                            autoComplete="off"/>  
                        </form>
                        <h1 className = "amount">Amount: ${this.state.a}</h1>
                        <Button 
                            style = {style.button}
                            variant = "contained" 
                            color = "primary"
                            size = "large"
                            onClick = {this.handleButtonClick}>
                        Calculate
                        </Button>
                    </CardContent>
                </Card>
                </div>);
        
    }
}