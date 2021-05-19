import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
      appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      heading: {
        color: '#333',
      },
      image: {
        marginLeft: '15px',
      },
      Container: {
        backgroundColor: '#ee5522',
      },
      [theme.breakpoints.down('sm')]: {
        mainContainer: {
          flexDirection: "column-reverse",
        }
      }  
}));