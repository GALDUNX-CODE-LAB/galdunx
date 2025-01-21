import { motion } from 'motion/react';
 export const FramerContainer = ({children, ...rest}) => {
    return(
        <motion.div {...rest}>{children}</motion.div>
    )
}

export const FramerHeader = ({children, ...rest}) => {
    return(
        <motion.h1 {...rest}>{children}</motion.h1>
    )
}

export const FramerHeader3 = ({children, ...rest}) => {
    return(
        <motion.h3 {...rest}>{children}</motion.h3>
    )
}
