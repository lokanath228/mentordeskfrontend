import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core'
import useStyles from './style.js'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { updatePost, createPost } from '../../actions/posts'
const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  })
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  )
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    if (post) setPostData(post)
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (currentId) {
      dispatch(updatePost(currentId, postData))

      clear()
    } else {
      dispatch(createPost(postData))
      clear()
    }
  }
  const clear = () => {
    setCurrentId(0)
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    })
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>
          <span style={{ color: 'orange' }}>
            {' '}
            {currentId ? 'Editing' : 'Creating'}{' '}
          </span>{' '}
          a student detail
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4}>
            <TextField
              name='creator'
              variant='outlined'
              label='roll no'
              fullWidth
              value={postData.creator}
              onChange={(e) =>
                setPostData({ ...postData, creator: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={4} sm={4}>
            <TextField
              name='title'
              variant='outlined'
              label='student name'
              fullWidth
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={4} sm={4}>
            <TextField
              name='tags'
              variant='outlined'
              label='batch '
              fullWidth
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              name='message'
              variant='outlined'
              label='skills'
              fullWidth
              multiline
              rows={4}
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
          </Grid>

          <Grid item>
            <div className={classes.fileInput}>
              <FileBase
                type='file'
                multiple={false}
                onDone={({ base64 }) =>
                  setPostData({ ...postData, selectedFile: base64 })
                }
              />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={6}></Grid>
          <Grid item xs={2} sm={2}></Grid>
          <Grid item xs={2} sm={2}>
            <Button
              className={classes.buttonSubmit}
              variant='contained'
              color='primary'
              size='large'
              type='submit'
              fullWidth
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              onClick={clear}
              fullWidth
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default Form
