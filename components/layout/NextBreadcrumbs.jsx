import * as React from "react";
import styles from "./NextBreadcrumbs.module.scss";

export default function NextBreadcrumbs() {
  return <Breadcrumbs styles={styles.breadcrumbs} aria-label="breadcrumb" />;
}
