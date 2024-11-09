import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function WalletConnectButton() {
  // Use useEffect to set up the event listener after component mounts
  React.useEffect(() => {
    const button = document.getElementById('connect-wallet');
    
    if (button) {
      button.addEventListener('click', () => {
        showConnect({
          appDetails: {
            name: 'Your App Name',
            icon: window.location.origin + '/your-icon.png',
          },
          onFinish: (authResponse) => {
            console.log('Wallet connected!', authResponse);
          },
          userSession: new window['@stacks/auth'].UserSession({
            appConfig: new window['@stacks/auth'].AppConfig(['store_write', 'publish_data']),
          }),
        });
      });
    }

    // Clean up the event listener when the component is unmounted
    return () => {
      if (button) {
        button.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return <button id="connect-wallet">Connect Stacks Wallet</button>;
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle} - BLOGGIN BLOG</title>
      </Head>
      <section className={utilStyles.headingMd} align="middle"><div align="middle">
      <Link href="https://x.com/binxbtc" target='_blank'><img src="/xicon.png" width="40px" height="40px"></img></Link>
      </div>
      <p>Hello I'm Binx, I'm just a dude playing a dude <br />disguised as another dude!</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding2px}`}>
        <h2 className={utilStyles.headingLg}>Blogg'in Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <div color='white'>
              <Date dateString={date} />
              </div>
              <Link href={`/posts/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </section>
      <footer><section className={utilStyles.headingLg}><Link href="/..">Home</Link></section></footer>
    </Layout>
  );
}