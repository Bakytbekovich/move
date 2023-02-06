import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './screens/main';
import Detail from './screens/detail';



function App() {
  return (
    <div >
         <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          
          <Route path='/detail/:id' element={<Detail/>}/>
        
         
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
