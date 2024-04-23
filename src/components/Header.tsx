import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between bg-zinc-600 px-4 py-3">
      <Link href="/" className="">
        <Image
          src="/next-white.svg"
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          className="h-full w-28"
        />
      </Link>
      <div>
        <Link href="/style-guide" className="text-secondary hover:text-primary">
          Style Guide
        </Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton showName />
        </SignedIn>
      </div>
    </header>
  );
}
