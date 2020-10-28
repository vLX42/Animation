import { useState } from 'react'
import { motion } from 'framer-motion'
import { Text } from '@dfds-ui/typography'
import { ChevronLeft, ChevronRight } from '@dfds-ui/icons/system/'
import styles from './AmountSelector.module.scss'

const amoutVariants = {
  hover: { scale: 1.2, originX: 0 },
}

const amountArrowVariants = {
  hover: { scale: 1.3 },
  tap: { scale: 0.9, x: '-5px' },
}

const AmountSelector = ({ name, valueUpdated }) => {
  const [value, setValue] = useState(0)
  const updateValue = (newValue) => {
    if (newValue < 0) newValue = 0
    setValue(newValue)
    valueUpdated(newValue)
  }
  return (
    <motion.div variants={amoutVariants} whileHover="hover">
      <Text as="span" styledAs="sectionHeadline">
        {name}
      </Text>
      <motion.button
        onClick={() => updateValue(value - 1)}
        className={styles.iconButton}
        variants={amountArrowVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <ChevronLeft />
      </motion.button>
      <Text as="span" styledAs="sectionHeadline">
        {value}
      </Text>
      <motion.button
        onClick={() => updateValue(value + 1)}
        className={styles.iconButton}
        variants={amountArrowVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <ChevronRight />
      </motion.button>
    </motion.div>
  )
}

export default AmountSelector
