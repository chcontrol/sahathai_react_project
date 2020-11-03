const stepCase = [

    {
        Case: 'บันทึก/แก้ไขเปลี่ยนแปลง PR',
        detail:
            [
                {
                    title: 'การบันทึก PR',
                    link: '',
                    value: 'การบันทึก PR'
                },
                {
                    title: 'ตรวจสอบข้อมูล PR / ราคา',
                    link: '',
                    value: 'ตรวจสอบข้อมูล PR / ราคา'
                },
                {
                    title: 'Due Date',
                    link: '',
                    value: 'Due Date'
                },
                {
                    title: 'Qty',
                    link: '',
                    value: 'Qty'
                },
                {
                    title: 'การอนุมัติ PR',
                    link: '',
                    value: 'การอนุมัติ PR'
                },
            ],
    },
    {
        Case: 'Convert PR to PO',
        detail:
            [
                {
                    title: 'Convert To PO ในประเทศ ',
                    link: '',
                    value: 'Convert To PO ในประเทศ '
                },
                {
                    title: 'Convert To PO ต่างประเทศ',
                    link: '',
                    value: 'Convert To PO ต่างประเทศ'
                },
            ],
    },
    {
        Case: 'พิมพ์ใบ PO',
        detail:
            [
                {
                    title: 'ตรวจสอบรูปแบบและข้อมูล PO',
                    link: '',
                    value: 'Convert To PO ในประเทศ '
                },

            ],
    },
    {
        Case: 'การแก้ไขเปลี่ยนแปลง PO',
        detail:
            [
                {
                    title: 'การแก้ไข Due',
                    link: '',
                    value: 'ยกเลิก PO'
                },
                {
                    title: 'การแก้ไขราคา',
                    link: '',
                    value: ''
                },
                {
                    title: 'ยกเลิก PO',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'การรับสินค้า',
        detail:
            [
                {
                    title: 'Load Weight List',
                    link: '',
                    value: ''
                },
                {
                    title: 'ทำ GRN',
                    link: '',
                    value: ''
                },
                {
                    title: 'Scan GRN & PO จาก GRN Report / Print Barcode',
                    link: '',
                    value: ''
                },
                {
                    title: 'Receipt Tag',
                    link: '',
                    value: ''
                },
                {
                    title: 'ทำ PO Receiving',
                    link: '',
                    value: ''
                },
                {
                    title: 'Approve GRN',
                    link: '',
                    value: ''
                },
                {
                    title: 'ทำ GRN  ตรวจสอบ Rate ',
                    link: '',
                    value: ''
                },
                {
                    title: 'ระบุค่า Landed Cost',
                    link: '',
                    value: ''
                },
                {
                    title: 'Allocate Landed Cost  เข้า PO',
                    link: '',
                    value: ''
                },
                {
                    title: 'Load Weight List',
                    link: '',
                    value: ''
                },
                {
                    title: 'Scan GRN & PO จาก GRN Report / Print Barcode',
                    link: '',
                    value: ''
                },
                {
                    title: 'Receipt Tag',
                    link: '',
                    value: ''
                },
                {
                    title: 'ทำ PO Receiving',
                    link: '',
                    value: ''
                },
                {
                    title: 'Approve GRN',
                    link: '',
                    value: ''
                },
                {
                    title: '(ในกรณีที่ส่งเกิน PO )Add  PO Line  Material Cost = 0',
                    link: '',
                    value: ''
                },
                {
                    title: '(ในกรณีที่ส่งเกิน PO ) ทำ PO Receiving + GRN',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'ตรวจสอบรายงานการเคลื่อนไหวสินค้าประจำวัน1',
        detail:
            [
                {
                    title: 'Material Transaction Report',
                    link: '',
                    value: ''
                },
                {
                    title: 'Inventory Balance Report',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'ตรวจสอบยอดสินค้าคงเหลือ1',
        detail:
            [
                {
                    title: 'Item Stockroom Location',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'ตรวจสอบเอกสารและส่งใบรับสินค้าให้บัญชี',
        detail:
            [
                {
                    title: 'ส่งเอกสาร Invoice และใบรับ GRN ให้กับบัญชี',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'การโอนวัตถุดิบ',
        detail:
            [
                {
                    title: '1 โอนกรณีที่ย้ายสินค้าและคนดูแล Location ต่างหน่วยงาน \nเปิด Transfer Order',
                    link: '',
                    value: ''
                },
                {
                    title: 'Quantity Move',
                    link: '',
                    value: ''
                },
                {
                    title: 'ทำ Transfer Order Ship',
                    link: '',
                    value: ''
                },
                {
                    title: 'พิมพ์ใบ Transfer Order Ship Pick List',
                    link: '',
                    value: ''
                },
                {
                    title: 'ทำ Transfer Order Receive',
                    link: '',
                    value: ''
                },
                {
                    title: '2 โอนในกรณีที่หน่วยงานที่ดูแลเป็นหน่วยงานเดียวกัน \n Quantity Move',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'ตรวจสอบรายงานการเคลื่อนไหวสินค้าประจำวัน2',
        detail:
            [
                {
                    title: 'Material Transaction Report',
                    link: '',
                    value: ''
                },
                {
                    title: 'Inventory Balance Report',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'ตรวจสอบยอดสินค้าคงเหลือ2',
        detail:
            [
                {
                    title: 'Item Stockroom Location',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'การทำ Job Receipt - Finish Goods',
        detail:
            [
                {
                    title: 'ทำ Job Receipt ',
                    link: '',
                    value: ''
                },
                {
                    title: 'ตรวจสอบความถูกต้อง',
                    link: '',
                    value: ''
                },
                {
                    title: 'ยอด Stock',
                    link: '',
                    value: ''
                },
                {
                    title: 'ยอดที่ Job Order',
                    link: '',
                    value: ''
                },
                {
                    title: 'Print Tag Barcode',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'บันทึก/แก้ไขเปลี่ยนแปลง Customer Order',
        detail:
            [
                {
                    title: 'การบันทึก Customer Order (Regular / Blanket)',
                    link: '',
                    value: ''
                },
                {
                    title: 'การแก้ไข Customer Order (Regular / Blanket)',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'Generate DO ดึงรายการ Customer Order มา Gen สร้าง DO',
        detail:
            [
                {
                    title: 'ทำการ Gen DO From CO',
                    link: '',
                    value: ''
                },
                {
                    title: 'preship DO',
                    link: '',
                    value: ''
                },
                {
                    title: 'ออกใบส่งสินค้า',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'Order Shipping',
        detail:
            [
                {
                    title: 'ทำการตัด Stock (Order Shipping) Barcode',
                    link: '',
                    value: ''
                },
                {
                    title: 'ตรวจสอบความถูกต้อง',
                    link: '',
                    value: ''
                },
                {
                    title: 'ยอด Stock',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'รายงาน Pre Invoice',
        detail:
            [
                {
                    title: 'ออกรายงาน Pre Invoice ก่อนออก Invoice จริง (Export)',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'Order Invoicing',
        detail:
            [
                {
                    title: 'ทำ Consolidated Invoice Generation',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'ซื้อมาขายไป',
        detail:
            [
                {
                    title: 'การบันทึก PR',
                    link: '',
                    value: ''
                },
                {
                    title: 'การอนุมัติ PR',
                    link: '',
                    value: ''
                },
                {
                    title: 'Convert To PO',
                    link: '',
                    value: ''
                },
                {
                    title: 'ตรวจสอบข้อมูล PO',
                    link: '',
                    value: ''
                },
                {
                    title: 'ทำ PO Receiving',
                    link: '',
                    value: ''
                },
                {
                    title: 'การบันทึก Customer Order',
                    link: '',
                    value: ''
                },
                {
                    title: 'ทำการ Gen DO From CO',
                    link: '',
                    value: ''
                },
                {
                    title: 'ออกใบส่งสินค้า',
                    link: '',
                    value: ''
                },
                {
                    title: 'ทำการตัด Stock (Order Shipping) Barcode',
                    link: '',
                    value: ''
                },
                {
                    title: 'ทำ Consolidated Invoice Generation',
                    link: '',
                    value: ''
                },
                {
                    title: 'พิมพ์ใบ Invoice',
                    link: '',
                    value: ''
                },
            ],
    },
    {
        Case: 'ตรวจสอบรายงานการเคลื่อนไหวสินค้าประจำวัน3',
        detail:
            [
                {
                    title: 'Material Transaction Report',
                    link: '',
                    value: ''
                },
                {
                    title: 'Inventory Balance Report',
                    link: '',
                    value: ''
                },
            ]
    },
    {
        Case: 'ตรวจสอบยอดสินค้าคงเหลือ3',
        detail:
            [
                {
                    title: 'Item Stockroom Location',
                    link: '',
                    value: ''
                },
            ],
    },
]

export default stepCase;
