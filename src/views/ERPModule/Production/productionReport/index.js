import React, { useEffect, useState } from 'react';
import { FormControl, FormControlLabel, FormLabel, Grid, IconButton, Modal, Paper, Radio, RadioGroup, Snackbar } from '@material-ui/core';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake-thai/build/vfs_fonts";
import { ReportCheckPackingDiary } from './ReportCheckPackingDiary'
import { ReportCheckProductionDiary } from './ReportCheckProductionDiary'
import { ReportMovingProductReport } from './ReportMovingProductReport'


import { ReportPackingDiary } from './ReportPackingDiary';
import { ReportProductionDaily } from './ReportProductionDaily';
import { ReportForming } from './ReportForming';
import { ReportStamping } from './ReportStamping';
import moment from "moment";
import DateTimePicker from '../../../components/Input/CDateTimePicker';
import CButton from '../../../components/Input/CButton';
import { Formik } from 'formik';
import CTextField from '../../../components/Input/CTextField';
import API from '../../../components/API';
import { convertAllLotReport } from './function/GroupLot';
import { Alert, AlertTitle } from '@material-ui/lab';
import CAutocomplete from '../../../components/Input/CAutocomplete ';
import ReasonStopMachineTableEditable from './ReasonStopMachineTableEditable';
import ReasonStopMachineDetailTableEditable from './ReasonStopMachineDetailTableEditable';

import ReasonRecordStopMachineTableEditable from './ReasonRecordStopMachineTableEditable';
import ReasonRecordStopMachineMetersTableEditable from './ReasonRecordStopMachineMetersTableEditable';
import customStyles from "./customStyles.js";
// import SearchFn from "./SearchFn"
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ProductionDailyReportTable from './ProductionDailyReportTable';
import ShiftSelect from './ShiftSelect';
import ItemDetail from './ItemDetail';
import ModalManagement from './ModalManagement';
import ReasonAddNewReason from './ReasonAddNewReason';


moment.locale("th");
const useStyles = customStyles

