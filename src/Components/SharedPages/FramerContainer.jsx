import { motion } from 'framer-motion';
const FramerContainer = ({children, ...rest}) => {
    return(
        <motion.div {...rest}>{children}</motion.div>
    )
}

export default FramerContainer;