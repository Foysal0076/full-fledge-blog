import { Box, Grid, Paper } from '@material-ui/core'
import React from 'react'
import styles from './ArticleCard.module.css'
import Image from 'next/image'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import VisibilityIcon from '@material-ui/icons/Visibility'

const ArticleCard = () => {
    return (
        <Paper className={styles.articleCard}>
            <Grid container justifyContent='space-between' style={{ height: '100%' }}>
                <Grid item xs={12}>
                    <div className={styles.cardImageContainer} >
                        <Image
                            src='/images/article-image1.jpg'
                            layout='fill'
                            quality={25}
                            alt=''
                            className='image'
                        />
                    </div>
                    <div className={styles.content}>
                        <Grid container justifyContent='space-between' alignItems='center' className={styles.categoryAndSaveIconContainer}>
                            <span className={styles.categoryName}>World</span>
                            <BookmarkBorderIcon className={styles.icon} />
                        </Grid>
                        <span className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, soluta.</span>
                    </div>
                </Grid>
                <Grid item container direction='row' justifyContent='space-between' alignItems='center' className={styles.cardFooter}>
                    <Box display='flex' component='span' color='text.secondary' className={styles.subtitle}>
                        10 September, 2021
                    </Box>
                    <Box display='flex' alignItems='center' component='span' color='text.secondary' className={styles.subtitle}>
                       <VisibilityIcon className={styles.eyeIcon}/>25698 Views
                    </Box>
                </Grid>

            </Grid>
        </Paper>
    )
}

export default ArticleCard