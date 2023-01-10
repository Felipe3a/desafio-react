import React from 'react';
import ReactDOM from 'react-dom/client';


import Globalstyle from './styles/globalstyle';
import App from './pages/home/index'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
 <App/>,<Globalstyle/>

  </div>
  
);

