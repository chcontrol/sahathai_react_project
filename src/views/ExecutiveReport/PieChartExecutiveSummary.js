import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut, Pie } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme,
  Grid,
  Chip

} from '@material-ui/core';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import PhoneIcon from '@material-ui/icons/Phone';
import TabletIcon from '@material-ui/icons/Tablet';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from "moment";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import MomentUtils from "@date-io/moment";
import API from '../components/API';

moment.locale("th");

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const PieChartExecutiveSummary = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();


  const [selectedDateStart, setSelectedDateStart] = useState(new Date());
  const [selectedDateEnd, setSelectedDateEnd] = useState(new Date());
  const [CoilRecive, setCoilRecive] = useState([]);
  const [PipeSale, setPipeSale] = useState([]);



  const showLineDataSetByItemGroup = (market, data) => {
    var dataset = data.filter(function (data) {
      return data.market == market;
    });
    let o = dataset.map((i) => {
      return i.sumQTY
    })

    return o
  }



  const dataCoil = {
    datasets: [
      {
        data: [showLineDataSetByItemGroup('Domestic', CoilRecive), showLineDataSetByItemGroup('International', CoilRecive)],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Domestic', 'International']
  };

  const dataPipe = {
    datasets: [
      {
        data: [showLineDataSetByItemGroup('Domestic', PipeSale), showLineDataSetByItemGroup('International', PipeSale)],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Domestic', 'International']
  };

  

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };
  const handleDateChangeStart = (date) => {
    setSelectedDateStart(date)
  }

  const handleDateChangeEnd = (date) => {
    setSelectedDateEnd(date.date)
  }

  const ExecPie = (selectedDateStart, selectedDateEnd) => {

    API.get(`API_ExecutiveReport/data.php?load=STS_execSUM_Coil_Rec&startDate=2020-01-01&endDate=2020-02-01`)
      .then(res => {
        (res.data) ? setCoilRecive(res.data) : setCoilRecive([])
        console.log(res.data)
      })

    API.get(`API_ExecutiveReport/data.php?load=STS_execSUM_Pipe_Sale&startDate=2020-01-01&endDate=2020-02-01`)
      .then(res => {
        (res.data) ? setPipeSale(res.data) : setPipeSale([])
        console.log(res.data)
      })
  }

  const CoilReciveDataSet = [
    {
      title: 'Domestic',
      value: showLineDataSetByItemGroup('Domestic', CoilRecive),
      icon: ArrowDownwardIcon,
      color: colors.indigo[600]
    },
    {
      title: 'International',
      value: showLineDataSetByItemGroup('International', CoilRecive),
      icon: ArrowUpwardIcon,
      color: colors.red[600]
    }
  ];

  const  PipeSaleDataSet = [
    {
      title: 'Domestic',
      value: showLineDataSetByItemGroup('Domestic', PipeSale),
      icon: ArrowDownwardIcon,
      color: colors.indigo[600]
    },
    {
      title: 'International',
      value: showLineDataSetByItemGroup('International', PipeSale),
      icon: ArrowUpwardIcon,
      color: colors.red[600]
    }
  ];

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid container spacing={3} >
          <Grid item xs={4}>
            <MuiPickersUtilsProvider utils={MomentUtils} >
              <KeyboardDatePicker
                variant="outlined"
                inputVariant="outlined"
                size="small"
                ampm={false}
                label={""}
                value={selectedDateStart}
                // onBlur={props.handleBlur}
                onError={console.log}
                style={{ fontSize: 5 }}
                format="YYYY-MM-DD"
                type="text"
                onChange={date => handleDateChangeStart(date.date)}
                fullWidth
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={4}>
            <MuiPickersUtilsProvider utils={MomentUtils} >
              <KeyboardDatePicker
                variant="outlined"
                inputVariant="outlined"
                size="small"
                ampm={false}
                label={""}
                value={selectedDateEnd}
                // onBlur={props.handleBlur}
                onError={console.log}
                style={{ fontSize: 5 }}
                format="YYYY-MM-DD"
                type="text"
                onChange={date => handleDateChangeEnd(date)}
                fullWidth
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={4}>
            <div style={{ padding: '0px 5px' }}>
              <span style={{ padding: '0px 4px' }}>
                <Chip color="primary" onClick={() => { ExecPie(selectedDateStart, selectedDateEnd) }} label={"PROCESS"} > </Chip>
              </span>

            </div>
          </Grid>
        </Grid>

      </CardContent>
      <CardHeader title="Coil Received(MT) & STEEL PIPE DELIVERY(MT)" />
      <Divider />
      <CardContent>
        <Grid container >
          <Grid item xs={6}>
            <Box
              height={200}
              position="relative"
            >
              <Pie
                data={dataCoil}
                options={options}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              mt={2}
            >
              {CoilReciveDataSet.map(({
                color,
                icon: Icon,
                title,
                value
              }) => (
                <Box
                  key={title}
                  p={1}
                  textAlign="center"
                >
                  <Icon color="action" />
                  <Typography
                    color="textPrimary"
                    variant="body1"
                  >
                    {title}
                  </Typography>
                  <Typography
                    style={{ color }}
                    variant="h2"
                  >
                    {value}
              </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              height={200}
              position="relative"
            >

              <Pie
                data={dataPipe}
                options={options}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              mt={2}
            >
              {PipeSaleDataSet.map(({
                color,
                icon: Icon,
                title,
                value
              }) => (
                <Box
                  key={title}
                  p={1}
                  textAlign="center"
                >
                  <Icon color="action" />
                  <Typography
                    color="textPrimary"
                    variant="body1"
                  >
                    {title}
                  </Typography>
                  <Typography
                    style={{ color }}
                    variant="h2"
                  >
                    {value}
                
              </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>


      </CardContent>
    </Card>
  );
};

PieChartExecutiveSummary.propTypes = {
  className: PropTypes.string
};

export default PieChartExecutiveSummary;
