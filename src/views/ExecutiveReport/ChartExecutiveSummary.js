import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar, Line } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Menu,
  MenuItem

} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useState } from 'react';
import API from '../components/API';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from "moment";

moment.locale("th");

const useStyles = makeStyles((theme) => ({
  // root: {
  //   display: 'flex',
  //   '& > * + *': {
  //     marginLeft: theme.spacing(2),
  //   },
  // },
}));


const ChartExecutiveSummary = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  const [GarphLineData, setGarphLineData] = useState([])
  const [GarphLineDataAll, setGarphLineDataAll] = useState([])
  const [Item_Group, setItem_Group] = useState("all")
  const [LoadingData, setLoadingData] = useState(true)


  const STS_execRpt_SUM_mthly = (Item_Group) => {
    setLoadingData(false)

    if (Item_Group == 'all') {

      API.get(`API_ExecutiveReport/data.php?load=STS_execRpt_SUM_mthly_all`)
        .then(res => {

          
          (res.data) ? setGarphLineDataAll(res.data) : setGarphLineDataAll([])
          // (res.data) ? setGarphLineDataAll(res.data) : setGarphLineDataAll([])
          setLoadingData(true)
        })
    }
    else {
      API.get(`API_ExecutiveReport/data.php?load=STS_execRpt_SUM_mthly&startDate=${moment().subtract(12, 'months').format("YYYY-MM-DD")}&endDate=${moment().format("YYYY-MM-DD")}&codeItem=${Item_Group}`)
        .then(res => {
          (res.data) ? setGarphLineData(res.data) : setGarphLineData([])
          setLoadingData(true)
        })
    }


  }

  useEffect(() => {
    STS_execRpt_SUM_mthly(Item_Group)
  }, [Item_Group])





  const showLineDataSetByItemGroup = (Data_Group, data) => {
    var dataset = data.filter(function (data) {
      return data.Data_Group == Data_Group;
    });
    let o = dataset.map((i) => {
      return i.sumQTY
    })

    return o
  }

  const showLineDataSetByItemGroupAll = (Item_Group, data) => {

    /*
    data = [
      { Year: 2019, Month: 1, Item_Group: "Strip", sumQTY: 20000 },
      { Year: 2019, Month: 2, Item_Group: "Strip", sumQTY: 30000 },
      { Year: 2019, Month: 3, Item_Group: "Strip", sumQTY: 40000 },
      { Year: 2019, Month: 4, Item_Group: "Strip", sumQTY: 50000 },
      { Year: 2019, Month: 5, Item_Group: "Strip", sumQTY: 60000 },
      { Year: 2019, Month: 6, Item_Group: "Strip", sumQTY: 70000 },
      { Year: 2019, Month: 7, Item_Group: "Strip", sumQTY: 80000 },
      ...data]
      */
    var dataset = data.filter(function (data) {
      return data.Item_Group == Item_Group;
    });
    let datasetGroup = dataset.map((i) => {
      return i.sumQTY
    })
    let dataReturn = [0,0,0,0,0,0,0,0,0,0,0,...datasetGroup]
    return dataReturn
  }


  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data: showLineDataSetByItemGroup("Received", GarphLineData),
        label: 'Received',
        fill: false,
        borderColor: colors.indigo[500],

      },
      {
        backgroundColor: colors.green[500],
        data: showLineDataSetByItemGroup("Released", GarphLineData),
        label: 'Released',
        fill: false,
        borderColor: colors.green[500],
      },
      {
        backgroundColor: colors.orange[500],
        data: showLineDataSetByItemGroup("Balance", GarphLineData),
        label: 'Balance',
        fill: false,
        borderColor: colors.orange[500],
      }
    ],
    labels: [
      [moment().subtract(12, 'months').format("MMMM-YYYY")],
      [moment().subtract(11, 'months').format("MMM-YYYY")],
      [moment().subtract(10, 'months').format("MMM-YYYY")],
      [moment().subtract(9, 'months').format("MMM-YYYY")],
      [moment().subtract(8, 'months').format("MMM-YYYY")],
      [moment().subtract(7, 'months').format("MMM-YYYY")],
      [moment().subtract(6, 'months').format("MMM-YYYY")],
      [moment().subtract(5, 'months').format("MMM-YYYY")],
      [moment().subtract(4, 'months').format("MMM-YYYY")],
      [moment().subtract(3, 'months').format("MMM-YYYY")],
      [moment().subtract(2, 'months').format("MMM-YYYY")],
      [moment().subtract(1, 'months').format("MMM-YYYY")],
      [moment().format("MMM-YYYY")],
      [moment().add(1, 'months').format("MMM-YYYY")],
    ]
  };

  const data_all = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data: showLineDataSetByItemGroupAll("Coil", GarphLineDataAll),
        label: 'Coil',
        fill: false,
        borderColor: colors.indigo[500],

      }, {
        backgroundColor: colors.orange[500],
        data: showLineDataSetByItemGroupAll("Strip", GarphLineDataAll),
        label: 'Strip',
        fill: false,
        borderColor: colors.orange[500],
      },
      {
        backgroundColor: colors.red[500],
        data: showLineDataSetByItemGroupAll("Processing Pipe", GarphLineDataAll),
        label: 'Processing Pipe',
        fill: false,
        borderColor: colors.red[500],
      },
      {
        backgroundColor: colors.green[500],
        data: showLineDataSetByItemGroupAll("Finished Pipe", GarphLineDataAll),
        label: 'Finished Pipe',
        fill: false,
        borderColor: colors.green[500],
      },

      {
        backgroundColor: colors.blue[300],
        data: showLineDataSetByItemGroupAll("Scrap Pipe", GarphLineDataAll),
        label: 'Scrap Pipe',
        fill: false,
        borderColor: colors.blue[300],
      },

    ],
    labels:
      [
        [moment().subtract(12, 'months').format("MMM-YYYY")],
        [moment().subtract(11, 'months').format("MMM-YYYY")],
        [moment().subtract(10, 'months').format("MMM-YYYY")],
        [moment().subtract(9, 'months').format("MMM-YYYY")],
        [moment().subtract(8, 'months').format("MMM-YYYY")],
        [moment().subtract(7, 'months').format("MMM-YYYY")],
        [moment().subtract(6, 'months').format("MMM-YYYY")],
        [moment().subtract(5, 'months').format("MMM-YYYY")],
        [moment().subtract(4, 'months').format("MMM-YYYY")],
        [moment().subtract(3, 'months').format("MMM-YYYY")],
        [moment().subtract(2, 'months').format("MMM-YYYY")],
        [moment().subtract(1, 'months').format("MMM-YYYY")],
        [moment().format("MMM-YYYY")],
        [moment().add(1, 'months').format("MMM-YYYY")],
      ]
  };



  const optionsLine = {
    animation: true,
    cornerRadius: 40,
    layout: { padding: 0 },
    legend: { display: true },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: true,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
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

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // setItem_Group(event.currentTarget)
  };

  const handleClose = (value) => {
    setAnchorEl(null);
    setItem_Group(value)
  };


  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={(
          <div>
            <Button
              endIcon={<ArrowDropDownIcon />}
              size="small"
              variant="text"
              aria-haspopup="true" onClick={handleClick}
            >
              {Item_Group}

            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={() => handleClose()}
            >
              <MenuItem onClick={() => handleClose("all")}>OVERALL BALANCE</MenuItem>
              <MenuItem onClick={() => handleClose("COIL")}>COIL</MenuItem>
              <MenuItem onClick={() => handleClose("Strip")}>Strip</MenuItem>
              {/* <MenuItem onClick={() => handleClose("Processing Pipe")}>Processing Pipe</MenuItem> */}
              <MenuItem onClick={() => handleClose("Finshed Pipe")}>Finshed Pipe</MenuItem>
              <MenuItem onClick={() => handleClose("Scrap Pipe")}>Scrap Pipe</MenuItem>
            </Menu>
            <span hidden={LoadingData}>
              <CircularProgress color="secondary" hidden={true} />
            </span>


          </div>

        )}
        title="Executive Summary"
      />
      <Divider />
      <CardContent>

        {/* <Box
          height={400}
          position="relative"
        >
          <Bar
            data={data}
            options={options}
          />
        </Box> */}

        <Box
          height={400}
          position="relative"
        >
          <Line
            data={(Item_Group == 'all') ? data_all : data}
            options={optionsLine}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
          onClick={()=>{STS_execRpt_SUM_mthly("all")}}
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};

ChartExecutiveSummary.propTypes = {
  className: PropTypes.string
};

export default ChartExecutiveSummary;
