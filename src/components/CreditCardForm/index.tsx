import React from 'react';
import { Grid, InputAdornment, TextField } from '@material-ui/core';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import theme from '../../themes/theme';
import { CreditCardMask, DataMMAAMask } from '../../utils/InputMask';

const CreditCardForm = () => {
	return (
		<form noValidate autoComplete="off">
			<Grid container spacing={3} style={{ marginTop: 10, marginBottom: 10 }}>
				<Grid item sm={12} xs={12}>
					<TextField
						label="Nome no cartão"
						variant="standard"
						fullWidth
						InputLabelProps={{
							style: { color: theme.palette.text.primary },
						}}
					/>
				</Grid>
				<Grid item sm={12} xs={12}>
					<TextField
						label="Número do cartão"
						variant="standard"
						fullWidth
						placeholder={'XXXX XXXX XXXX 7860'}
						InputLabelProps={{
							style: { color: theme.palette.text.primary },
						}}
						InputProps={{
							inputComponent: CreditCardMask as any,
							endAdornment: (
								<InputAdornment position="start">
									<CreditCardIcon />
								</InputAdornment>
							),
						}}
					/>
				</Grid>
				<Grid item sm={6} xs={12}>
					<TextField
						label="Validade"
						variant="standard"
						fullWidth
						InputLabelProps={{
							style: { color: theme.palette.text.primary },
						}}
						InputProps={{
							inputComponent: DataMMAAMask as any,
						}}
					/>
				</Grid>
				<Grid item sm={6} xs={12}>
					<TextField
						label="CVV"
						variant="standard"
						fullWidth
						inputProps={{ maxLength: 3 }}
						InputLabelProps={{
							style: { color: theme.palette.text.primary },
						}}
					/>
				</Grid>
			</Grid>
		</form>
	);
};

export default CreditCardForm;
