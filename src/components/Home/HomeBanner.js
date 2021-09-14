import { Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import styles from './Home.module.css'
import Image from 'next/image'
const HomeBanner = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.imageContainer} >
                    <div className={styles.overlay}></div>
                    <Grid container direction='column' justifyContent='center' alignItems='center' className={styles.content}>
                        <h1 className={styles.heroTitleText}>Lorem ipsum dolor sit amet</h1>
                        <h2 className={styles.heroSubtitleText}>Lorem ipsum dolor sit amet</h2>
                        <Button variant='outlined' size='large' color='primary'>Explore</Button>
                    </Grid>
                    <Image
                        src='/images/cover1.jpg'
                        layout='fill'
                        quality={25}
                        alt=''
                        className='image'
                    />
                </div>
            </div>
        </>
    )
}

export default HomeBanner