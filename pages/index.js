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
      <section className={utilStyles.headingMd} align="middle">
        <p>Hello I'm Binx, I'm a dude playing a dude <br />disguised as another dude!</p>
      </section>
      <section align="middle" className={`${utilStyles.headingMd} ${utilStyles.padding2px}`}>
        <h2 className={utilStyles.headingLg}><Link href='blog'>Blogg'in Blog</Link></h2>

      </section>
    </Layout>
  );
}