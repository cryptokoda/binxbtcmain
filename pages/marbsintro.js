import Head from 'next/head';
import Link from 'next/link';
// Ensure this path is correct for your setup
      //    <audio autoPlay loop>
      //    <source src="/binxmarbsintro.mp3" type="audio/mp3" />
      //    Your browser does not support the audio element.
      //    </audio>
// Define the component function
export default function VideoPage() {
  return (
    <>
      <Head>
        <title>Binxbtc Marbs</title>
      </Head>
      
      <header>

      </header>



      <div className="video-container"><Link href="https://youtube.com/playlist?list=PLmUxNsDWQDFFFWjAbBWMIBW6ZymaOvPiY&si=TzzWLNZv1DMuOMEO" target='_blank'>
        <video autoPlay loop>
          <source src="/binxbtcmarbsintrovidcomb.mov" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </Link>
      </div>
    </>
  );
}
