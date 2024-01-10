import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html>
      <Head>
      {/* <title>Francisco Anaya Portfolio Site</title> */}
				<meta name="description" content="Portfolio website using NextJs" />
				<link rel="icon" href="/favicon.ico" />
				<link
					href="http://fonts.cdnfonts.com/css/blank-river"
					rel="stylesheet"
				></link>
				<link href="http://fonts.cdnfonts.com/css/heavitas" rel="stylesheet" />
				<link
					href="http://fonts.cdnfonts.com/css/amatic-sc-2"
					rel="stylesheet"
				></link>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
					rel="stylesheet"
				></link>
				<link
					href="http://fonts.cdnfonts.com/css/avenir"
					rel="stylesheet"
				></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}