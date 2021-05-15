import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardComponent from './CardComponent';
import theme from '../themes/theme';
import { Button, Grid, Typography } from '@material-ui/core';
import InfoProduct from './InfoProduct';
import CreditCardForm from './CreditCardForm';
import enterpriseMock from '../mock/enterprise';
import productsMock from '../mock/products';
import { collect } from 'collect.js';

const App = () => {
	const item = collect(productsMock).firstWhere("id", 1);
	return (
		<React.Fragment>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Container maxWidth="md">
					<Typography variant="h2" component="h1" style={{textAlign:"center"}}>{enterpriseMock.name}</Typography>
					<Grid container  spacing={1} style={{marginTop: 20}}>
              <CardComponent md title="Cartão de Crédito">
                <CreditCardForm />
              </CardComponent>
              <Grid item md>
                <CardComponent style={{marginBottom: 10}}>
									<InfoProduct item={item}/>
                </CardComponent>
                <Button variant="contained" color="primary" fullWidth> Assinar</Button>
              </Grid>
					</Grid>
				</Container>
			</ThemeProvider>
		</React.Fragment>
	);
};

export default App;
