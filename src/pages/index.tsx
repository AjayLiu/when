import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import GoogleAnalyticsHook from '@components/GoogleAnalyticsHook'
import Intro from '@components/Intro'
import TimeCreator from '@components/TimeCreator'


const Home: React.FC = () => {

  return (
    <>
    <GoogleAnalyticsHook />
    <div className="container">
      <Head>
        <title>when?</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Description"
          content="My name is Ajay Liu and I love creating
          things!"
        /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="when?" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://when.netlify.app/" />
        <meta property="og:image" content="https://when.netlify.app/img/when.png" />
        <meta property="og:description" content="When is that in my timezone?" />

      </Head>
      <Header/>
      <main>
        <Intro/>
        <TimeCreator/>
      </main>



      <Footer />
    </div>
    </>
  )
}


export default Home;