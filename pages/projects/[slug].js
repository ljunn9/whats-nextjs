import { useRouter } from 'next/router'

export default function Project() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <main>
      <h1>Project: {slug}</h1>
      <p>This is a dynamic project page.</p>
    </main>
  )
}

