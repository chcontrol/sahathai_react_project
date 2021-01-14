import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    colors,
    makeStyles,
    Container,
    Button,
    Modal,
    Paper
} from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import MoneyIcon from '@material-ui/icons/Money';
import MaterialTable from 'material-table';
import tableIcons from '../components/table/tableIcons'
import CButton from '../components/Input/CButton';
import AddBoxIcon from '@material-ui/icons/AddBox';
import CreateOTReport from './CreateOTReport';
import { DataGrid } from '@material-ui/data-grid';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100%'
    },
    avatar: {
        backgroundColor: colors.red[600],
        height: 56,
        width: 56
    },
    differenceIcon: {
        color: colors.red[900]
    },
    differenceValue: {
        color: colors.red[900],
        marginRight: theme.spacing(1)
    }
}));

const columns = [
    {
        field: 'id', headerName: 'ID', width: 70

    },
    {
        field: 'fullName',
        headerName: 'ชื่อ',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
    },
    { field: 'startTime', headerName: 'เวลาเข้า', width: 130, type: 'number' },
    { field: 'endTime', headerName: 'เวลาออก', width: 130, type: 'number' },
    {
        field: 'allTime', headerName: 'รวมเวลา', width: 130, type: 'number'
        , valueGetter: (params) =>
            `${params.getValue("startTime") - params.getValue("endTime") || 0} `
    },
    {
        field: 'statusShow', headerName: 'สถานะ', width: 130, type: 'number',
        valueGetter: (params) =>
            `${(params.getValue("status")) ? 'อนุมัติ' :'ไม่อนุมัติ'} `
    },
    {
        field: 'status',
        headerName: 'สถานะ',
        type: 'number',
        width: 130,
        hide: true,
    },

];


const rows = [
    { id: 1, fullName: 'Snow', startTime: 50, endTime: 35, status: true },
    { id: 2, fullName: 'Lannister', startTime: 50, endTime: 42, status: false },
    { id: 3, fullName: 'Lannister', startTime: 50, endTime: 45, status: true },
    { id: 4, fullName: 'Stark', startTime: 50, endTime: 16, status: true },
    { id: 5, fullName: 'Targaryen', startTime: 50, endTime: 15, status: false },
    { id: 6, fullName: 'Melisandre', startTime: 50, endTime: 150, status: true },
    { id: 7, fullName: 'Clifford', startTime: 50, endTime: 44, status: true },
    { id: 8, fullName: 'Frances', startTime: 50, endTime: 36, status: true },
    { id: 19, fullName: 'Roxie', startTime: 50, endTime: 65, status: true },

];



const OTReport = ({ className, ...rest }) => {
    const classes = useStyles();

    const [openModalCreateOTReprot, setopenModalCreateOTReprot] = React.useState(false);

    const handleCloseModalItem = async () => {
        setopenModalCreateOTReprot(false);
    };

    const [select, setSelection] = React.useState([]);

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >

            <Container maxWidth={false} style={{ paddingTop: 10 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} alignContent="center">
                        ใบขออนุมัติทำงานล่วงเวลา (OT)
                    </Grid>
                    <Grid item xs={6} >
                        ฝ่าย/แผนก ที่ขอทำ OT
                    </Grid>
                    <Grid item xs={6} >
                        วันเดือนปี
                    </Grid>
                    <Grid item xs={12} >
                        <Grid container >
                            <Grid item xs={4} >
                                <Grid container >
                                    <Grid item xs={12} >
                                        ผู้ขออนุมัติ (หัวหน้าแผนก)
                                    </Grid>
                                    <Grid item xs={12} >
                                        ผู้ขออนุมัติ (ผู้จัดการฝ่าย)
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4} >
                                <Grid container >
                                    <Grid item xs={12} >
                                        รอง/ผู้จัดการโรงงาน
                                    </Grid>
                                    <Grid item xs={12} >
                                        ฝ่ายบุคคลดำเนินการ Pay Roll
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={4} >ประเภทของ OT </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </Container>


            <CardContent>

                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={25}
                        checkboxSelection
                        hideFooterPagination
                        onSelectionChange={(newSelection) => {
                            setSelection(newSelection.rowIds);

                        }}
                    />
                </div>
                <Grid>
                    <Button>บันทึกข้อมูล</Button>
                    <Button>ยกเลิกเอกสาร</Button>
                    <h1>{JSON.stringify(select)}</h1>

                </Grid>
            </CardContent>

        </Card>
    );
};



export default OTReport;
