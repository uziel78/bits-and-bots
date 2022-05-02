import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link href="/">
        <a>
          <Image
            src="/Bits&Bots_logo_affinity_400x80.svg"
            width={400}
            height={80}
            alt="image showing the bits & bots loge"
            priority
          />
        </a>
      </Link>
    </div>
  );
}

export default Logo;
