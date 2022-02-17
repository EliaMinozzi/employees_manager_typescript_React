import React from 'react';
import PageFirst from './screens/PageFirst';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './store';

const App:React.FC =()=> {
  return (
    <Provider store={store}>
      <div className="App">
      <PageFirst/>
    </div>
    </Provider>
    
  );
}
export default App;
