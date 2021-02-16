import React from 'react';
import {
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import Page from 'src/components/Page';
import WorkCenterGroup from './WorkCenterGroup';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1)
  }
}));

const ProductionDashboard = () => {
  const classes = useStyles();


  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >

      <Container maxWidth={false}>
        <Grid
          container
          spacing={1}
        >
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            <Card
              spacing={1}
            // className={clsx(classes.root, className)}
            >
              <Grid
                container
                spacing={1}
              >
                <Grid item lg={3} sm={6} xl={3} xs={12}>
                  <Typography color="textPrimary" gutterBottom variant="h4" >
                    ภาพรวมการผลิต
                </Typography>
                  <Typography color="textPrimary" gutterBottom variant="h5" >
                    วันที่ 16/02/2021 เวลา 08:00 น.
                </Typography>
                </Grid>

              </Grid>

            </Card>
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <WorkCenterGroup
              workcenter_name='Slit'
              data={[
                { wc: 'สถานี Slit 01', qty: 100 },
                { wc: 'สถานี Slit 02', qty: 200 },
                { wc: 'สถานี Slit 03', qty: 300 },
              ]}
            />
          </Grid>

          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <WorkCenterGroup
              workcenter_name='Forming'
              data={[
                { wc: 'สถานี Forming 01', qty: 100 },
                { wc: 'สถานี Forming 02', qty: 200 },
                { wc: 'สถานี Forming 03', qty: 300 },
              ]}
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <WorkCenterGroup
              workcenter_name='ดัดทรง'
              data={[
                { wc: 'สถานี ดัดทรง 01', qty: 100 },
                { wc: 'สถานี ดัดทรง 02', qty: 200 },
                { wc: 'สถานี ดัดทรง 03', qty: 300 },
              ]}
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <WorkCenterGroup
              workcenter_name='คว้านหัว'
              data={[
                { wc: 'สถานี คว้านหัว 01', qty: 100 },
                { wc: 'สถานี คว้านหัว 02', qty: 200 },
                { wc: 'สถานี คว้านหัว 03', qty: 300 },
              ]}
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <WorkCenterGroup
              workcenter_name='เทสน้ำ'
              data={[
                { wc: 'สถานี เทสน้ำ 01', qty: 100 },
                { wc: 'สถานี เทสน้ำ 02', qty: 200 },
                { wc: 'สถานี เทสน้ำ 03', qty: 300 },
              ]}
            />
          </Grid>

          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <WorkCenterGroup
              workcenter_name='เคลือบสี'
              data={[
                { wc: 'สถานี เคลือบสี 01', qty: 100 },
                { wc: 'สถานี เคลือบสี 02', qty: 200 },
                { wc: 'สถานี เคลือบสี 03', qty: 300 },
              ]}
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <WorkCenterGroup
              workcenter_name='Groove'
              data={[
                { wc: 'สถานี Groove 01', qty: 100 },
                { wc: 'สถานี Groove 02', qty: 200 },
                { wc: 'สถานี Groove 03', qty: 300 },
              ]}
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <WorkCenterGroup
              workcenter_name='ชุบ'
              data={[
                { wc: 'สถานี ชุบ 01', qty: 100 },
                { wc: 'สถานี ชุบ 02', qty: 200 },
                { wc: 'สถานี ชุบ 03', qty: 300 },
              ]}
            />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <WorkCenterGroup
              workcenter_name='ตัดแบ่ง'
              data={[
                { wc: 'สถานี ตัดแบ่ง 01', qty: 100 },
                { wc: 'สถานี ตัดแบ่ง 02', qty: 200 },
                { wc: 'สถานี ตัดแบ่ง 03', qty: 300 },
              ]}
            />
          </Grid>
         

          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <WorkCenterGroup
              workcenter_name='Packing'
              data={[
                { wc: 'สถานี Packing 01', qty: 100 },
                { wc: 'สถานี Packing 02', qty: 200 },
                { wc: 'สถานี Packing 03', qty: 300 },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default ProductionDashboard;
