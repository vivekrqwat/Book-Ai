import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import Tb from './Tb'

function BOX1() {
  return (
    <Paper 
    sx={{width:"740px",height:"742.78",borderRadius:"10px",background:"#1e293b",color:"white"}}
    >
        <Stack spacing={2} direction={"column"} flexWrap="wrap" mt={9} ml={3} mr={3} mb={3}>
            <Box>
                <Typography variant='h2' component={"h4"} lineHeight={"1.6"} fontSize={"1.5em"} fontWeight={"bold"}
                fontFamily={"'Inter', sans-serif"} 
                color={"#6366f1"}
                >API Pricing</Typography>
                <Typography variant='p'  lineHeight={"1.6"}   fontFamily={"'Inter', sans-serif"}  >Our API pricing is based on the model used and the number of tokens processed.Here's a breakdown of the costs:</Typography>
            </Box>
            <Tb></Tb>
            <Box>
  <Typography variant='h3' fontFamily={"'Inter', sans-serif"} lineHeight={"1.6"}  fontSize={"1.5em"} fontWeight={"bold"} sx={{color:"#6366f1"}}> Token Estimation</Typography>
  <Typography fontFamily={"'Inter', sans-serif"} lineHeight={"1.6"}>On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</Typography>
</Box>

<Box>
  <Typography fontFamily={"'Inter', sans-serif"} variant='h3' lineHeight={"1.6"}  fontSize={"1.5em"} fontWeight={"bold"} sx={{color:"#6366f1"}}>Billing</Typography>
  <Typography lineHeight={"1.6"} fontFamily={"'Inter', sans-serif"} >You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</Typography>
</Box>

        </Stack>
    </Paper>
  )
}

export default BOX1
