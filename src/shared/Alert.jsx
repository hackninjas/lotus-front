import { Box } from '@chakra-ui/layout'
import React from 'react'

// variant props value could be : glass and default only


export const AlertWrapper = ({children, variant = "default"}) => {
    const variants = {
        glass: {
            bg:"rgba( 255, 255, 255, 0.10)",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 8.5px )",
            border:"1px solid rgba( 255, 255, 255, 0.4)",
            borderRadius: "5px",
            p:"5"
        },
        default: {
           bg: "white",
           borderRadius: "5px",
           p:"5",
           border: "1px solid black"
        }
    }

    const selectedVariant = variants[variant]
    return (
        <Box {...selectedVariant}>
            {children}
        </Box>
    )
}
