import React from 'react';

import { getIconByWeatherType } from './types';

export default class Icon extends React.Component {
    get iconSize() {
        const { size } = this.props;
        const sizes = {
            small: '32',
            medium: '64',
            large: '128'
        };
        return sizes[size || 'small'];
    }
    
    render() {
        const { weatherType } = this.props;
        return (
            <div >
                <i className={`wu wu-solid-black wu-${this.iconSize} wu-${getIconByWeatherType(weatherType)}`} />
            </div>
        );
    }  
}


