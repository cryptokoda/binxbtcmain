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
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd} align="middle"><div align="middle">
      <Link href="https://x.com/binxbtc" target='_blank'><img src="/xicon.png" width="40px" height="40px"></img></Link>
      </div>
      <p>Hello I'm Binx, I'm just a dude playing a dude <br />disguised as another dude!</p>
      <section align="middle" className={`${utilStyles.headingMd} ${utilStyles.padding2px} center-content`}>
      <img src="/binxbtcordqraddy.png" align="left" />
      <img src="/binxbtcbtcqraddy.png" align="left" />
      <img src="/binxbtcstxqraddy.png" />
      </section>
        <p><b>Ordinals/Runes/BRC-20:</b><br />bc1pduuf3qd32wj34kcams7ny6fmcps8qjes72n6zx4slshxfctkf8uqzwta3j</p>
        <p><b>Bitcoin:</b><br />3Q7es4rfbc3s5z4h9VCzGVu2Je9gK5Tkeh</p>
        <p><b>Stacks/STX:</b><br />SP3PSRA8PV42GEB8K70CESKHPZFG9MRB4FZANS2KA</p>
        <b>BNS:</b><br />binx.btc<br /><br />
      </section>
      <section align="middle" className={`${utilStyles.headingMd} ${utilStyles.padding2px}`}>
        <h2 className={utilStyles.headingLg}><Link href='blog'>Blogg'in Blog</Link></h2>
        <div align="middle">
        <Link href="marbsintro" target='_blank'><img src="/mrbl1.png" width="60px" height="40px"></img></Link>
        </div>
      </section>
    </Layout>
  );
}