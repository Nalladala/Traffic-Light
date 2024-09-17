import React from 'react';
import { useTrafficLight } from '../context/TrafficLightContext';

const PedestrianButton = () => {
    const { dispatch } = useTrafficLight();

    return (
        <button onClick={() => dispatch({ type: 'REQUEST_CROSSING' })}>
            Request Crossing
        </button>
    );
};

export default PedestrianButton;
