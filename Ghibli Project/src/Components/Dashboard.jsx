import React, { useState, useEffect } from 'react';
import styles from './dashboard.module.css';
import useFetchData from '../hooks/useFetchData';
import Options from './options';
import Films from './films';
import People from './People';
import Locations from './Locations';
import Loader from './Loader';

export default function Dashboard() {
    const [selection, setSelection] = useState(null);
    const { data, loading, error } = useFetchData(selection); 

    function onClickHandler(clickedButton) { 
        return () => {
        setSelection(clickedButton);
        }
    }

    const dataRender = {
        'films': <Films data={data}/>,
        'people': <People data={data}/>,
        'locations': <Locations data={data}/>,
    }

    return (
        <div className={styles.dashboard}>
            <div className={styles.layout}>
                <div className={styles.titleContainer}>
                    <h1>Studio Ghibli Information</h1>
                </div>
                <Options selection={selection} setSelection={onClickHandler}/>
                {loading && <Loader />}
                {error && <p>Error: {error}</p>}
                {data && !loading && selection && dataRender[selection]}
            </div>
        </div>
    )
}