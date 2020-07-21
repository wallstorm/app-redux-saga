import React, { useState } from 'react';
import { Container, Typography, Card, Grid, TextField, Button } from '@material-ui/core'

import { MovieIcon } from '../icons';
import styles from './style';

//Contiene history por que es descendientede una ruta
export default ({ history }) => {
    const [searchText, setSearchText] = useState('');
    const classes = styles();

    const handleSearchTextChange = event => {
        setSearchText(event.target.value);
        
    };
    
    const handleClearTextClick = event => {
        setSearchText("");
    }

    const handleSearchTextClick = event => {
        if (searchText !== "") {
            history.push(`/results?movieName=${searchText}`);
        }
        
    }

    return(
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid><Typography className={classes.title}>Bienvenido</Typography></Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon} />
                    </Grid>
                </Grid>
            </Card>
            <TextField
                value={searchText}
                placeholder="Buscar..."
                className={classes.textFieldSearch}
                onChange={handleSearchTextChange}
            />
            <Grid className={classes.buttonsContainer}>
                <Button variant="contained" onClick={handleClearTextClick}>Limpiar</Button>
                <Button variant="contained" className={classes.searchButton} color="primary" onClick={handleSearchTextClick}>Buscar</Button>
            </Grid>
        </Container>  
    )
}