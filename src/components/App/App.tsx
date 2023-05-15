
import Content from '../Container/Content';
import { Box } from '@mui/material';
import Cards from '../Cards/Card';
import AppStyles from '../../modules/App.module.scss'


export default function App() {
  return (
    <div className={AppStyles.root}>
      <div className={AppStyles.content}>
        <h1 className={AppStyles.header}>Become a chef and create your own dishes!</h1>
        <h3 className={AppStyles.smallHeader}>Describe name and preparation time. Then choose type and fill gaps!</h3>
        <Box sx={{ justifyContent: 'space-evenly', display: 'flex', mt: 20 }}>
          <Cards />
        </Box>
        <Content />
      </div>
    </div>
  );
}
