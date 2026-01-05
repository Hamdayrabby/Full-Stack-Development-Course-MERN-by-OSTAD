import React from 'react'

import MyApp from './components/MyApp';
import First from './components/First';
import Parent from './components/Parent';
import Child from './components/Child';

const App = () => {

  const name = "Auni";
  const age = 22;

  function hello() {
    return "and I live in Bangladesh";
  }
  return (
    <div>
      <MyApp name={name} age={age} />
      <First brand="Apple" />
      <Parent name="Parent" name2="Child" myFunc={hello} />


    </div>
  )
}

export default App;

//Props
