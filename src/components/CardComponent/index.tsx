import { Grid, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { CSSProperties } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			minWidth: 275,
		},
		bullet: {
			display: 'inline-block',
			margin: '0 2px',
			transform: 'scale(0.8)',
		},
		title: {
			fontSize: 14,
			color: theme.palette.text.primary,
		},
		pos: {
			marginBottom: 12,
		},
	})
);

interface CardComponentProps {
	title?: string;
	children?: JSX.Element | JSX.Element[];
	style?: CSSProperties;
	[x: string]: any;
}

const CardComponent = (props: CardComponentProps) => {
	const classes = useStyles();
	return (
		<Grid item {...props}>
			<Card
				className={classes.root}
				variant="outlined"
				style={{ borderRadius: 10 }}
			>
				<CardContent>
					<Typography variant="h5" component="h1" color="textPrimary">
						{props.title}
					</Typography>
					{props.children}
				</CardContent>
			</Card>
		</Grid>
	);
};

export default CardComponent;
