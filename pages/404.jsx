import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

// ========== missing Page component that renders a 404 page ===========

const MissingPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000); // push return to previous page after 5 seconds
  }, [router]);

  return (
    <div className="not__found">
      <h2>Sorry...</h2>
      <h3>That page cannot be found. Go back!</h3>
      <p>
        <Link href="/">
          <a>
            Back to <span>Homepage...</span>
          </a>
        </Link>
      </p>
    </div>
  );
};

export default MissingPage;
