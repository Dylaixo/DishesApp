import DisplayFrom from '../Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { popupActions } from '../../store/popup-slice';
import { Box, Button, Dialog, DialogTitle } from '@mui/material';
import { useButtonStyles } from '../Form/FormMaterials/MaterialStyles';

export default function Content() {

  //Defining states in component
  const popup = useSelector((state: any) => state.popup.showPopup);
  const dispatch = useDispatch();

  //Opening popup window with form
  function handleClickOpen() {
    dispatch(popupActions.change());
  }
  //Closing popup window with form
  const handleClose = () => {
    dispatch(popupActions.change());
  };
  //Custom classes for Material UI
  const classes = useButtonStyles()
  return (
    <div>
      <Box sx={{ justifyContent: 'center', display: 'flex' }}>
        <Button className={classes.button} variant="outlined" onClick={handleClickOpen}>
          Create your own dish!
        </Button>
      </Box>
      <Dialog open={popup} onClose={handleClose} >
        <DialogTitle>Dishes</DialogTitle>
        <DisplayFrom />
      </Dialog>
    </div>
  );
}