import { MainHeader } from '@/components/main-header';
import './globals.css';

export const metadata = {
  title: 'Next.js Page Routing & Rendering',
  description: 'Learn how to route to different pages.',
}

const RootLayout = ({ children }) => <html lang="en">
  <body>{children}</body>
</html>;


export default RootLayout;
