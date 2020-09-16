import React, { useEffect, useState } from "react";
import Comment from "../Comment/Comment";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		minWidth: 1275,
		margin: 20,
		padding: 20,
	},

	title: {
		fontSize: 20,
	},
	pos: {
		marginBottom: 12,
	},
});

const Comments = (props) => {
	const classes = useStyles();
	const [images, setImages] = useState([]);
	useEffect(() => {
		fetch(
			`https://pixabay.com/api/?key=18331493-a37c1ef51d152f7a3364a727f&q=face&cat=people`
		)
			.then((res) => res.json())
			.then((data) => setImages(data));
	}, []);
	const random = Math.floor(Math.random() * Math.floor(5));
	return (
		<div>
			<Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography
						className={classes.title}
						color="textSecondary"
						gutterBottom
					>
						<strong>Comments</strong>
					</Typography>
				</CardContent>

				{props.comments.map((comment, index) => (
					<Comment
						key={comment.id}
						comment={comment}
						images={images.hits[index + random]}
					/>
				))}
			</Card>
		</div>
	);
};

export default Comments;
