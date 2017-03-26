import Head from 'next/head'

import map from '../assets/worldHigh.svg';

const mapSVG = map();

export default () => (
  <div>
  <Head>
    <title>My page title</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <style>{`
    body, html {
      margin: 0;
      height: 100%;
    }
  `}</style>
  </Head>
    {map()}
    <style>{`
      svg {
        width: 70%;
        height: 100%;
      }
      div {
        width: 100%;
        height:100%;
      }
    `}</style>
  </div>

)
