const Layout = ({ children }: any) => {
    return (
        <div style={{backgroundColor: '#CCFF90', padding: 8}}>
            <h3>
                Profile page layout (<code>app/(app)/profile/layout.tsx</code>)
            </h3>
            {children}
        </div>
    )
}

export default Layout;
