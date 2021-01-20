import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import CardReportProductFinish from './CardReportProductFinish';
import LatestOrders from './LatestOrders';
import LatestProducts from './LatestProducts';
import Sales from './Sales';
import CardReportProductionDaily from './CardReportProductionDaily';
import CardNext from './CardNext';
import CardReportProductFromming from './CardReportProductFromming';
import CardAppProductionOvertime from './CardAppProductionOvertime';
import TrafficByDevice from './TrafficByDevice';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ExecutiveReport = () => {
  const classes = useStyles();


  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >

      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid item xs={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <CardReportProductFromming />
              </Grid>
              <Grid item xs={12}>
                <CardReportProductFinish />
              </Grid>
              <Grid item xs={12}>
                <CardReportProductionDaily />
              </Grid>
              <Grid item xs={12}>
                <CardAppProductionOvertime />
              </Grid>
              <Grid item xs={12}>
                <CardNext />
              </Grid>
            </Grid>
          </Grid>
          {/* <Grid item lg={3} sm={6} xl={3} xs={12} >
            <CardReportProductFromming />
          </Grid> */}
          {/* <Grid item xs={4} >
            <ReportProductionDaily />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12} >
            <CardAppProductionOvertime />
          </Grid> */}
          <Grid item xs={6} >
            <Sales />
          </Grid>
          <Grid item xs={3} >
            <TrafficByDevice />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default ExecutiveReport;