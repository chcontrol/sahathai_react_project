import React, { useState } from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import tableIcons from '../components/table/tableIcons'
import API from '../components/API';
import moment from "moment";
import { Chip } from '@material-ui/core';


// import AssignmentIcon from '@material-ui/icons/Assignment';

const ReasonRecordStopMachineTableEditable = (props) => {
    // const [selectedRow, setSelectedRow] = useState(null);

    const [values] = useState(props.values)

    const CRUDfn_reason_meter = async (type, values) => {
        console.log("function", values)
        await API.get("RPT_JOBPACKING/data.php", {
          params: {
            load: type,
            id: values.id,
            meters_minute: values.meters_minute,
            meters_start: values.meters_start,
            meters_end: values.meters_end,
            time_save: values.time_save,
            w_c: values.w_c
          }
        });
        console.log(values)
      }



    const SearchModal_reason_meter = async (type, values, typeBtn) => {
        console.log(values)
        let param = {}
        if (typeBtn === "All") {
          param = {
            load: type,
            meters_start: '',
            meters_end: '',
            w_c: '',
          }
        }
        if (typeBtn === "AllWC") {
          param = {
            load: type,
            meters_start: '',
            meters_end: '',
            w_c: values.w_c,
          }
        }
        if (typeBtn === "FollowWC") {
          param = {
            load: type,
            meters_start: values.startdate,
            meters_end: values.enddate,
            w_c: values.w_c,
          }
        }
        const response = await API.get("RPT_JOBPACKING/data.php", {
          params: param
        });
        props.setDataFormingRecord_reason_meter(response.data)
      }

    return (
        <MaterialTable
            style={{ width: '98%', margin: '0%', overflowX: "scroll" }}
            icons={tableIcons}
            title={`บันทึกเลขมิตเตอร์ : ${values.w_c}  `}
            columns={[
                { title: 'id', field: 'id', editable: 'never' },
                { title: 'เมตร/นาที', field: 'meters_minute', type: 'numeric', width: 120 },
                { title: 'เริ่มต้น', field: 'meters_start', type: 'numeric', width: 100 },
                { title: 'สิ้นสุด', field: 'meters_end', type: 'numeric', width: 100 },
                {
                    title: 'เวลาที่บันทึก', field: 'time_save', editable: 'never',
                    initialEditValue: moment().format('YYYY-MM-DD HH:mm:ss'), width: 200,
                },
                { title: 'work center', field: 'w_c', initialEditValue: values.w_c, editable: 'never', width: 115 },
            ]}
            data={props.dataFormingRecord_reason_meter}

            options={{
                search: false,
                paging: false,
                maxBodyHeight: '65vh',
                minBodyHeight: '65vh',
                exportButton: true,
                filtering: false,
                rowStyle: rowData => ({
                    fontSize: 12,
                    padding: 0
                }
                ),
            }}

            editable={{
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            props.setDataFormingRecord_reason_meter([...props.dataFormingRecord_reason_meter, newData]);
                            CRUDfn_reason_meter("CreateForming_reason_meter", newData)
                            resolve();
                        }, 1000)
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...props.dataFormingRecord_reason_meter];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            props.setDataFormingRecord_reason_meter([...dataUpdate]);
                            console.log(dataUpdate)
                            console.log("oldData", oldData)
                            console.log("newData", newData)

                            CRUDfn_reason_meter("UpdateForming_reason_meter", newData)
                            resolve();
                        }, 1000)
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...props.dataFormingRecord_reason_meter];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            props.setDataFormingRecord_reason_meter([...dataDelete]);
                            console.log(oldData)
                            CRUDfn_reason_meter("DeleteForming_reason_meter", oldData)
                            resolve()
                        }, 1000)
                    }),
            }}

            components={{
                Toolbar: props => (
                    <div>
                        <MTableToolbar {...props} />
                        <div style={{ padding: '0px 10px' }}>
                            <Chip label="ทั้งหมด" color="primary" style={{ marginRight: 5 }} onClick={() => SearchModal_reason_meter("SelectFormingModal_reason_meter", values, "All")} />
                            <Chip label={`wc ทั้งหมด`} color="primary" style={{ marginRight: 5 }} onClick={() => SearchModal_reason_meter("SelectFormingModal_reason_meter", values, "AllWC")} />
                            <Chip label={`ตามที่กรอง`} color="primary" style={{ marginRight: 5 }} onClick={() => SearchModal_reason_meter("SelectFormingModal_reason_meter", values, "FollowWC")} />
                        </div>
                    </div>
                ),
            }}
        />
    );
};

export default ReasonRecordStopMachineTableEditable;
