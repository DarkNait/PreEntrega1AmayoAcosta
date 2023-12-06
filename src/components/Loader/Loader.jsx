import "./Loader.css";
import { Box, CircularProgress } from '@mui/material';

const Loader = () => {
  return (
    <Box className="loader" sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-around', height: '100%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-around', flexGrow: 1 }}>
            <CircularProgress />
        </Box>
    </Box>
  )
}

export default Loader