import React from 'react'
import { Box, Container, Grid } from '@material-ui/core'
import styles from './Home.module.css'
import ArticleCard from '../Shared/Cards/ArticleCard/ArticleCard'

const FeaturedArticles = () => {
    return (
        <Container>
            <Grid container justifyContent='center'>
                <h2 className={styles.title}>Featured Articles</h2>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ArticleCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ArticleCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ArticleCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <ArticleCard />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FeaturedArticles