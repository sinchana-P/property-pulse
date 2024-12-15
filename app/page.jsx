// Any component that's a Page, its better to have a Page at the end.
// Each page is a component, these r actually rendered on the server by default.

import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome</h1>
      <Link
        href={{
          pathname: "/properties",
          query: { name: "test" },
        }}
      >
        Go To Properties
      </Link>
      <br />
      <Link
        href="/properties/?name=test"
      >
        Go To Properties
      </Link>
      <br />
      <Link href="/properties">Go To Properties</Link>
    </div>
  );
};

export default HomePage;
