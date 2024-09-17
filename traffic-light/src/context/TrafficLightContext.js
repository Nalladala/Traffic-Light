import React, { createContext, useReducer, useContext } from 'react';

const TrafficLightContext = createContext();

const initialState = {
    currentLight: 'green',
    pedestrianRequest: false,
    timer: 10,
};

const trafficLightReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_LIGHT':
            return { ...state, currentLight: action.payload, timer: action.timer };
        case 'REQUEST_CROSSING':
            return { ...state, pedestrianRequest: true };
        case 'RESET_TIMER':
            return { ...state, timer: action.timer };
        case 'EMERGENCY_OVERRIDE':
            return { ...state, currentLight: 'green', timer: 10 };
        default:
            return state;
    }
};

export const TrafficLightProvider = ({ children }) => {
    const [state, dispatch] = useReducer(trafficLightReducer, initialState);

    return (
        <TrafficLightContext.Provider value={{ state, dispatch }}>
            {children}
        </TrafficLightContext.Provider>
    );
};

export const useTrafficLight = () => useContext(TrafficLightContext);
