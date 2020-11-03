import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SubStepList from './SubStepList';
import stepCase from './stepCase'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },
}));





function getStepContent(step) {
    switch (step) {
        case 0: return <SubStepList stepCase={stepCase[step]} />;
        case 1: return <SubStepList stepCase={stepCase[step]} />;
        case 2: return <SubStepList stepCase={stepCase[step]} />;
        case 3: return <SubStepList stepCase={stepCase[step]} />;
        case 4: return <SubStepList stepCase={stepCase[step]} />;
        case 5: return <SubStepList stepCase={stepCase[step]} />;
        case 6: return <SubStepList stepCase={stepCase[step]} />;
        case 7: return <SubStepList stepCase={stepCase[step]} />;
        case 8: return <SubStepList stepCase={stepCase[step]} />;
        case 9: return <SubStepList stepCase={stepCase[step]} />;
        case 10: return <SubStepList stepCase={stepCase[step]} />;
        case 11: return <SubStepList stepCase={stepCase[step]} />;
        case 12: return <SubStepList stepCase={stepCase[step]} />;
        case 13: return <SubStepList stepCase={stepCase[step]} />;
        case 14: return <SubStepList stepCase={stepCase[step]} />;
        case 15: return <SubStepList stepCase={stepCase[step]} />;
        case 16: return <SubStepList stepCase={stepCase[step]} />;
        case 17: return <SubStepList stepCase={stepCase[step]} />;
        case 18: return <SubStepList stepCase={stepCase[step]} />;
        case 19: return <SubStepList stepCase={stepCase[step]} />;
        case 20: return <SubStepList stepCase={stepCase[step]} />;

        default:
            return 'Unknown step';
    }
}

export default function VerticalLinearStepper() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.root}>
            <Stepper onCLick={() => console.log('123')} activeStep={activeStep} orientation="vertical">
                {stepCase.map((label, index) => (
                    <Step key={label.Case}>
                        <StepLabel ><Button onClick={() => setActiveStep(index)}>{label.Case}</Button></StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}
                                    >Back</Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}
                                    >
                                        {activeStep === stepCase.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === stepCase.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
          </Button>
                </Paper>
            )}
        </div>
    );
}
