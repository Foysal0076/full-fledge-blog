import { Container, Grid } from '@material-ui/core'
import React from 'react'
import EditorsPick from './EditorsPick'
import News from './News'

const FeaturedSection = () => {
    return (
        <Container>
            <Grid container justifyContent='center' spacing={3}>
                <Grid item xs={12} md={7}>
                    <News />
                </Grid>
                <Grid item xs={12} md={5}>
                    <EditorsPick />
                </Grid>
            </Grid>
        </Container>
    )
}

export default FeaturedSection