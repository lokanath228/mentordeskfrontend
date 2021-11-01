import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop:'10x'
  },
  smMargin: {
    margin: theme.spacing(4),
  },
  actionDiv: {
    marginTop:'10x',
    textAlign: 'center',
  },
}));