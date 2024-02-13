import React, { useState, useEffect } from 'react';

export default function useFetchData(selection) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const apiUrl = 'https://ghibliapi.vercel.app';

    useEffect(() => { 
        //guard clause
        if (!selection) {
            return
        }
        setLoading(true)
        const apiUrl = 'https://ghibliapi.vercel.app';
        async function fetchData() {
            const url = apiUrl + '/' + selection
            try {
                setLoading(true);
                const res = await fetch(url);
                const jsonData = await res.json();
                console.log('DATA: ', jsonData)
                setData(jsonData);
            } catch(err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [selection]);

    return { data, loading, error };
}
