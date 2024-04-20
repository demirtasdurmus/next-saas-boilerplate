import { auth } from '@clerk/nextjs/server';
import { PropsWithChildren } from 'react';

export default async function Layout({ children }: PropsWithChildren) {
  auth().protect();

  return <div>{children}</div>;
}
