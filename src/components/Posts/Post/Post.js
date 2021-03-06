import React from 'react'
import useStyles from './style.js'

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from '@material-ui/core/'
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import { deletePost } from '../../../actions/posts'
import style from './style.js'

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Card className={classes.card}>
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>

        <Typography style={{ color: 'black' }}>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>

      <div className={classes.overlay2}>
        <Button size='small' onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>

      <Typography
        className={classes.title}
        gutterBottom
        variant='h5'
        component='h2'
      >
        {post.title}
      </Typography>
      {/* <div className={classes.overlay3}>
        <Button size='small' onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div> */}

      {/* <Typography
        className={classes.fruits}
        gutterBottom
        variant='h6'
        component='h3'
      >
        {post.fruits}
      </Typography> */}

      <CardContent>
        <img src={post.selectedFile} height={100} width={100} />
        <Typography variant='body2' color='textSecondary' component='p'>
          {post.message}
        </Typography>
      </CardContent>
      <CardContent>
        {/* <img src={post.selectedFile} height={100} width={100} /> */}
        <Typography
          style={{ color: 'black' }}
          variant='body2'
          color='black'
          component='p'
          height={10}
          width={10}
        >
          {post.fruits}
        </Typography>
      </CardContent>

      <Grid container>
        <Grid item xs={4}>
          <div className={classes.details}>
            <Typography variant='body2' color='textSecondary' component='h2'>
              {post.tags?.map((tag) => `#${tag} `)}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <CardActions className={classes.cardActions}>
            <Button
              size='small'
              color='primary'
              onClick={() => dispatch(deletePost(post._id))}
            >
              <DeleteIcon fontSize='small' /> Delete
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

export default Post
