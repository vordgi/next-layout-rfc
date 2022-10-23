const Layout = ({ children }: any) => {
    return (
        <div style={{backgroundColor: '#80D8FF', padding: 8}}>
            <h3>
                Product page layout (<code>app/(product)/product/layout.tsx</code>)
            </h3>
            {children}
        </div>
    )
}

export default Layout;
