export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-prose px-4 md:px-0">{children}</div>
}
