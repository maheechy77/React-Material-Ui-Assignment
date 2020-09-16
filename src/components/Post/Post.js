import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";

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
		fontSize: 32,
	},
	pos: {
		marginBottom: 12,
	},
});

const Post = (props) => {
	const classes = useStyles();

	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);

	const { postId } = useParams();
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((res) => res.json())
			.then((data) => setPost(data));
		fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
			.then((res) => res.json())
			.then((data) => setComments(data));
	}, [postId]);

	return (
		<div>
			<Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography
						variant="h5"
						component="h2"
						className={classes.title}
						color="textPrimary"
						gutterBottom
					>
						<strong>Post-Title: {post.title}</strong>
					</Typography>
					<Typography variant="body2" component="p">
						<strong>Description: {post.body}</strong>
					</Typography>
				</CardContent>
			</Card>
			<Comments key={comments.id} comments={comments} />
		</div>
	);
};

export default Post;
