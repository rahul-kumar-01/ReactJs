import './App.css';
import { useState } from 'react';
import Items from './components/Items';
import Navbar from './components/Navbar';
import { itemContext } from './itemContext';




function App() {
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  return (

    // <itemContext.Provider value={{item,setItem}}>
    // <totalContext.Provider value={{total,setTotal}}> */}
    // { these context are independent from each other so no order important  */}


    <itemContext.Provider value={{total,setTotal,item,setItem}}>


      <div className='App'>
          <h2>Shopping Cart</h2>
            <Navbar />
            <Items />
      </div>

    </itemContext.Provider> 

  
  
  );
}
export default App;