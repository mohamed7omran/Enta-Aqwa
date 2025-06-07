"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

// Fade in animation
export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Slide in from right (for RTL)
export const SlideInRight = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Slide in from left (for RTL)
export const SlideInLeft = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Scale animation
export const ScaleIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger children animation
export const StaggerContainer = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Stagger item
export const StaggerItem = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Floating animation
export const FloatingElement = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 1, -1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Pulse animation
export const PulseElement = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Page transition wrapper
export const PageTransition = ({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Counter animation
export const AnimatedCounter = ({
  value,
  duration = 2,
  className = "",
}: {
  value: number
  duration?: number
  className?: string
}) => {
  return (
    <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className={className}>
      <motion.span initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration, ease: "easeOut" }}>
        {value}
      </motion.span>
    </motion.span>
  )
}
