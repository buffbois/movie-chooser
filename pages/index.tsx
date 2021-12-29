import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/navigation'
import Background from '../components/background'
import Footer from '../components/footer'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Movie Chooser</title>
        <meta name="description" content="Rate movies and get statistics and recommendations." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Background>

      </Background>
      <Footer />
    </>
  )
}

export default Home
