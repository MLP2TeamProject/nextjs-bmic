import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

//bootstrap template...........................
import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/all.css';
// import '../assets/css/flaticon.css';
import '../assets/css/themify-icons.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/slick.css';
import '../assets/css/style.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}
