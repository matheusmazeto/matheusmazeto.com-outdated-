import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import Link from 'next/link'

export default function Header() {
  return (
    <div className="grid gap-6 font-inter">
      <h1 className="text-2xl lg:text-5xl font-black">matheusmazeto.com</h1>

      <section>
        <dl>
          <dt className="font-bold text-xs mb-2 uppercase">About me</dt>
          <dd className="text-sm font-normal">
            Computer scientist • Front-end software engineer
          </dd>
        </dl>
      </section>

      <section>
        <dl>
          <dt className="font-bold text-xs mb-2 uppercase">Social Media</dt>
        </dl>
        <ul className="flex items-stretch space-x-4">
          <li>
            <Link href="https://github.com/matheusmazeto">
              <FaGithub size={24} />
            </Link>
          </li>
          <li>
            <Link href="https://twitter.com/matheusmazeto">
              <FaTwitter size={24} />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/matheusmazeto/">
              <FaLinkedin size={24} />
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}
