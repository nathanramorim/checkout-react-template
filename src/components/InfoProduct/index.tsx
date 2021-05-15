import { Grid, Typography } from '@material-ui/core';
import React  from "react";
import NumberFormat from 'react-number-format';
import { Product } from '../../models/ProductModel';

interface ProductProps {
  item: Product
}

const InfoProduct = (props: ProductProps) => {
  const {item} = props;
  return (
      <Grid container>
        <Grid item>
        <Typography variant="h5">
          {item.name}
        </Typography>
        </Grid>
        <Grid item style={{marginTop:10}}>
        <Typography variant="subtitle2" component="p">
          {item.description}
        </Typography>
        </Grid>
        <Grid item style={{marginTop:10}}>
        <Typography variant="h5" component="span">
          <NumberFormat thousandSeparator={true} displayType="text" fixedDecimalScale decimalScale={2} prefix={'R$'} value={item.value}/>
        </Typography>
        </Grid>
      </Grid>
  )
}

export default InfoProduct;