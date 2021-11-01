import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '40px 10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '550px',
    
    borderRadius:10,
  },
  [theme.breakpoints.down('sm')]:{
  mainContainer:{
    flexDirection:"column-reverse"
  }
}
}));
