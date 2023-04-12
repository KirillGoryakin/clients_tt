import { Customers } from '@/page-components/Home/Customers';
import { LeftSide } from '@/page-components/Home/LeftSide';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <div className='flex'>
        <LeftSide />
        <Customers />
      </div>
    </>
  );
};

export default Home;
