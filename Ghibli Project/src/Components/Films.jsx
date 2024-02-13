import React from 'react';
import styles from './films.module.css';

export default function Films(props) {
    const { data } = props;

    return (
        <div className={styles.filmsDashboard}>
            {data.map((film, index) => {
                const keys = Object.keys(film).filter(element => {
                    if (element === 'title' || element === 'id') {
                        return false;
                    }
                    return true;
                });
                return (
                    <div key={film.id} className={styles.filmContainer}>
                        <h2>{film.title}</h2>
                        {keys.map((title, keyIndex) => (
                            <div key={`${film.id}-${title}-${keyIndex}`} className={styles.keyVal}>
                                <p>{title}: {film[title]}</p>
                            </div>
                        ))}
                    </div>
                );
            })}
        </div>
    );
}
