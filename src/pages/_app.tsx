import type { AppProps } from 'next/app';

import '../styles/globals.scss';

const TestTaskApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default TestTaskApp;
