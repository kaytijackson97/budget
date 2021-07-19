import React from 'react';
import { Statistic } from 'semantic-ui-react';

function DisplayBalance({size, color="black", textAlign, title, value}) {
    return (
        <Statistic size={size} color={color}>
            <Statistic.Label style={{textAlign:{textAlign}}}>{title}:</Statistic.Label>
            <Statistic.Value>${isNaN(value) ? 0 : value}</Statistic.Value>
        </Statistic>
    )
}

export default DisplayBalance
