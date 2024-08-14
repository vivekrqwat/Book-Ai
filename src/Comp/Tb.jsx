import { colors, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const TableCell1=styled(TableCell)(({theme})=>({
      color:"white" ,
      fontFamily:"Inter" ,
      lineHeight: "1.6"
}))


function Tb() {
   
  return (
   <TableContainer component={Paper} sx={{background:"#1e293b",color:"white"}}>
<Table >
    <TableHead sx={{background:"#6366f1"}}>
        <TableRow >
            <TableCell1>API</TableCell1>
            <TableCell1>MODEL</TableCell1>
            <TableCell1>Price per 1K tokens</TableCell1>
        </TableRow>
    </TableHead>
    <TableBody>
        <TableRow>
            <TableCell1>OpenAI</TableCell1>
            <TableCell1>	GPT-3.5</TableCell1>
            <TableCell1>$0.002</TableCell1>
        </TableRow>
        <TableRow>
            <TableCell1>OpenAI</TableCell1>
            <TableCell1>GPT-4</TableCell1>
            <TableCell1>$0.03</TableCell1>
        </TableRow>
        <TableRow>
            <TableCell1>Together AI</TableCell1>
            <TableCell1>	Llama-2-70b</TableCell1>
            <TableCell1>$0.008</TableCell1>
        </TableRow>
        <TableRow>
            <TableCell1>Together AI</TableCell1>
            <TableCell1>	Llama-2-13b</TableCell1>
            <TableCell1>$0.0006</TableCell1>
        </TableRow>
    </TableBody>
</Table>
   </TableContainer>
  )
}

export default Tb
