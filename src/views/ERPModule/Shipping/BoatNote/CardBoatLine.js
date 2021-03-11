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
  Button,
  Chip
} from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import ModalManagementFullPage from '../../../components/ModalManagementFullPage';
import MaterialTable, { MTableToolbar } from 'material-table';
import tableIcons from 'src/views/components/table/tableIcons';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%'
  },
  avatar: {
    backgroundColor: colors.green[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.green[900]
  },
  differenceValue: {
    color: colors.green[900],
    marginRight: theme.spacing(1)
  }
}));

const TotalCustomers = ({ className, ...rest }) => {
  const classes = useStyles();

  const [openModalItem, setOpenModalItem] = React.useState(false);

  const handleCloseModalItem = async () => {


    setOpenModalItem(false);
  };
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}

    >
      <ModalManagementFullPage
        modalHeader={
          <></>
        }
        modalDetail={
          <div>123</div>
        }

        open={openModalItem}
        onClose={handleCloseModalItem}
      />
      <CardContent

      >
       
        <Grid
          container
          spacing={3}
        >
          <Grid item>

          <MaterialTable
            style={{ width: '100%', margin: 5, overflowX: "scroll" }}
            icons={tableIcons}
            title=""
            columns={[
              { title: 'item', field: 'item' },
              { title: 'qty', field: 'item_qty', type: 'numeric', filtering: false, width: 5 },
              { title: 'qty', field: 'item_qty', type: 'numeric', filtering: false, width: 5 },
              { title: 'qty', field: 'item_qty', type: 'numeric', filtering: false, width: 5 },
              { title: 'qty', field: 'item_qty', type: 'numeric', filtering: false, width: 5 },
            ]}
            // onRowClick={(event, rowData) => {
            //   SelectItemToModal(rowData)
            // }}
            data={[
              { item: 'item', qty: 'item' },
            ]}
            options={{
              search: false,
              paging: false,
              maxBodyHeight: '65vh',
              minBodyHeight: '65vh',
              filtering: true,
            }}

            components={{
              Toolbar: props => (
                  <div>
                      <MTableToolbar {...props} />
                      <div style={{ padding: '0px 10px' }}>
                           <Chip label={"สร้างใบส่งสินค้า"} color="primary" style={{ marginRight: 5 }} onClick={() => setOpenModalItem(true)} />
                      </div>
                  </div>
              ),
          }}
          />
          </Grid>
        </Grid>
        {/* <Box
          mt={0}
          display="flex"
          alignItems="center"
        >
          <ArrowUpwardIcon className={classes.differenceIcon} />
          <Typography
            className={classes.differenceValue}
            variant="body2"
          >
            16%
          </Typography>
          <Typography
            color="textSecondary"
            variant="caption"
          >
            Since last month
          </Typography>
        </Box> */}
      </CardContent>
    </Card>
  );
};

TotalCustomers.propTypes = {
  className: PropTypes.string
};

export default TotalCustomers;
