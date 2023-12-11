import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Display from './components/Display'
import ButtonContainer from './components/ButtonContainer'
import { useState } from 'react'

function App() {
  const [value, setValue] = useState("");

  const onButtonClick = (buttonName) => {
    if (buttonName==='C'){
      setValue("");
    }
    else if (buttonName==='='){
      let result = eval(value);
      setValue(result);
    }
    else {
      let newValue = value + buttonName;
      setValue(newValue);
    }
  }

  return (
    <>
      <h1 style={{textAlign: "center"}}>Calculator</h1>
      <div className={styles.calculator}>
      <Display value={value}/>
      <ButtonContainer onButtonClick={onButtonClick}/>
    </div>
    </>
  )
}

export default App
