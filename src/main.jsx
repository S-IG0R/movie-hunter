import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HeroUIProvider } from '@heroui/react';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <HeroUIProvider className='dark text-foreground bg-background flex flex-col min-h-[100vh]'>
    <App />
  </HeroUIProvider>
  // </StrictMode>,
);
