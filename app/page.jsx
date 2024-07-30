import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={`/dashboard`} className="text-secondaryBlue underline">Click here to go to Dashboard</Link>
    </main>
  );
}
