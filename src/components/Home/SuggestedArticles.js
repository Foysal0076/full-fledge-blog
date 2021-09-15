import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import PickedForYouArticleCard from '../Shared/Cards/PickedForYouArticleCard/PickedForYouArticleCard'

const SuggestedArticles = () => {
    return (

        <Grid container spacing={3}>
            <Grid item>
                <h2>For you</h2>
            </Grid>
            <Paper className='p-2'>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <PickedForYouArticleCard />
                    </Grid>
                    <Grid item xs={12}>
                        <PickedForYouArticleCard />
                    </Grid>
                    <Grid item xs={12}>
                        <PickedForYouArticleCard />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default SuggestedArticles