import React, { useEffect, useState } from 'react'
import useStyles from './AppStyle';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Navbar from './components/Navbar/Navbar';
import Loading from './components/Loading/Loading';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';



function App() {

const [loading, setLoading] = useState(true);  
const classes = useStyles();


// useEffect(() => {
//   setTimeout(() => {
//     setLoading(false)
//   }, 5000)
// },[])


  return (
    <BrowserRouter>
      <Container maxWidth="lg">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
      </Container>
    </BrowserRouter>
    //////////////////////
    
    
//     <div>
//     {loading==true?
//       <Loading />: 

//     <Container maxWidth="lg">    
//         <Navbar />
//         <Grow in>
//           <Container>
//             <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
//               <Grid item xs={12} sm={7}>
//                 <Posts setCurrentId={setCurrentId}/>
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <Form currentId={currentId} setCurrentId={setCurrentId}/>
//               </Grid>
//             </Grid>
//           </Container>
//         </Grow>
        
      
      
//      </Container>
// }
//       </div>
    );
}

export default App;
