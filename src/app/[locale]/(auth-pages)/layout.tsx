import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      {children}
    </div>
  );
}
