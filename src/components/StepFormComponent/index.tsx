import Button from '@material-ui/core/Button';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Stepper from '@material-ui/core/Stepper';
import {
  createStyles,
  makeStyles,
  Theme
} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import PaymentForm from '../PaymentForm';
import SubscribeForm from '../SubscribeForm';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
		},
		button: {
			marginRight: theme.spacing(1),
		},
		instructions: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1),
		},
	})
);

function getSteps() {
	return ['Cadastro', 'Pagamento'];
}

function getStepContent(step: number) {
	switch (step) {
		case 0:
			return <SubscribeForm />;
		case 1:
			return <PaymentForm />;
		default:
			return 'Unknown step';
	}
}

const StepFormComponent = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

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
			<form noValidate autoComplete="off">
				<Stepper
					alternativeLabel
					activeStep={activeStep}
					style={{ background: '#fafafa', marginBottom:20 }}
				>
					{steps.map((label) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>

				<div>
						<div>
							<Typography className={classes.instructions}>
								{getStepContent(activeStep)}
							</Typography>
							<div style={{marginTop:50}}>
								<Button
									disabled={activeStep === 0}
									onClick={handleBack}
									className={classes.button}
								>
									Voltar
								</Button>
								<Button
									variant="contained"
									color="primary"
									onClick={handleNext}
									className={classes.button}
                  style={{display: activeStep === steps.length - 1 ? 'none' : ''}}
								>
									{activeStep === steps.length - 1 ? 'Assinar' : 'Avançar'}
								</Button>
							</div>
						</div>
					
				</div>
			</form>
		</div>
	);
};

export default StepFormComponent;
