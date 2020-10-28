import { SiteLayout, GlobalStyles } from '@dfds-ui/react-components'
import { useState } from 'react'
import { Bicycle, Car4, Motorcycle, Ship } from '@dfds-ui/icons/pax/'
import Passenger from '../components/Passenger'
import { AppBar, AppBarProvider } from '@dfds-ui/react-components/app-bar'
import Link from 'next/link'
import FPSStats from 'react-fps-stats'
import styles from './index.module.scss'
import AmountSelector from '../components/AmountSelector'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const Logo = ({ children }) => {
    return (
      <>
        <Link href="/">
          <a className="logo">{children}</a>
        </Link>
        <style jsx>{`
          a {
            padding-top: 14px;
          }
        `}</style>
      </>
    )
  }
  return (
    <>
      <GlobalStyles />

      <AppBarProvider>
        <AppBar logoProps={{ logoContainerProps: { as: Logo } }}></AppBar>
      </AppBarProvider>
      <div className={styles.top}>
        {/*
          animate={{ rotate: [0, -1.5, 0, 0.5,0] , transition: { loop: Infinity, duration: 10 }}}
        */}
        <Ship className={styles.ship} />

        <div className={styles.ground}></div>

        <div className={styles.adults}>
          <AnimatePresence>
            {[...Array(adults)].map((e, index) => (
              <Passenger key={index} />
            ))}
          </AnimatePresence>
        </div>

        <div className={styles.children}>
          <AnimatePresence>
            {[...Array(children)].map((e, index) => (
              <Passenger key={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className={styles.controls}>
        <AmountSelector name={'Adults'} valueUpdated={setAdults} />
        <AmountSelector name={'Children'} valueUpdated={setChildren} />
      </div>
      <div className={styles.fps}>
        <FPSStats />
      </div>
    </>
  )
}
