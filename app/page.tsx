import Link from 'next/link'
import { format } from 'date-fns'

import { getAllPosts } from '../utils/blog'
import Container from '@/components/container'
import Header from '@/components/header'

export default function Home() {
  const posts = getAllPosts(['slug', 'title', 'date', 'language'])

  return (
    <Container>
      <div className="py-4 md:py-8">
        <Header />
        <main className="w-full max-w-prose py-6">
          {posts.map((post) => (
            <article key={post.slug} className="py-3 flex gap-4 items-center">
              <time
                dateTime={post.date}
                className="text-xs md:text-sm text-black font-light text-left"
              >
                {format(new Date(post.date), 'MMM dd, yyyy')}
              </time>
              <h2 className="font-bold text-[#0c00ff]">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
            </article>
          ))}
        </main>
      </div>
    </Container>
  )
}
