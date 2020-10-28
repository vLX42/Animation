import { motion } from 'framer-motion'
import { Passenger } from '@dfds-ui/icons/pax/'

const PassengerIcon = () => (
  <motion.div
    initial={{ y: '100vh' }}
    animate={{ y: 0, scale: 2, opacity: 1 }} //[2, 1.5, 3, 1.5, 2]  
    exit={{ y: '100vh', transition: { ease: 'easeInOut' } }}
  >
    <Passenger />
  </motion.div>
)
export default PassengerIcon
