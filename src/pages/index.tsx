import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Container'
import { PageHeader } from '../components/PageHeader'
import { PageContent } from '../components/PageContent'

type HomeProps = {
  children: React.ReactNode,
}

const Home = ({ props: HomeProps }) => {
  return (
    <div className={Container()}>

      <Head>
        <title>Homepage</title>
      </Head>

      <PageHeader />
      <PageContent />


    </div>
  )
}

export default Home
