import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './components/Counter';
import IntervalCounter from './components/IntervalCounter';
import StudioGhibli from './components/StudioGibli';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter />
    <IntervalCounter /> */}
    <StudioGhibli/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

