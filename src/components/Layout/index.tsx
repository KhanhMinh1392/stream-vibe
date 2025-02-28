import { PropsWithChildren } from 'react';
import Header from '../Header';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <main>
      <Header />
      <div>{children}</div>
    </main>
  );
}
