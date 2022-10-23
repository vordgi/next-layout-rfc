const Layout = ({ children }: any) => {
    return (
        <div style={{backgroundColor: '#8C9EFF', padding: 8}}>
            <h2>
                Product Group (<code>app/(product)/layout.tsx</code>)
            </h2>
            {children}
        </div>
    )
}

export default Layout;
