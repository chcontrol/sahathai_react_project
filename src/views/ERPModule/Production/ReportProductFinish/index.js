import React, { useEffect, useState } from 'react';
import {
  Button,
  Chip,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import { DataGrid } from '@material-ui/data-grid';
import MaterialTable, { MTableToolbar } from 'material-table';
import tableIcons from 'src/views/components/table/tableIcons';
import API from 'src/views/components/API';
import MenuChip from './MenuChip';
import ModalNopaperLGPage from 'src/views/components/ModalNopaperLGPage';
import V_STS_execRpt_F_byMarket_Live from './V_STS_execRpt_F_byMarket_Live';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));


const ReportProductFinish = (props) => {
  const classes = useStyles();
  const [DataReportProductFinish, setDataReportProductFinish] = useState([])
  const [openModalItem2, setOpenModalItem2] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);


  const searchReportProductFinish = () => {


    API.get(`API_ExecutiveReport/data.php?load=ReportProductFinish`)
      .then(res => {
        setDataReportProductFinish(res.data)
      })
  }

  useEffect(() => {
    searchReportProductFinish()
  }, [])

  const handleClick = (event) => {
    setOpenModalItem2(true);

  };

  const handleCloseModalItem = async () => {
    setOpenModalItem2(false);
  };

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >

      <ModalNopaperLGPage
        modalHeader={
          <>รายงาน {`${props.label} By Size`}</>
        }
        modalDetail={
          <V_STS_execRpt_F_byMarket_Live
            title={`${props.label} By TypeSize`}
            daystart={props.daystart}
            dayend={props.dayend}
          />
        }
        open={openModalItem2}
        onClose={handleCloseModalItem}
      />

      <Container maxWidth={false}>

        <Grid container spacing={0} >
          {/* {JSON.stringify(DataReportProductFinish)} */}
          {/* <Grid item xs={12}>
            <Button onClick={searchReportProductFinish}>Search</Button>

          </Grid> */}
          <Grid item xs={12}>
            <MaterialTable
              title="รายงานอายุสินค้าสำเร็จรูป พร้อมส่งมอบ"
              icons={tableIcons}

              columns={[
                {
                  title: 'Market', field: 'Market', width: 300,
                  headerStyle: { backgroundColor: '#f8f7ff', width: 130 },
                  cellStyle: { backgroundColor: '#f8f7ff', width: 130 }
                },
                {
                  title: 'Type', field: 'Type', width: 300,
                  headerStyle: { backgroundColor: '#f8f7ff', width: 130 },
                  cellStyle: { backgroundColor: '#f8f7ff', width: 130 }
                },
                { title: '0-1 เดือน จำนวนเส้น', field: '0-1 เดือน จำนวนเส้น', type: 'numeric', cellStyle: { backgroundColor: '' }, },
                { title: '(0-30 วัน) นน.ตัน', field: '(0-30 วัน) นน.ตัน', type: 'numeric' },
                { title: '2-3 เดือน จำนวนเส้น', field: '2-3 เดือน จำนวนเส้น', type: 'numeric' },
                { title: '(31-90 วัน) นน.ตัน', field: '(31-90 วัน) นน.ตัน', type: 'numeric' },
                { title: '4-6 เดือน จำนวนเส้น', field: '0-1 เดือน จำนวนเส้น', type: 'numeric' },
                { title: '(91-180 วัน) นน.ตัน', field: '(91-180 วัน) นน.ตัน', type: 'numeric' },
                { title: '7-12 เดือน จำนวนเส้น', field: '0-1 เดือน จำนวนเส้น', type: 'numeric' },
                { title: '(181-365 วัน) นน.ตัน', field: '(181-365 วัน) นน.ตัน', type: 'numeric' },
                { title: '>2 ปี จำนวนเส้น', field: '>2 ปี จำนวนเส้น', type: 'numeric' },
                { title: '(>730 วัน) นน.ตัน', field: '(>730 วัน) นน.ตัน', type: 'numeric' },
                { title: 'รวม เส้น', field: 'รวม จำนวนเส้น', type: 'numeric' },
                { title: 'รวม นน.ตัน', field: 'รวม นน.ตัน', type: 'numeric' },

              ]}
              data={DataReportProductFinish}
              components={{
                Toolbar: props => (
                  <div>
                    <MTableToolbar {...props} />
                    <div style={{ padding: '0px 10px' }}>
                      <Chip
                        aria-controls="customized-menu"
                        aria-haspopup="true"
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                        label={"รายงานจำแนกโดยชนิดท่อ"}
                      >
                      </Chip>
                      <Button label="0-1 วัน" daystart="0" dayend="1" />
                      <MenuChip label="0-1 วัน" daystart="0" dayend="1" />
                      <MenuChip label="2-7 วัน" daystart="2" dayend="7" />
                      <MenuChip label="8-14 วัน" daystart="8" dayend="14" />
                      <MenuChip label="15-30 วัน" daystart="15" dayend="30" />
                      <MenuChip label="31-90 วัน" daystart="31" dayend="90" />
                      <MenuChip label="91-180 วัน" daystart="91" dayend="180" />
                      <MenuChip label="มากกว่า 180 วัน" daystart="181" dayend="3000" />
                      <MenuChip label="รวม" daystart="0" dayend="3000" />
                    </div>
                  </div>
                ),
              }}

              options={{

                cellStyle: { padding: '0.0' },
                headerStyle: { padding: '0.1' },
                search: false,
                paging: false,
                maxBodyHeight: '66vh',
                minBodyHeight: '66vh',
                sorting: false,
                // width: '100vw',
                exportButton: true,
                filtering: false,
                rowStyle: rowData => ({
                  // backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF',
                  fontSize: 14,
                  padding: 0,
                  width: 500
                }
                ),
              }}
            />
          </Grid>

        </Grid>
      </Container>
    </Page>
  );
};

export default ReportProductFinish;
