import React from 'react'
import TradeTable from '../TradeData'
import ImageGrid from '../ImageGrid'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';


const Chf_Jpy = () => {
  return (
    <div>
        <h1>Trade Data Table</h1>
        <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            sx={{ textTransform: 'none' }}
          >
        New Trade
      </Button>

        <TradeTable/>
 
        <h1>Trade Images</h1>
        <ImageGrid/> 
        </div>
  )
}

export default Chf_Jpy