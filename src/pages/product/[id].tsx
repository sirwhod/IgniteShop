import { useRouter } from 'next/router'

export default function Product() {
  const {
    query: { id },
  } = useRouter()

  return (
    <>
      <h1>Produto: {id}</h1>
    </>
  )
}
