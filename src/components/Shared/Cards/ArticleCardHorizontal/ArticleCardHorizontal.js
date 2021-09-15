import { Box, Grid, Paper } from '@material-ui/core'
import React from 'react'
import styles from './ArticleCardHorizontal.module.css'
import Image from 'next/image'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import BookmarkIcon from '@material-ui/icons/Bookmark'

const ArticleCardHorizontal = ({ slug, category, title, publishedDate }) => {
    return (
        <Paper elevation={0}>
            <Grid container direction='row' spacing={1}>
                <Grid item className={styles.cardImageContainer}>
                    <div className={styles.cardImage} >
                        <div className={styles.overlay}></div>
                        <Image
                            src='/images/article-image1.jpg'
                            layout='fill'
                            quality={25}
                            alt=''
                            className='image'
                        />
                    </div>
                </Grid>
                <Grid item container className={styles.content} spacing={0} >
                    <Grid container direction='column' justifyContent='space-between'>
                        <Grid item container justifyContent='space-between' style={{ height: '100%' }}>
                            <Grid item xs={12}>
                                <Grid container justifyContent='space-between' alignItems='center' className={styles.topLine}>
                                    <span className={styles.categoryName}>World</span>
                                    <BookmarkBorderIcon className={styles.icon} />
                                </Grid>
                                <span className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, soluta.</span>
                            </Grid>

                            <Box display='flex' component='span' color='text.secondary' className={styles.subtitle}>
                                10 September, 2021
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ArticleCardHorizontal