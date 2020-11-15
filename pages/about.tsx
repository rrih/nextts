import Link from 'next/link'
import Layout from '../components/Layout'
import { Title } from './style'

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Title>About</Title>
    <p>aboutページ</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
