import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));






/* * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

 h5 {
     text-align: left;
     margin-left: 90%;
     margin-bottom: 10px;
 }
.main-form {
    display: flex;
    height: 30vh;
    width: 100vw;
    flex-direction:column;
    align-items: flex-end;
    margin-right: 10px;
}



.main-form > input,button {
    margin-bottom: 5px;
    align-items: center;
    margin-right: 10px;
} */

