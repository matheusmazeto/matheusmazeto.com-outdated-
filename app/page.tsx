import Link from 'next/link'
import { format } from 'date-fns'

import { getAllPosts } from '../utils/blog'

export default function Home() {
  const posts = getAllPosts(['slug', 'title', 'date', 'language'])

  return (
    <main>
      <article className="mt-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-t border-slate-200 py-4 dark:border-slate-800"
          >
            <h2 className="text-2xl font-bold dark:text-slate-100">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <div className="mt-1">
              <time dateTime={post.date} className="text-sm text-slate-400">
                {format(new Date(post.date), 'yyyy MMM dd')}
              </time>
            </div>
            <div className="mt-4">
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-500 hover:text-blue-400"
              >
                Read Post
              </Link>
            </div>
          </article>
        ))}
      </article>
    </main>
  )
}
