import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Nav />
      <main className="mx-3 vh-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;

