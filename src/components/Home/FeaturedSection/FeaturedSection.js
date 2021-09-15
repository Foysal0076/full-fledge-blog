import { Container, Grid, Paper } from '@material-ui/core'
import React from 'react'
import EditorsPick from './EditorsPick'
import News from './News'

const FeaturedSection = () => {
    return (
        <Container>
            <Paper elevation={0} style={{padding:'4rem 4rem 4rem 4rem'}}>
                <Grid container justifyContent='center' spacing={4}>
                    <Grid item xs={12} md={6} lg={7} style={{height:'100% !important'}}>
                        <News />
                    </Grid>
                    <Grid item xs={12} md={6} lg={5} style={{height:'100%'}}>
                        <EditorsPick />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default FeaturedSection