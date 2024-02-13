import React from 'react'
import styles from './locations.module.css'

export default function Locations(props) {
    const { data } = props;

    return (
        <div className={styles.locationsDashboard}>
            {data.map((location, index) => {
                const keys = Object.keys(location).filter(key => key !== 'url'); // Exclude the 'url' key

                return (
                    <div key={index} className={styles.locationContainer}>
                        <h2>{location.name}</h2>
                        {keys.map((key, keyIndex) => (
                            <div key={`${location.id}-${keyIndex}`} className={styles.keyVal}>
                                <p>{key}: {location[key]}</p>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}