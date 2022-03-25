import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

// ========== missing Page component that renders a 404 page ===========

const missingPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000); // push return to Home after 5 seconds
  }, []);

  return (
    <div className="not-found">
      <h1>Sorry...</h1>
      <h2>That page cannot be found. Go back!</h2>
      <p>
        <Link href="/">
          <a>Back to Homepage...</a>
        </Link>
      </p>
    </div>
  );
};

export default missingPage;
