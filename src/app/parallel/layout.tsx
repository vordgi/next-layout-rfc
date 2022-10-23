const Layout = ({posts, faq}: any) => {
  return (
    <div style={{backgroundColor: '#F3E5F5', padding: 8}}>
      <main>
        <h2>
          Dynamic layout example (<code>app/parallel/layout.tsx</code>)
        </h2>
        {posts}
        {faq}
      </main>
    </div>
  )
}

export default Layout
