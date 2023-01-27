import { Header } from "components/Header";
import { Main } from "components/Main";

import styles from "./layout.module.css";

function Layout() {
  return (
    <div className={styles.layout}>
      <Header />
      <Main />
    </div>
  );
}

export default Layout;
