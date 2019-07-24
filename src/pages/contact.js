import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/bhekanik">
          @bhekanik
        </a>{' '}
        on twitter
      </p>
    </Layout>
  )
}

export default ContactPage
