'use client'

import { Merriweather } from 'next/font/google'

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'

import contentStyles from '../styles/Content.module.css'
import ExternalLink from './ExternalLink'

type Props = {
  mdxSource: MDXRemoteSerializeResult
}

const components = {
  ExternalLink,
}

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

export default function Content({ mdxSource }: Props) {
  return (
    <div className={`${contentStyles.mdx} ${merriweather.variable}`}>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  )
}
