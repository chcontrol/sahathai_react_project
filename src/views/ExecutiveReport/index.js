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
import ChartExecutiveSummary from './ChartExecutiveSummary';
import CardReportProductionDaily from './CardReportProductionDaily';
import CardNext from './CardNext';
import TableExecutiveSummary from './TableExecutiveSummary';
import CardReportProductFromming from './CardReportProductFromming';
import CardAppProductionOvertime from './CardAppProductionOvertime';
import PieChartExecutiveSummary from './PieChartExecutiveSummary';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(2)
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
      <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <CardReportProductFromming />
              </Grid>
              <Grid item xs={3}>
                <CardReportProductFinish />
              </Grid>
              <Grid item xs={3}>
                <CardReportProductionDaily />
              </Grid>
              <Grid item xs={3}>
                <CardAppProductionOvertime />
              </Grid>
              {/* <Grid item xs={12}>
                <CardNext />
              </Grid> */}
            </Grid>
          </Grid> 
        <Grid container  spacing={2} >
          <Grid item xs={6} >
            <TableExecutiveSummary />
          </Grid>
          <Grid item xs={6} >
            <ChartExecutiveSummary />
          </Grid>


          
          <Grid item xs={4} >
            <PieChartExecutiveSummary />
          </Grid>
          {/* <Grid item lg={4} md={6} xl={3} xs={12} >
            <LatestProducts />
          </Grid> */}
          <Grid xs={8}  >
            <LatestProducts />
          </Grid>
          



        </Grid>
      </Container>
    </Page>
  );
};

export default ExecutiveReport;
