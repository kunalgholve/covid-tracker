import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core';
import styles from './Cards.module.css';
const Cards =({ data: {confirmed,recovered,deaths,lastUpdate } })=>{
   // console.log("datain:",data);
    if(!confirmed)
    {
        return 'Loading...';
    }
    console.log('ye:',confirmed.value); 
    return(
    
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondery" gutterBottom>Infected</Typography>
                        <Typography varient="h5">{confirmed.value}</Typography>
                        <Typography color="textSecondery" gutterBottom>REAL DATE</Typography>
                        <Typography color="textSecondery" gutterBottom>No.Of acive cases</Typography>
                         
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    
    )
}

export default Cards;