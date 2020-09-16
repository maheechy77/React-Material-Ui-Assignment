import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Posts.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
	rootGrid: {
		flexGrow: 1,
	},
	root: {
		minWidth: 275,
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

const Posts = () => {
	const classes = useStyles();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => setPosts(data));
	}, []);

	return (
		<div className="posts">
			<Grid
				container
				spacing={6}
				className={classes.rootGrid}
				direction="row"
				justify="center"
				alignItems="flex-start"
			>
				{posts.map((post) => (
					<Grid key={post.id} item xs={3} sm={3}>
						<Card className={classes.root} variant="outlined">
							<CardContent>
								<Typography variant="h5" component="h2">
									<strong>Post-Title: {post.title}</strong>
								</Typography>
							</CardContent>
							<CardActions>
								<Link to={`/post/${post.id}`}>
									<Button size="medium">See More</Button>
								</Link>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</div>
	);
};

export default Posts;
