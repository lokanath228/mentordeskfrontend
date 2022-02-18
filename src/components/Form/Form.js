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
    fruits: '',
    vegetable: '',
    meat: '',
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
      fruits: '',
      vegetable: '',
      meat: '',
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
          a PROFILE detail
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={4} sm={4}>
            <TextField
              name='creator'
              variant='outlined'
              label='FULLNAME'
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
              label=' EMAIL ID'
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
              label=' PHONE NUMBER '
              fullWidth
              value={postData.tags}
              onChange={(e) =>
                setPostData({ ...postData, tags: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              name='message'
              variant='outlined'
              label=' Job Type & prefer Location '
              fullWidth
              multiline
              rows={4}
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
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

          <Grid item xs={4} sm={4}>
            <TextField
              name='fruits'
              variant='outlined'
              label='DOB'
              fullWidth
              value={postData.fruits}
              onChange={(e) =>
                setPostData({ ...postData, fruits: e.target.value })
              }
            />
          </Grid>
          {/* <Grid item xs={4} sm={4}>
            <TextField
              name='vegetable'
              variant='outlined'
              label='PREFER LOCATION '
              fullWidth
              value={postData.vegetable}
              onChange={(e) =>
                setPostData({ ...postData, vegetable: e.target.value })
              }
            />
          </Grid> */}
          {/* <Grid item xs={12} sm={12}>
            <TextField
              name='meat'
              variant='outlined'
              label='JOB TYPE - PT/FT'
              fullWidth
              multiline
              value={postData.meat}
              onChange={(e) =>
                setPostData({ ...postData, meat: e.target.value })
              }
            />
          </Grid> */}
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={2} sm={2}></Grid>
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
              +Add/Update
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
