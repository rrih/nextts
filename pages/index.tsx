import Link from 'next/link'
import Layout from '../components/Layout'
import { Title } from '../utils/style'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Title>Nextです</Title>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
