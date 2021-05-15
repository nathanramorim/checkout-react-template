import { Grid, TextField } from '@material-ui/core';
import React from 'react';
import { IEnterprise } from '../../models/EnterpriseModel';
import theme from '../../themes/theme';
import CardComponent from '../CardComponent';

const SubscribeForm = () => {
  const [state, setstate] = React.useState<IEnterprise>()

  React.useEffect(()=>{
    console.log(state)
  },[state])

  const onChange=(e: any): void => {
    const { name, value } = e.currentTarget;
    setstate({ ...state, [name]: value });
  }
	return (
		<Grid container spacing={1} style={{ marginTop: 20 }}>
			<CardComponent md  title="Dados de Cadastro">
      <Grid container spacing={3} style={{ marginTop: 10, marginBottom: 10 }}>
				<Grid item sm={4} xs={12}>
        <TextField
						label="CPF/CNPJ"
            onChange={onChange}
            value={state?.identity}
						variant="standard"
            name="identity"
						fullWidth
						InputLabelProps={{
							style: { color: theme.palette.text.primary },
						}}
					/>
				</Grid>
				<Grid item sm={8} xs={12}>
        <TextField
						label="Nome da Empresa"
						variant="standard"
            onChange={onChange}
            value={state?.name}
            name="name"
						fullWidth
						InputLabelProps={{
							style: { color: theme.palette.text.primary },
						}}
					/>
				</Grid>
        <Grid item sm={12} xs={12}>
        <TextField
						label="Nome do Responsável"
						variant="standard"
            onChange={onChange}
            value={state?.responsible}
            name="responsible"
						fullWidth
						InputLabelProps={{
							style: { color: theme.palette.text.primary },
						}}
					/>
				</Grid>
        <Grid item sm={6} xs={12}>
        <TextField
						label="Email"
						variant="standard"
            onChange={onChange}
            value={state?.email}
            name="email"
						fullWidth
						InputLabelProps={{
							style: { color: theme.palette.text.primary },
						}}
					/>
				</Grid>
        <Grid item sm={6} xs={12}>
        <TextField
						label="Telefone"
						variant="standard"
						fullWidth
						InputLabelProps={{
							style: { color: theme.palette.text.primary },
						}}
					/>
				</Grid>
			</Grid>
			</CardComponent>
		</Grid>
	);
};

export default SubscribeForm;
