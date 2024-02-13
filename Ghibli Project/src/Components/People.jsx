import React from 'react';
import styles from './people.module.css';

export default function People(props) {
    const { data } = props;

    return (
        <div className={styles.peopleDashboard}>
            {data.map((person, index) => {
                const keys = Object.keys(person).filter(key => key !== 'url'); // Exclude the 'url' key

                return (
                    <div key={index} className={styles.personContainer}>
                        <h2>{person.name}</h2>
                        {keys.map((key, keyIndex) => (
                            <div key={`${person.id}-${keyIndex}`} className={styles.keyVal}>
                                <p>{key}: {person[key]}</p>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}