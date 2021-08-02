import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'

type LayoutProps = { children: React.ReactNode }

const Layout = (props: LayoutProps) => {
    return (
        <>
        <Navbar />
            {props.children}
        <Footer />
        </>
    );
}

export default Layout;
