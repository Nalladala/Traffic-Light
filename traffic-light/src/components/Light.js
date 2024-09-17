import React from 'react';

const Light = ({ color, active }) => (
    <div className={`light ${color} ${active ? 'active' : ''}`}></div>
);

export default Light;
