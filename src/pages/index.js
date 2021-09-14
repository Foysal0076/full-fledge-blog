import styles from '../components/Home/Home.module.css'
import { Container, Grid, Paper } from '@material-ui/core'
import HomeBanner from '../components/Home/HomeBanner'
import FeaturedSection from '../components/Home/FeaturedSection/FeaturedSection'
import FeaturedArticles from '../components/Home/FeaturedArticles'
import ArticleCollections from '../components/Home/ArticleCollections'
import Articles from '../components/Home/Articles'
import SuggestedArticles from '../components/Home/SuggestedArticles'
import NewsLetter from '../components/Home/NewsLetter'

export default function Home() {
    return (
        <div>
            <Grid container justifyContent='center'>

                <Grid item xs={12}>
                    <HomeBanner />
                </Grid>

                <Grid item xs={12} style={{ marginTop: '-32rem', zIndex: '2' }}>
                    <FeaturedSection />
                </Grid>

                <Grid item xs={12}>
                    <FeaturedArticles />
                </Grid>

                {/* <Grid item xs={12}>
                    <ArticleCollections />
                </Grid> */}

                <Grid item xs={12}>
                    <Container >
                        <Grid container justifyContent='center' spacing={3} className='main-content-padding'>
                            <Grid item xs={12} lg={9}>
                                <Articles />
                            </Grid>
                            <Grid item container  xs={12} lg={3}>
                                <Grid item xs={12}>
                                    <SuggestedArticles />
                                </Grid>
                                <Grid item xs={12}>
                                    <NewsLetter />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Grid>

            </Grid>
        </div>
    )
}
