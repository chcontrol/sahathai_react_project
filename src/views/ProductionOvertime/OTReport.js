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

const OTReport = ({ className, ...rest }) => {
  const classes = useStyles();

  const [openModalCreateOTReprot, setopenModalCreateOTReprot] = React.useState(false);

  const handleCloseModalItem = async () => {
    setopenModalCreateOTReprot(false);
  };


  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >

      <Container maxWidth={false} style={{ paddingTop: 10 }}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xs={4}
          >
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              startIcon={<AddBoxIcon />}
              onClick={() => setopenModalCreateOTReprot(true)}
            >
              สร้างรายงาน
            </Button>
            <Modal open={openModalCreateOTReprot} onClose={handleCloseModalItem} >
              <CreateOTReport
                handleCloseModalItem={handleCloseModalItem}
              />
            </Modal>
          </Grid>
          <Grid
            item
            xs={6}
          >
            
          </Grid>
        </Grid>
      </Container>


      <CardContent>
        <MaterialTable
          title="ใบขออนุมัติทำงานล่วงเวลา (OT)"
          icons={tableIcons}
          columns={[
            { title: 'เลขที่เอกสาร', field: 'name' },
            { title: 'วันที่เอกสาร', field: 'surname' },
            { title: 'แผนก', field: 'surname' },
            { title: 'สถานะ', field: 'birthYear', type: 'numeric' },
          ]}
          data={[
            { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
          ]}
          detailPanel={rowData => {
            return (
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/C0DPdy98e4c"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            )
          }}
        />
      </CardContent>
      
    </Card>
  );
};



export default OTReport;
