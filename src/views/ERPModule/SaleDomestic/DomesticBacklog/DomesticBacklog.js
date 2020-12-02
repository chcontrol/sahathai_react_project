import React from 'react';
import {
    makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import MaterialTable from 'material-table';
import tableIcons from '../../../components/table/tableIcons'


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
                style={{ width: '99%', margin: 5, overflowX: "scroll",fontSize:13 }}

                columns={[
                    { title: 'order date', field: 'order_date' },
                    { title: 'co number', field: 'co_num' },
                    { title: 'cust po', field: 'cust_po' },
                    { title: 'cust number', field: 'cust_num' },
                    { title: 'name', field: 'name' },
                    { title: 'item', field: 'item' },
                    { title: 'description', field: 'description' },
                    { title: 'qty order', field: 'qty_order' },
                    { title: 'qty shipped', field: 'qty_shipped' },
                    { title: 'qty pending', field: 'qty_pending' },
                ]}
                data={[{
                    order_date_conv: "2020-11-18",
                    order_date: "2020-11-18",
                    co_num: "JL20110004",
                    cust_po: "งานจ้างชุบ",
                    cust_num: "TT00007",
                    name: "บจก.โรจน์ไพบูลย์อีควิ๊ปเม้นท์",
                    item: "JFC071N0001200-M2AS080M06000N",
                    description: "JFCGPE1/2 ASTM A53AxSCH80x6.000 จ้างชุบ",
                    qty_order: "3",
                    qty_shipped: "0",
                    qty_pending: "3",
                    city: null,
                    country: "Thailand",
                    wc_description: "สถานีชุป 01",
                    due_date: {
                        date: "2020-12-18 00:00:00.000000",
                        timezone_type: 3,
                        timezone: "Asia/Bangkok"
                    },
                    Uf_pack: null,
                    asm_run: ".00000000",
                    unit_weight: ".00000",
                    Uf_PricePerKG: ".00000",
                    co_line: 1,
                    wc: "P6GL01",
                    Expr1: "สถานีชุป 01",
                    qty_ready: ".00000000"
                }]}
                options={{
                    search: false,
                    paging: false,
                    maxBodyHeight: '70vh',
                    minBodyHeight: '70vh',
                    exportButton: true,
                    filtering: false,
                }}
            />
        </Page>
    );
};

export default DomesticBacklogView;
