import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"

import Header from '../components/Header/Header'
import NavBar from '../components/Header/NavBar'
import Layout from '../components/Layout'
import { useEffect } from 'react'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <NavBar />
        <Header />
      </Layout>
    </div>
  );
};
export default Home;