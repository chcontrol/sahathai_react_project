import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Backdrop, Fade } from '@material-ui/core';



export default function ModalManagement(props) {
    // const classes = makeStyles((theme) => ({
    //     paper: {
    //         position: 'absolute',
    //         width: props.width,
    //         height: props.height,
    //         backgroundColor: theme.palette.background.paper,
    //         border: '0px solid #000',
    //         boxShadow: theme.shadows[5],
    //         padding: theme.spacing(2, 4, 3),
    //     },
    // }));
    // getModalStyle is not a pure function, we roll the style only on the first render


    return (

        <Modal
            open={props.open}
            onClose={props.onClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{
                width: '80%',
            }}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 200,
            }}
        >
            <Fade in={props.open}>
                <div style={{ transform: `translate(5%, 0%)`, marginTop: 0 }} >
                    {props.modalDetail}
                </div>
            </Fade>

            {/* <div style={{ transform: `translate(10%, 10%)`, marginTop: 80 }}>
                {props.modalDetail}
            </div> */}

        </Modal>

    );
}
