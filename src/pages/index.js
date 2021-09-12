import styles from '../components/Home/Home.module.css'
import { Grid } from '@material-ui/core'
import HomeBanner from '../components/Home/HomeBanner'
import FeaturedSection from '../components/Home/FeaturedSection/FeaturedSection'
import FeaturedArticles from '../components/Home/FeaturedArticles'
import ArticleCollections from '../components/Home/ArticleCollections'
import Articles from '../components/Home/Articles'

export default function Home() {
    return (
        <div>
            <Grid container justifyContent='center'>

                <Grid item xs={12}>
                    <HomeBanner />
                </Grid>

                <Grid item xs={12}>
                    <FeaturedSection />
                </Grid>

                <Grid item xs={12}>
                    <FeaturedArticles />
                </Grid>

                <Grid item xs={12}>
                    <ArticleCollections />
                </Grid>

                <Grid item xs={12}>
                    <Articles />
                </Grid>

            </Grid>
        </div>
    )
}
