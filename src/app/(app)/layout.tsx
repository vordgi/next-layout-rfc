const Layout = ({ children }: any) => {
    return (
        <div style={{backgroundColor: '#B9F6CA', padding: 8}}>
            <h2>
                App group (<code>app/(app)/layout.tsx</code>)
            </h2>
            {children}
        </div>
    )
}

export default Layout;