const ProductionDailyReport = () => {
  const classes = useStyles();
  const [data, setdata] = useState([])
  const [isLoadingData, setisLoadingData] = useState(false)
  const [openModal, setOpenModal] = React.useState(false);
  const [openModalReasonMaster, setOpenModalReasonMaster] = React.useState(false);
  const [openModalReasonMasterDetail, setOpenModalReasonMasterDetail] = React.useState(false);
  const [openModalAddNewReason, setOpenModalAddNewReason] = React.useState(false);
  const [openModalItem, setOpenModalItem] = React.useState(false);
  const [dataFormingRecord, setDataFormingRecord] = useState([])
  const [dataFormingRecord_reason_meter, setDataFormingRecord_reason_meter] = useState([])
  const [dataFormingRecord_description, setDataFormingRecord_description] = useState([])
  const [dataFormingRecord_description_detail, setDataFormingRecord_description_detail] = useState([])
  const [selectFormingRecordReason, setselectFormingRecordReason] = useState()
  const [openAlert, setOpenAlert] = React.useState(false);
  const [SizeGridInModalLeft, setSizeGridInModalLeft] = useState(6)
  const [SizeGridInModalRight, setSizeGridInModalRight] = useState(6)
  const [RadioOT, setRadioOT] = React.useState('0');
  const [RadioOTRate, setRadioOTRate] = React.useState('8');


  const [itemModal, setitemModal] = useState(null)

  const handleOpenModal = async (values) => {
    if (!values.w_c) {
      handleClickAlert()
    } else {
      const response = await API.get("RPT_JOBPACKING/data.php", {
        params: {
          load: "SelectFormingModal",
          txtFromDate: values.startdate,
          txtToDate: values.enddate,
          txtItem: values.item,
          txtref_num: values.refnum,
          txtw_c: values.w_c,
        }
      });
      if (response.data !== null) {
        setDataFormingRecord(response.data)
      }
      setOpenModal(true);
    }

    const response2 = await API.get("RPT_JOBPACKING/data.php", {
      params: {
        load: "SelectForming_reason_description",
      }
    });

    const obj = {}
    if (response2.data !== null) {
      for (let i = 0; i < response2.data.length; i++) {
        const key = response2.data[i].reason_id;
        obj[key] = response2.data[i].reason_description;
      }
      setselectFormingRecordReason(obj)
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleCloseModalReasonMaster = async () => {
    setOpenModalReasonMaster(false);
  };

  const handleCloseModalReasonMasterDetail = async () => {
    setOpenModalReasonMasterDetail(false);
  };

  const handleCloseModalAddNewReason = async () => {
    setOpenModalAddNewReason(false);
  };

  const handleOpenModalItem = async (item) => {
    console.log(item)
    setitemModal(item)
    setOpenModalItem(true);
  };

  const handleCloseModalItem = async () => {
    setOpenModalItem(false);
  };

  const setLocalStorageW_c = (w_c) => {
    localStorage.setItem("w_c", w_c);
  }

  const SearchFn = async (load, values, wc_group_query, doc_type) => {
    setLocalStorageW_c(values.w_c)
    setisLoadingData(true)
    try {
      const response = await API.get("RPT_JOBPACKING/data.php", {
        params: {
          load: load,
          txtFromDate: values.startdate,
          txtToDate: values.enddate,
          txtItem: values.item,
          txtref_num: values.refnum,
          txtw_c: values.w_c,
          wc_group_query: wc_group_query
        }
      });
      let kotFromDataO = " 0057(14; 0058(14; 0059(14; 0060(14; 0061(14; 0062(14; 0063(14; 0064(14; 0065(14; 0066(14; 0067(14; 0068(14; 0070(14; 0071(14; 0072(14; 0073(14; 0074(14; 0075(14; 0076(14; 0077(14; 0078(14; 0079(14; 0080(14; 0081(14; 0082(14; 0083(14; 0084(14; 0085(14; 0086(14; 0087(14; 0088(14; 0089(14; 0090(14; 0091(14; 0092(14; 0093(14; 0094(14; 0095(14; 0096(14; 0097(13"
      // console.log("------------------------------------")
      console.log(convertAllLotReport("wordslot", kotFromDataO))
      if (doc_type === 'Packing') {
        ReportPackingDiary(response.data, values.startdate, values.enddate)
      } else if (doc_type === 'Production') {
        ReportProductionDaily(response.data, values.startdate, values.enddate)
      } else if (doc_type === 'Forming') {
        ReportForming(response.data, values.startdate, values.enddate)
      } else if (doc_type === 'CheckPacking') {
        ReportCheckPackingDiary(response.data, values.startdate, values.enddate)
      } else if (doc_type === 'CheckProduction') {
        ReportCheckProductionDiary(response.data, values.startdate, values.enddate)
      } else if (doc_type === 'MovingProductReport') {
        ReportMovingProductReport(response.data, values.startdate, values.enddate)
      } else if (doc_type === 'Stamping') {
        ReportStamping(response.data, values.startdate, values.enddate)
      }
      setdata(response.data)
      setisLoadingData(false)
    } catch (error) {
      alert(error)
      console.log("error", error);
    }
  }

  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  const pdfDocGenerator = pdfMake.createPdf("");
  pdfDocGenerator.getDataUrl((dataUrl) => {
    const targetElement = document.querySelector('#iframeContainer');
    const iframe = document.createElement('iframe');
    iframe.src = dataUrl;
    targetElement.appendChild(iframe);
  });

  const HoverInModalRight = async () => {
    setSizeGridInModalLeft(6)
    setSizeGridInModalRight(6)
  }

  const HoverInModalLeft = async () => {
    setSizeGridInModalLeft(6)
    setSizeGridInModalRight(6)
  }

  const handleClickAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    setAnchorEl(null);
  };


  const handleChangeRadioOT = (event) => {
    setRadioOT(event.target.value);
    setRadioOTRate(Number(8) + Number(event.target.value))
  };

  
  return (
    <Paper className={classes.paper}>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={openAlert}
        autoHideDuration={3000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="error" variant="filled">
          <AlertTitle>Error</AlertTitle>
          กรุณเลือก work center
        </Alert>
      </Snackbar>
      <Grid container spacing={0}>
        <Grid item xs={12} >
          <Formik
            initialValues={
              {
                // startdate: moment('2020-10-16 08:00:', 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm:ss'),
                // enddate: moment('2020-10-16 17:00:', 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm:ss'),
                startdate: moment('08:00:', 'HH:mm').format('YYYY-MM-DD HH:mm:ss'),
                enddate: moment('17:00:', 'HH:mm').format('YYYY-MM-DD HH:mm:ss'),
                // startdate: moment('08:00:', 'HH:mm').subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
                // enddate: moment('21:00', 'HH:mm').subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss'),
                item: '',
                refnum: '',
                w_c: localStorage.getItem("w_c")
              }
            }
            validate={values => {
              const warnings = {};
              if (!values.w_c) { warnings.w_c = 'แนะนำให้ใส่'; }
              // return { errors: {}, warnings: {} };
              return warnings;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue
            }) => (
              <form onSubmit={handleSubmit}>
                {/* <Button color="primary" variant="contained" onClick={() => { handleOpenModalItem(123) }}>1234</Button> */}
                <ModalManagement
                  modalDetail={<ItemDetail itemModal={itemModal} />}
                  open={openModalItem}
                  onClose={handleCloseModalItem}
                />

                <Modal open={openModalReasonMaster} onClose={handleCloseModalReasonMaster} >
                  <ReasonStopMachineTableEditable
                    setDataFormingRecord_description={setDataFormingRecord_description}
                    dataFormingRecord_description={dataFormingRecord_description}
                  />
                </Modal>
                <Modal open={openModalReasonMasterDetail} onClose={handleCloseModalReasonMasterDetail} >
                  <ReasonStopMachineDetailTableEditable
                    setDataFormingRecord_description_detail={setDataFormingRecord_description_detail}
                    dataFormingRecord_description_detail={dataFormingRecord_description_detail}
                  />
                </Modal>
                <Modal open={openModalAddNewReason} onClose={handleCloseModalAddNewReason} >
                  <ReasonAddNewReason
                    handleCloseModalAddNewReason={handleCloseModalAddNewReason}
                    w_c={values.w_c}
                    dataFormingRecord={dataFormingRecord}
                    setDataFormingRecord={setDataFormingRecord}

                  />
                </Modal>
                <Modal open={openModal} onClose={handleCloseModal} >
                  {/* {JSON.stringify(values)} */}
                  <Grid container spacing={0} className={classes.paperModal}>
                    <Grid item xs={2} >
                      {/* {values.startdate}
                      {values.enddate} */}
                      <FormLabel component="legend">ช่วงเวลางาน</FormLabel>
                      <br></br>
                      <FormLabel component="legend">{values.startdate}</FormLabel>
                      <FormLabel component="legend">{values.enddate}</FormLabel>
                      <br></br>



                      <FormControl component="fieldset">
                        <FormLabel component="legend">จำนวนชั่วโมงงาน ({RadioOTRate})</FormLabel>
                        <RadioGroup aria-label="RadioOT" name="RadioOT" value={RadioOT} onChange={handleChangeRadioOT}>
                          <FormControlLabel value="1" control={<Radio />} label="ไม่พักพักเที่ยง(+1)" />
                          <FormControlLabel value="0.5" control={<Radio />} label="ไม่พักเย็น(+0.5)" />
                          <FormControlLabel value="0" control={<Radio />} label="ตามเวลาปกติ" />
                          {/* <FormControlLabel value="other" control={<Radio />} label="Other" />
                          <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" /> */}
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={5} >
                      <ReasonRecordStopMachineTableEditable
                        dataFormingRecord={dataFormingRecord}
                        setDataFormingRecord={setDataFormingRecord}
                        w_c={values.w_c}
                        selectFormingRecordReason={selectFormingRecordReason}
                        values={values}
                        setDataFormingRecord_description={setDataFormingRecord_description}
                        setDataFormingRecord_description_detail={setDataFormingRecord_description_detail}
                        setOpenModalReasonMaster={setOpenModalReasonMaster}
                        setOpenModalReasonMasterDetail={setOpenModalReasonMasterDetail}
                        setOpenModalAddNewReason={setOpenModalAddNewReason}
                      />
                    </Grid>
                    <Grid item xs={5} >
                      <ReasonRecordStopMachineMetersTableEditable
                        w_c={values.w_c}
                        values={values}
                        setOpenModalReasonMaster={setOpenModalReasonMaster}
                        dataFormingRecord_reason_meter={dataFormingRecord_reason_meter}
                        setDataFormingRecord_reason_meter={setDataFormingRecord_reason_meter}
                      />
                    </Grid>
                  </Grid>
                </Modal>
                <Grid container spacing={2}>
                  <Grid item lg={12} >
                    <Grid container spacing={2}>
                      <Grid item lg={4} >
                        <Grid container spacing={3}>
                          <Grid item lg={6} >
                            <DateTimePicker
                              label="วันเวลาเริ่ม"
                              name={"enddate"}
                              value={values.startdate}
                              onBlur={handleBlur}
                              onChange={e => setFieldValue('startdate', moment(e).format('YYYY-MM-DD HH:mm:ss'))}
                            />
                          </Grid>
                          <Grid item lg={6}>
                            <Grid container spacing={0}>
                              <Grid item lg={11}>
                                <DateTimePicker
                                  label="วันเวลาสิ้นสุด"
                                  name={"enddate"}
                                  value={values.enddate}
                                  onBlur={handleBlur}
                                  onChange={e => { setFieldValue('enddate', moment(e).format('YYYY-MM-DD HH:mm:ss')) }}
                                />
                              </Grid>
                              <Grid item lg={1}>
                                <IconButton
                                  aria-label="more"
                                  aria-controls="long-menu"
                                  aria-haspopup="true"
                                  onClick={handleClick}
                                // onMouseOver={handleClick}
                                >
                                  <MoreVertIcon />
                                </IconButton>
                                <ShiftSelect
                                  anchorEl={anchorEl}
                                  open={Boolean(anchorEl)}
                                  onClose={handleClose}
                                  setFieldValue={setFieldValue}
                                  setAnchorEl={setAnchorEl}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item lg={8} >
                        <Grid container spacing={3}>
                          <Grid item lg={4}>
                            <CTextField
                              error={Boolean(touched.item && errors.item)}
                              helperText={touched.item && errors.item}
                              label="item"
                              name="item"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.item}
                              Autocomplete={false}
                            />
                          </Grid>
                          <Grid item lg={2}>
                            <CTextField
                              error={Boolean(touched.refnum && errors.refnum)}
                              helperText={touched.refnum && errors.refnum}
                              label="ref num"
                              name="refnum"
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.refnum}
                            />
                          </Grid>
                          <Grid item lg={4}>
                            <CAutocomplete
                              onBlur={handleBlur}
                              name="w_c"
                              value={values.w_c}
                              setFieldValue={setFieldValue}
                            />
                          </Grid>
                          <Grid item lg={2}>
                            <CButton label={"Search"} onClick={() => { SearchFn("ajax2", values, "") }} />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item lg={2}>
                    <CButton label={"รายงานการมัดท่อ"} onClick={() => { SearchFn("ajax2", values, "Packing", "Packing") }} />
                    <CButton label={"ใบตรวจสอบการมัดท่อ"} onClick={() => { SearchFn("ajax2", values, "Packing", "CheckPacking") }} />
                  </Grid>
                  <Grid item lg={2}>
                    <CButton label={"รายงานการผลิต"} onClick={() => { SearchFn("ajax2", values, "Production", "Production") }} />
                    <CButton label={"ใบตรวจสอบการผลิต"} onClick={() => { SearchFn("ajax2", values, "Production", "CheckProduction") }} disabled={false} />
                  </Grid>
                  <Grid item lg={2}>
                    <CButton label={"รายงาน Forming"} onClick={() => { SearchFn("ajax2", values, "Forming", "Forming") }} disabled={false} />
                    <CButton label={"บันทึกผลิต Forming"} onClick={() => { handleOpenModal(values) }} disabled={false} />
                  </Grid>
                  <Grid item lg={2}>
                    <CButton label={"ใบขนย้ายระหว่างสาขา"} onClick={() => { SearchFn("MovingProductReport", values, "", "MovingProductReport") }} disabled={false} />
                    <CButton label={"รายงานพิมพ์ตรา"} onClick={() => { SearchFn("StampingReport", values, "Stamping", "Stamping") }} disabled={false} />
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ProductionDailyReportTable
                isLoading={isLoadingData}
                data={data}
                setdata={setdata}
                handleOpenModalItem={handleOpenModalItem}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductionDailyReport;