import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import NavBar from './NavBar';

const name = 'Ian Duran';
export const siteTitle = 'Next.js Sample Website';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className='justify-start bg-slate-50 dark:bg-slate-800 dark:text-white'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      
      </Head>

      <div className='flex flex-col tablet:flex-row-reverse '>

        <main className='p-6 mb-12 tablet:mb-auto tablet:ml-20 tablet:h-full tablet:w-full md:ml-52'>
          {children}
        </main>

        <NavBar />

      </div>

    </div>
  );
}