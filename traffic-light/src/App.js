// App.js
import React from 'react';
import { TrafficLightProvider } from './context/TrafficLightContext';
import './styles/styles.css';


import TrafficLight from './components/TrafficLight';

const App = () => (
    <TrafficLightProvider>
<TrafficLight/>     
    </TrafficLightProvider>
);

export default App;
