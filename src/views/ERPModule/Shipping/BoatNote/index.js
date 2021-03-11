import React, { useEffect } from 'react';
import {
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';

import CardBoatHeader from './CardBoatHeader';
import CardBoatLine from './CardBoatLine';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        minHeight: '100%',
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(2)
    }
}));

const BoatNote = () => {
    const classes = useStyles();

    useEffect(() => {

        var isMobile = window.orientation > -1;

        if (isMobile == true) {
            setTimeout(() => {
                document.documentElement.webkitRequestFullScreen();
            }, 5000);
        }
    }, [])


    return (
        <Page
            className={classes.root}
            title="Dashboard"
        >

            <Container maxWidth={false}>
                <Grid item lg={12}>
                    <Grid container spacing={2}>
                        <Grid item sm={6} xl={3} xs={12} lg={3} >
                            <CardBoatHeader />
                        </Grid>
                        <Grid item sm={9} xl={9} xs={9} lg={9}>
                            <CardBoatLine />
                        </Grid>
                        
                        {/* <Grid item xs={12}>
                <CardNext />
              </Grid> */}
                    </Grid>
                </Grid>

            </Container>
        </Page>
    );
};

export default BoatNote;
