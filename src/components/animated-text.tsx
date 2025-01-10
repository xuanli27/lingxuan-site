import { useAnimation, useInView, motion } from "framer-motion"
import React, { useRef } from "react"

export default function AnimatedText({ children }) {
    const controls = useAnimation()
    const textRef = useRef(null)
    const isInView = useInView(textRef)
  
    React.useEffect(() => {
      if (isInView) {
        controls.start({ opacity: 1, y: 0 })
      }
    }, [controls, isInView])
  
    return (
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    )
  }