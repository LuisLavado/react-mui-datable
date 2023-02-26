import { Grid } from '@mui/material';
import MUIDataTable from 'mui-datatables';
import React from 'react';

const SimpleDatatable = () => {
    const columns = ["Name", "Company", "City", "State"];

    const data = [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
    ];

    const options = {
        filterType: 'checkbox',
    };
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                HOLA MUNDO
            </Grid>
            <Grid item xs={12}>
                <MUIDataTable title="My Datateble" data={data} columns={columns} options={options} />
            </Grid>
        </Grid>
    );
}

export default SimpleDatatable;
