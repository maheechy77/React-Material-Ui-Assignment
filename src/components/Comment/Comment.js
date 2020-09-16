import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		maxWidth: 1200,
		padding: 10,

		"& > * + *": {
			marginLeft: theme.spacing(1),
		},
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

const Comment = (props) => {
	const action = (
		<Button color="primary" size="medium">
			<strong>Username: {props.comment.name}</strong>
		</Button>
	);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Avatar
				alt={props.comment.name}
				src={props.images.webformatURL}
				className={classes.large}
			/>
			<SnackbarContent message={props.comment.body} action={action} />
		</div>
	);
};

export default Comment;
