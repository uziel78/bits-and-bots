import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.scss";

function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <Image
            src="/Bits&Bots_vector_400x80.svg"
            width={400}
            height={80}
            alt="image showing the bits & bots loge"
          />
        </a>
      </Link>
    </div>
  );
}

export default Logo;
