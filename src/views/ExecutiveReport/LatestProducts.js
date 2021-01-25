import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
  useTheme
} from '@material-ui/core';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import API from '../components/API';




const useStyles = makeStyles(({
  root: {
    height: '100%'
  },
  image: {
    height: 120,
    width: 120
  }
}));



const LatestProducts = ({ className, ...rest }) => {
  const classes = useStyles();

  const theme = useTheme();


  const [V_STS_execSUM_Outs_Coil, setV_STS_execSUM_Outs_Coil] = useState([])
  const [V_STS_execSUM_Outs_Strip, setV_STS_execSUM_Outs_Strip] = useState([])
  const [V_STS_execSUM_Outs_ProcessingPipe, setV_STS_execSUM_Outs_ProcessingPipe] = useState([])
  const [V_STS_execSUM_Outs_FinishedPipe, setV_STS_execSUM_Outs_FinishedPipe] = useState([])
  const [V_STS_execSUM_Outs_Finished_BarePipe, setV_STS_execSUM_Outs_Finished_BarePipe] = useState([])
  const [V_STS_execSUM_Outs_Finished_BundledPipe, setV_STS_execSUM_Outs_Finished_BundledPipe] = useState([])


  const data = [
    {
      id: uuid(),
      name: V_STS_execSUM_Outs_Coil,
      imageUrl: '/static/images/products/product_1.png',
      updatedAt: moment().subtract(2, 'hours'),
      description: '123456789'
    },
    {
      id: uuid(),
      name: 'Medium Corporation',
      imageUrl: '/static/images/products/product_2.png',
      updatedAt: moment().subtract(2, 'hours')
    },
    {
      id: uuid(),
      name: 'Slack',
      imageUrl: '/static/images/products/product_3.png',
      updatedAt: moment().subtract(3, 'hours')
    },
    {
      id: uuid(),
      name: 'Lyft',
      imageUrl: '/static/images/products/product_4.png',
      updatedAt: moment().subtract(5, 'hours')
    },
    {
      id: uuid(),
      name: 'GitHub',
      imageUrl: '/static/images/products/product_5.png',
      updatedAt: moment().subtract(9, 'hours')
    }
  ];

  const SearchOutStanding = () => {
    API.get(`API_ExecutiveReport/data.php?load=setV_STS_execSUM_Outs_Coil`)
      .then(res => {
        (res.data) ? setV_STS_execSUM_Outs_Coil(res.data) : setV_STS_execSUM_Outs_Coil([])
      })
    API.get(`API_ExecutiveReport/data.php?load=setV_STS_execSUM_Outs_Strip`)
      .then(res => {
        (res.data) ? setV_STS_execSUM_Outs_Strip(res.data) : setV_STS_execSUM_Outs_Strip([])
      })
    API.get(`API_ExecutiveReport/data.php?load=setV_STS_execSUM_Outs_ProcessingPipe`)
      .then(res => {
        (res.data) ? setV_STS_execSUM_Outs_ProcessingPipe(res.data) : setV_STS_execSUM_Outs_ProcessingPipe([])
      })
    API.get(`API_ExecutiveReport/data.php?load=setV_STS_execSUM_Outs_FinishedPipe`)
      .then(res => {
        (res.data) ? setV_STS_execSUM_Outs_FinishedPipe(res.data) : setV_STS_execSUM_Outs_FinishedPipe([])
      })
    API.get(`API_ExecutiveReport/data.php?load=setV_STS_execSUM_Outs_Finished_BarePipe`)
      .then(res => {
        (res.data) ? setV_STS_execSUM_Outs_Finished_BarePipe(res.data) : setV_STS_execSUM_Outs_Finished_BarePipe([])
      })
    API.get(`API_ExecutiveReport/data.php?load=setV_STS_execSUM_Outs_Finished_BundledPipe`)
      .then(res => {
        (res.data) ? setV_STS_execSUM_Outs_Finished_BundledPipe(res.data) : setV_STS_execSUM_Outs_Finished_BundledPipe([])
      })
  }






  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        subtitle={` in total`}
        title="OUTSTANDDING"
      />
      <Divider />


      <List>
        <ListItem>
          <ListItemAvatar>
            <img alt="Product" className={classes.image} src={'/static/images/products/product_2.png'} />
          </ListItemAvatar>
          <ListItemText
            primary='Coil'
            secondary='456'
          />
          <IconButton edge="end" size="small" >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      </List>

      <List>
        <ListItem>
          <ListItemAvatar>
            <img alt="Product" className={classes.image} src={'/static/images/products/product_2.png'} />
          </ListItemAvatar>
          <ListItemText
            primary='Strip'
            secondary='456'
          />
          <IconButton edge="end" size="small" >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      </List>

      <List>
        <ListItem>
          <ListItemAvatar>
            <img alt="Product" className={classes.image} src={'/static/images/products/product_2.png'} />
          </ListItemAvatar>
          <ListItemText
            primary='Processing Pipe'
            secondary='456'
          />
          <IconButton edge="end" size="small" >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      </List>

      <List>
        <ListItem>
          <ListItemAvatar>
            <img alt="Product" className={classes.image} src={'/static/images/products/product_2.png'} />
          </ListItemAvatar>
          <ListItemText
            primary='Finished Pipe'
            secondary='456'
          />
          <IconButton edge="end" size="small" >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      </List>

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
          onClick={SearchOutStanding}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

LatestProducts.propTypes = {
  className: PropTypes.string
};

export default LatestProducts;
