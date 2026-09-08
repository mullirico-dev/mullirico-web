import FloatingHeader from './components/FloatingHeader';
import SiteFooter from './components/SiteFooter';
import Home from './pages/Home';

// One page, no tabs: the hero is the masthead and the floating header
// only materializes once the hero has scrolled past.
function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <FloatingHeader />
      <main id="main">
        <Home />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
