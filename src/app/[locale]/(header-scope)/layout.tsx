import Header from '@/components/Header';
import { PropsWithChildren } from 'react';

export default function HeaderLayout({ children }: PropsWithChildren) {
  return (
    <div className="">
      <Header />
      {children}
    </div>
  );
}
