import React from 'react'
import styles from './News.module.css'
import Image from 'next/image'
import { Grid } from '@material-ui/core'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import BookmarkIcon from '@material-ui/icons/Bookmark'

const News = () => {
    return (
        <div className={styles.newsContainer}>
            <div className={styles.overlay}></div>
            <div className={styles.coverImageContainer}>
                <Image
                    src='/images/article-image2.jpg'
                    layout='fill'
                    quality={25}
                    alt=''
                    className='image'
                />
            </div>
            <BookmarkBorderIcon className={styles.icon} />
            <Grid container justifyContent='space-between' className={styles.articleDetails}>
                <Grid item container direction='column' >
                    <span className={styles.categoryName}>Category Name</span>
                    <span className={styles.title}>Title</span>
                    <span className={styles.subtitle}>Subtitle</span>
                </Grid>
            </Grid>
        </div>
    )
}

export default News