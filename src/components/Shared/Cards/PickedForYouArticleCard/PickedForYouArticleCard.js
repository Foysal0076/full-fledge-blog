import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import styles from './PickedForYouArticleCard.module.css'
import Image from 'next/image'

const PickedForYouArticleCard = () => {
    return (
        <Paper elevation={0}>
            <Grid container >
                <Grid item className={styles.cardImageContainer}>
                    <div className={styles.cardImage} >
                        <div className={styles.overlay}></div>
                        <Image
                            src='/images/article-image1.jpg'
                            layout='fill'
                            quality={25}
                            alt=''
                            className='image br-1'
                        />
                    </div>
                </Grid>
                <Grid item className={`${styles.content} p-1`}>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, autem.</h3>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default PickedForYouArticleCard