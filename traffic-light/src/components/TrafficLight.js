import React, { useEffect } from 'react';
import { useTrafficLight } from '../context/TrafficLightContext';
import Light from './Light';
import PedestrianButton from './PedestrianButton';

const TrafficLight = () => {
    const { state, dispatch } = useTrafficLight();

    useEffect(() => {
        const timer = setInterval(() => {
            if (state.timer > 0) {
                dispatch({ type: 'RESET_TIMER', timer: state.timer - 1 });
            } else {
                switch (state.currentLight) {
                    case 'green':
                        dispatch({ type: 'CHANGE_LIGHT', payload: 'yellow', timer: 3 });
                        break;
                    case 'yellow':
                        dispatch({ type: 'CHANGE_LIGHT', payload: 'red', timer: 7 });
                        break;
                    case 'red':
                        if (state.pedestrianRequest) {
                            dispatch({ type: 'RESET_TIMER', timer: 5 });
                            dispatch({ type: 'REQUEST_CROSSING', payload: false });
                        } else {
                            dispatch({ type: 'CHANGE_LIGHT', payload: 'green', timer: 10 });
                        }
                        break;
                    default:
                        break;
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [state, dispatch]);

    return (
        <div className="traffic-light">
            <Light color="green" active={state.currentLight === 'green'} />
            <Light color="yellow" active={state.currentLight === 'yellow'} />
            <Light color="red" active={state.currentLight === 'red'} />
            <PedestrianButton />
        </div>
    );
};

export default TrafficLight;
