import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Directions from './components/Directions';
import Advantages from './components/Advantages';
import GlobalPresence from './components/GlobalPresence';
import Footer from './components/Footer';
import './App.css';

// Ленивая загрузка второстепенных страниц — ускоряет первый запуск сайта
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const ProductPage = lazy(() => import('./pages/ProductPage'));

// Компонент, который при открытии новой страницы всегда кидает в самый верх
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Directions />
      <Advantages />
      <GlobalPresence />
    </>
  );
}

export default function App() {
  return (
    // ВОТ ЗДЕСЬ ДОБАВЛЕН basename
    <BrowserRouter basename="/my-security-site">
      <ScrollToTop />
      <div className="app-container">
        <Header />
        <main>
          <Suspense fallback={<div style={{ minHeight: '100vh', background: '#f5f5f5' }} />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<CatalogPage />} />
              <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}