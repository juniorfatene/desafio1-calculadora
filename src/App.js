import Input from './components/Input';
import Button from './components/Button';

import { Container, Content , Row } from './styles';
import { useState } from 'react';

const App = () =>{
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev=='0' ? '' : prev}${num}`)
  }

  const handleOnClear = () => {
    setCurrentNumber('0');
  }

  const handleSumNumbers = () => {
    console.log('funcao soma')
    if(firstNumber == '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
      setFirstNumber('0');
    }
  }

  const handleMinusNumbers = () => {
    console.log('funcao subtracao')
    if(firstNumber == '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('');
      setFirstNumber('0');
    }
  }

  const handleMultiNumbers = () => {
    console.log('funcao multi')
    if(firstNumber == '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('.');
    } else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperation('');
      setFirstNumber('0');
    }
  }

  const handleDivNumbers = () => {
    console.log('funcao divisao')
    if(firstNumber == '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      if(currentNumber == '0') {
        setCurrentNumber('Não é possível dividir por zero')
      } 
      else {
        const div = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(div));
        setOperation('');
        setFirstNumber('0');
      }
    }
  }

  

  const handleEquals = () => {
    console.log('entrou no igual')
    if(firstNumber != '0' && operation != '' && currentNumber !=0){
      console.log('operacao:'+ operation);
      switch(operation){
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '.':
            handleMultiNumbers();
            break;
          case '/':
            handleDivNumbers();
            break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
      <Input value={currentNumber}/>
      <Row>
        <Button label="x"/>
        <Button label="/" onClick={handleDivNumbers}/>
        <Button label="c" onClick={handleOnClear}/>
        <Button label="." onClick={handleMultiNumbers}/>
      </Row>
      <Row>
        <Button label="7" onClick={()=> handleAddNumber('7')}/>
        <Button label="8" onClick={()=> handleAddNumber('8')}/>
        <Button label="9" onClick={()=> handleAddNumber('9')}/>
        <Button label="-" onClick={handleMinusNumbers}/>
      </Row>
      <Row>
        <Button label="4" onClick={()=> handleAddNumber('4')}/>
        <Button label="5" onClick={()=> handleAddNumber('5')}/>
        <Button label="6" onClick={()=> handleAddNumber('6')}/>
        <Button label="+" onClick={handleSumNumbers}/>
      </Row>
      <Row>
        <Button label="1" onClick={()=> handleAddNumber('1')}/>
        <Button label="2" onClick={()=> handleAddNumber('2')}/>
        <Button label="3" onClick={()=> handleAddNumber('3')}/>
        <Button label="=" onClick={handleEquals}/>
      </Row>
      
      </Content>
    </Container>
  );
}

export default App;
