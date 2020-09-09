import { SiteLayout, GlobalStyles } from "@dfds-ui/react-components";
import { AppBar, AppBarProvider } from "@dfds-ui/react-components/app-bar";
import Link from "next/link";
import { motion } from "framer-motion";
import FPSStats from "@danchitnis/react-fps-stats";
import styles from "./index.module.css";

const MyComponent = () => (
  <motion.div
    className={styles.square}
    animate={{ x: [0, 100, 0, -100, 0], rotate: 360 }}
    transition={{ duration: 3, loop: Infinity, ease: "linear" }}
  />
);

export default function Home() {
  const Logo = ({ children }) => {
    return (
      <>
        {" "}
        <Link href="/">
          <a className="logo">{children}</a>
        </Link>
        <style jsx>{`
          a {
            padding-top: 14px;
          }
        `}</style>
      </>
    );
  };
  return (
    <>
      <GlobalStyles />

      <AppBarProvider>
        <AppBar logoProps={{ logoContainerProps: { as: Logo } }}></AppBar>
      </AppBarProvider>
      <SiteLayout.Grid>
        <SiteLayout.Header></SiteLayout.Header>
        <SiteLayout.Main>
          Main content
          <MyComponent />
          <MyComponent />
          <MyComponent />
          <MyComponent />
          <MyComponent />
          <MyComponent />
          <MyComponent />
          <MyComponent />
          <MyComponent />
          <MyComponent />
          <MyComponent />
          <MyComponent />
          <MyComponent />

          <div className="sticky">
            <FPSStats />
          </div>
          <style jsx>{`
            .sticky {
              position: fixed;
              top: 0;
              left: 0;
              background: black;
              width: 70px;
              height: 50px;
              padding-top: 20px;
              z-index: 5000;
            }
          `}</style>
        </SiteLayout.Main>
        <SiteLayout.Footer>Footer content</SiteLayout.Footer>
      </SiteLayout.Grid>
    </>
  );
}
