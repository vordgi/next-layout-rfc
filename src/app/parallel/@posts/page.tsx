import Link from "next/link"

const Page = () => {
  return (
    <div style={{backgroundColor: '#FFE57F', padding: 8}}>
      <main>
        <h4>
          Posts parallel route (<code>app/parallel/@posts/page.tsx</code>)
        </h4>
        <Link href="/parallel/some-post/">
          Some post
        </Link>
      </main>
    </div>
  )
}

export default Page
