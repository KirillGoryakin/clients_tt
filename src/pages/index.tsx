import { TextInput } from '@/components/TextInput';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <TextInput
        label='Label'
        caption='Caption'
        secret
      />
    </>
  );
};

export default Home;
