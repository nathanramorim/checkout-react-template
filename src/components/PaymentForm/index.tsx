import React from "react";
import { Button, Grid } from '@material-ui/core';
import { collect } from 'collect.js';
import productsMock from '../../mock/products';
import CardComponent from '../CardComponent';
import CreditCardForm from '../CreditCardForm';
import InfoProduct from '../InfoProduct';

const PaymentForm = () => {
  const item = collect(productsMock).firstWhere("id", 1);
  return(
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
  );
}

export default PaymentForm