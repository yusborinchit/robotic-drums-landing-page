import { domAnimation, LazyMotion } from 'motion/react'
import * as m from 'motion/react-m'

interface Props {
  children: React.ReactNode
}

export default function PartnersCarousel({ children }: Readonly<Props>) {
  return (
    <LazyMotion features={domAnimation}>
      <div className="overflow-hidden">
        <m.div
          animate={{
            translateX: '-50%',
          }}
          transition={{
            duration: 12,
            ease: 'linear',
            repeat: Infinity,
          }}
          className="flex w-max"
        >
          {children}
          {children}
        </m.div>
      </div>
    </LazyMotion>
  )
}
