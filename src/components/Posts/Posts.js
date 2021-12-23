import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core'
import { useSelector } from 'react-redux'
//import posts from './reducers/posts.js';
import Post from './Post/Post.js'

import useStyles from './style.js'

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts)

  const classes = useStyles()

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems='stretch'
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={4} sm={4} md={4}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Posts
