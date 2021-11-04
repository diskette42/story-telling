import './style/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
function App({ Component, pageProps }) {
  
    return(
        <>
          <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
         
                {/* <link href="https://fonts.googleapis.com/css2?family=Rampart+One&display=swap" rel="stylesheet"/> */}
          </Head>
         <Component {...pageProps} />
        </>)
}

export default App
