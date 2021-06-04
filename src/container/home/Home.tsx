import './Home.css';
import HeaderComponent from './../../components/header/HeaderComponent';
import SectionPrincipal from './../../components/sectionPrincipal/SectionPrincipal';
import FooterComponent from '../../components/footer/FooterComponent';
import ContactForm from './../../components/contactForm/ContactForm';

const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <HeaderComponent />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <SectionPrincipal />
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col col-6 background">
                        <ContactForm />
                    </div>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-12">
                    <FooterComponent />
                </div>
            </div>
        </div>
    )
}

export default Home