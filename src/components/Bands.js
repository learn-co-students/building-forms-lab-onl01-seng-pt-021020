import React from 'react';

const Bands = (props) => {
    const bandList = props.bands.map((band, key) => {
        return <li key={key}>{band.name}</li>
    });

    return(
        <ul>
            {bandList}
        </ul>
    )
}

export default Bands;