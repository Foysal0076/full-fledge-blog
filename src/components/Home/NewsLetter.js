import { Grid, Paper, TextField,FilledInput  } from '@material-ui/core'
import React from 'react'
import styles from './NewsLetter.module.css'
import Image from 'next/image'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: '#2c3032',
        width: '100%'
    },
    input: {
        color: 'white',
    }
}))

const NewsLetter = () => {
    const classes = useStyles()
    return (
        <Paper className='p-2' className={styles.newsLetterContainer}>
            {/* <div className={styles.newsContainer}> */}
            <div className={styles.overlay}></div>
            <div className={styles.backgroundImageContainer}>
                <Image
                    src='/images/newsletter1.jpg'
                    layout='fill'
                    quality={25}
                    alt=''
                    className='image br-1'
                />
            </div>
            <Grid container direction='column' justifyContent='center' alignItems='center' className={styles.newsLetterForm}>

                <FilledInput
                    // error
                    id="filled-error-helper-text"
                    // label="Error"
                    defaultValue="Hello World"
                    // helperText="Incorrect entry."
                    variant="filled"
                    classes={{ root: classes.root, input:classes.input }}
                />
                <div className={styles.title}>Title</div>
                <div className={styles.subtitle}>Subtitle</div>
            </Grid>
            {/* </div> */}
        </Paper>
    )
}

export default NewsLetter