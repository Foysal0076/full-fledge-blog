import { Container, Grid } from '@material-ui/core'
import React from 'react'
import ArticleCard from '../Shared/Cards/ArticleCard/ArticleCard'
import AddIcon from '@material-ui/icons/Add'
import styles from './Home.module.css'

const Articles = () => {
    return (
        <>
            <Grid container justifyContent='center' className=''>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <h2>Articles</h2>
                    <div className={styles.seeMoreButtonContainer}>
                        <AddIcon /> <span>See More</span>
                    </div>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4}>
                        <ArticleCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ArticleCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ArticleCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ArticleCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ArticleCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <ArticleCard />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Articles