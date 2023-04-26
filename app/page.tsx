import Link from 'next/link'
import { format } from 'date-fns'

import { getAllPosts } from '../utils/blog'
import Container from '@/components/Container'
import Header from '@/components/header'

export default function Home() {
  const posts = getAllPosts(['slug', 'title', 'date', 'language'])

  return (
    <Container>
      <Header />
      <main className="w-full max-w-prose py-6">
        {posts.map((post) => (
          <article key={post.slug} className="py-3 flex gap-4 items-center">
            <time
              dateTime={post.date}
              className="text-xs text-stone-500 font-light text-left"
            >
              {format(new Date(post.date), 'MMM dd, yyyy')}
            </time>
            <h2 className="font-bold text-[#0c00ff]">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
          </article>
        ))}
      </main>
    </Container>
  )
}
