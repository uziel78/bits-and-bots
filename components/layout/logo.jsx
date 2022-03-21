import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.scss";

function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>
          <Image
            src="/bits&bots_light.png"
            width={160}
            height={60}
            alt="image showing the bits & bots loge"
          />
        </a>
      </Link>
    </div>
  );
}

export default Logo;
