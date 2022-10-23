const Layout = ({ children }: any) => {
    return (
        <div style={{backgroundColor: '#CCFF90', padding: 8}}>
            <h3>
                Dashboard page layout (<code>app/(app)/dashboard/layout.tsx</code>)
            </h3>
            {children}
        </div>
    )
}

export default Layout;
