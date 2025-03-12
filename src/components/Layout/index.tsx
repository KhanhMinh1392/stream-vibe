import { PropsWithChildren } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Banner from '../Banner';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Banner />
      <Footer />
    </main>
  );
}
