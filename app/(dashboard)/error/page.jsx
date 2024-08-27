import Link from "next/link";

export default function ErrorPage({ error, reset }) {
  return (
    <div className="self-center text-center p-10">
      <h3>Sorry, something went wrong</h3>
      <p>
        Return to <Link href="/">Home Page</Link>
      </p>
    </div>
  );
}
