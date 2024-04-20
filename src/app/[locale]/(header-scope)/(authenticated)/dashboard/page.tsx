import { auth } from '@clerk/nextjs/server';

export default function DashboardPage() {
  const data = auth();

  return (
    <div>
      <h1>Dashboard Page</h1>
      <code>{JSON.stringify(data)}</code>
    </div>
  );
}
