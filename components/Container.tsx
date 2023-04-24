export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-prose py-8">{children}</div>
}
