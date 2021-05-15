import { Typography } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import enterpriseMock from '../mock/enterprise';
import theme from '../themes/theme';
import StepFormComponent from './StepFormComponent';

const App = () => {
	
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container maxWidth="md">
					<Typography variant="h2" component="h1" style={{textAlign:"center"}}>{enterpriseMock.name}</Typography>
					<StepFormComponent />
					
				</Container>
			</ThemeProvider>
		</React.Fragment>
	);
};

export default App;
