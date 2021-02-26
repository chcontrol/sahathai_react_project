import React from 'react';
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import Page from 'src/components/Page';
import WorkCenterGroup from './WorkCenterGroup';
import API from 'src/views/components/API';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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

  const min = 1;
  const max = 100;
  const rand = min + Math.random() * (max - min);



  const [date, setDate] = React.useState(new Date());
  const [data1, setData1] = React.useState(0);


  React.useEffect(() => {
    var timerID = setInterval(() => tick(), 5000);


    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    
    API.get(`API_ExecutiveReport/data.php?load=matltran_mst_count_intreval&startDate='2021-02-26 08:00:00.000'&endDate='2021-02-26 23:00:00.000'`)
      .then(res => {
        setData1(res.data[0].count_trans)
      })
    setDate(new Date());
  }

  // function callAPI() {



  // }


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
                    ภาพรวมการผลิต {data1}
                  </Typography>
                  <Typography color="textPrimary" gutterBottom variant="h5" >
                    วันที่ 16/02/2021 เวลา {date.toLocaleTimeString()}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item lg={6} sm={6} xl={6} xs={6}>
            <Card spacing={1} >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Grid justify="space-between" container spacing={24}  >
                    <Grid item>
                      <Typography type="title" color="inherit"> ฟอร์มมิ่ง  </Typography>
                    </Grid>
                    <Grid item>
                      12
                    </Grid>
                  </Grid>


                </AccordionSummary>
                <AccordionDetails>
                  <Typography> รายละเอียดแต่ละเครื่อง </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion disabled>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography className={classes.heading}>Disabled Accordion</Typography>
                </AccordionSummary>
              </Accordion>
            </Card>
          </Grid>
          <Grid item lg={6} sm={6} xl={6} xs={6}>
            <Card spacing={1} >
              sdfg
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default ProductionDashboard;
