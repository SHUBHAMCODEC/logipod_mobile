import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import Middle from "@/components/common/contact/Middle";
import Office_location from "@/components/common/contact/Office_location";
import Header from "@/components/common/contact/Header";


function Contact() {
    return (
        <>
            <Navbar />
            <Header />
            <Middle />
            <Office_location />
            <Footer />
        </>
    );
}
export default Contact;