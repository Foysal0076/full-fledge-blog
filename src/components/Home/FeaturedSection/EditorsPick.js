import { Grid } from '@material-ui/core'
import React from 'react'
import AssistantIcon from '@material-ui/icons/Assistant'
import styles from './EditorsPick.module.css'
import ArticleCardHorizontal from '../../Shared/Cards/ArticleCardHorizontal/ArticleCardHorizontal'

const EditorsPick = () => {
    return (
        <>
            <Grid className={styles.titleContainer}>
                <AssistantIcon fontSize='large' />
                <h2 className={`${styles.title}`} >Editors' Pick</h2>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ArticleCardHorizontal />
                </Grid>
                <Grid item xs={12}>
                    <ArticleCardHorizontal />
                </Grid>
                <Grid item xs={12}>
                    <ArticleCardHorizontal />
                </Grid>
            </Grid>
        </>

    )
}

export default EditorsPick