import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Contact from './components/Contact/contact'

function App() {
  return (
    <div className="App custom-fonts">
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
