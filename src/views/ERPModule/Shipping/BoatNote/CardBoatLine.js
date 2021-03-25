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
import ModalManagementFullPage from '../../../components/ModalManagementFullPage';
import MaterialTable, { MTableToolbar } from 'material-table';
import tableIcons from 'src/views/components/table/tableIcons';
import { ReportMoveInternal } from './ReportMoveInternal';
import { ReportMoveBoatNote } from './ReportMoveBoatNote';
import API from 'src/views/components/API';
import CTextField from 'src/views/components/Input/CTextField';


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

const CardBoatLine = (props, { className, ...rest }) => {
  const classes = useStyles();

  const [openModalItem, setOpenModalItem] = React.useState(false);

  const printReportMove = async (doc_type) => {
    if (props.doc_num) {

      if (doc_type == "Internal") {
        const response = await API.get("RPT_JOBPACKING/data.php", {
          params: {
            load: 'STS_QTY_MOVE_REPORT',
            doc_num: props.doc_num
          }
        })
        ReportMoveInternal(response.data)
      } else if (doc_type == "BoatNote") {
        const response = await API.get("RPT_JOBPACKING/data.php", {
          params: {
            load: 'STS_QTY_MOVE_REPORT',
            doc_num: props.doc_num
          }
        })
        ReportMoveBoatNote(response.data, response.data, response.data, response.data)
      }




    } else {
      alert("เลือกใบส่งของ")
    }
  }


  const openEditPage = () => {
    props.handlesetEditStatus()
  }



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
      <CardContent>
        <Grid
          container
          spacing={3}
        >
          <Grid item>
            <div>
              <div style={{ padding: '0px 10px' }}>

                {/* <CTextField
                  error={Boolean(touched.item && errors.item)}
                  helperText={touched.item && errors.item}
                  label="DO num"
                  name="do_num"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.do_num}
                  Autocomplete={false}
                /> */}
                {/* <Chip label={"พิมพ์ใบส่งสินค้า"} color="primary" style={{ marginRight: 5 }} onClick={() => setOpenModalItem(true)} /> */}
                {
                  (props.doc_type == "Ship") ?
                    <Chip label={"พิมพ์ Boat Note"} color="primary" style={{ marginRight: 5 }} onClick={() => printReportMove("BoatNote")} />
                    :
                    <Chip label={"พิมพ์ใบส่งสินค้า"} color="primary" style={{ marginRight: 5 }} onClick={() => printReportMove("Internal")} />
                }


                <Chip label={"แก้ไขใบส่งสินค้า"} color="primary" style={{ marginRight: 5 }} onClick={openEditPage} />
              </div>
            </div>

            <MaterialTable
              style={{ width: '62vw', margin: 5, overflowX: "scroll" }}
              icons={tableIcons}
              title={"Quantity Move List (" + props.doc_num + ") : " + props.STS_qty_move_line.length + " รายการ"}
              columns={[
                { title: 'id', field: 'id' },
                { title: 'lot', field: 'lot', width: 200 },
                { title: 'From loc', field: 'loc', width: 100 },
                { title: 'item', field: 'item', width: 300 },
                { title: 'qty', field: 'qty1', type: 'numeric' },
                { title: 'unit', field: 'u_m' },
                { title: 'boat position', field: 'boat_position' },
              ]}
              // onRowClick={(event, rowData) => {
              //   SelectItemToModal(rowData)
              // }}
              data={props.STS_qty_move_line}
              options={{
                search: false,
                paging: false,
                maxBodyHeight: '65vh',
                minBodyHeight: '65vh',
                filtering: false,
                rowStyle: rowData => ({
                  // backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF',
                  fontSize: '0.7em',
                  padding: 0,
                  fontFamily: 'sans-serif'
                })
              }}

            // components={{
            //   Toolbar: props => (
            //     <div>
            //       <MTableToolbar {...props} />
            //       <div style={{ padding: '0px 10px' }}>

            //         {/* <Chip label={"พิมพ์ใบส่งสินค้า"} color="primary" style={{ marginRight: 5 }} onClick={() => setOpenModalItem(true)} /> */}
            //         <Chip label={"พิมพ์ใบส่งสินค้า"} color="primary" style={{ marginRight: 5 }} onClick={() => printReportMoveInternal()} />
            //         <Chip label={"พิมพ์ Boat Note"} color="primary" style={{ marginRight: 5 }} onClick={() => printReportMoveBoatNote()} />
            //       </div>
            //     </div>
            //   ),
            // }}
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

CardBoatLine.propTypes = {
  className: PropTypes.string
};

export default CardBoatLine;
