import { Outlet } from 'react-router-dom';
import './styles/AppLayout.css';
import Navbar from './navbar/Navbar';

/**
 * AppLayout
 * Root shell for all public + authenticated pages.
 * GoldNavbar floats (position: fixed) above the page content —
 * pages that want a full-bleed hero simply ignore the top offset;
 * regular pages use the .app-content class which adds the top padding.
 */
export default function AppLayout() {
  // const location = useLocation();

  // const path = location.pathname;

  // const isCollectionPage = path.startsWith('/jewelry');
  // const isProductPage = path.startsWith('/product/');

  // const isStaticPage =
  //   path === '/contact-us' ||
  //   path === '/about-us' ||
  //   path === '/policies/refund-policy' ||
  //   path === '/policies/terms-and-conditions';

  // const isKnownRoute =
  //   path === '/' ||
  //   isCollectionPage ||
  //   isProductPage ||
  //   isStaticPage;

  // const isNotFoundPage = !isKnownRoute;

  // const forceLight =
  //   isCollectionPage ||
  //   isProductPage ||
  //   isStaticPage ||
  //   isNotFoundPage; 

  return (
    <div className="app-shell">
      {/* <ScrollToTop /> */}
      {/* <GoldNavbar forceLight={forceLight} /> */}
      <Navbar />
      <main className="app-content">
        <Outlet />
      </main>
      {/* <GoldFooter /> */}
    </div>
  );
}