import React from 'react';
import {
    makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import MaterialTable from 'material-table';
import tableIcons from '../../components/table/tableIcons'


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '95%',
        paddingBottom: theme.spacing(0),
        paddingTop: theme.spacing(0)
    }
}));

const DomesticBacklogView = () => {
    const classes = useStyles();

    return (
        <Page
            className={classes.root}
            title="Customers"
        >
            <MaterialTable
                title="DomesticBacklog"
                icons={tableIcons}
                columns={[
                    { title: 'Avatar', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{ width: 40, borderRadius: '50%' }} /> },
                    { title: 'firstname', field: 'firstname' },
                    { title: 'lastname', field: 'lastname' },
                    { title: 'email', field: 'email' },
                    { title: 'password', field: 'password' },
                    { title: 'cpassword', field: 'cpassword' },
                    { title: 'position', field: 'position' },
                    { title: 'role', field: 'role' },
                    { title: 'updated', field: 'updated' },

                ]}
                data={[]}
                options={{
                    search: false,
                    paging: false,
                    maxBodyHeight: '77vh',
                    minBodyHeight: '77vh',
                    exportButton: true,
                    filtering: false,
                }}
               
            />
        </Page>
    );
};

export default DomesticBacklogView;
