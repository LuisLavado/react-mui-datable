import { Grid } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import React, { useEffect, useState } from 'react';

const SecondDatatable = () => {

    const [data, setData] = useState([]);

    const columns = [
        {
            label: 'Nombre',
            name: 'name'
        },
        {
            label: 'Enlace',
            name: 'url'
        }
    ];

    const options = {
        filterType: 'checkbox',
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
            const json = await response.json();
            console.log(json);
            setData(json.results);
        }
        fetchData();
    }, []);

    return (
        <Grid container>
            <Grid item xs={12}>
                <h1>Lista de Pokemones</h1>
            </Grid>
            <Grid item xs={12}>
                <MUIDataTable title={''} data={data} columns={columns} options={options} />
            </Grid>
        </Grid>
    );
}

export default SecondDatatable;
