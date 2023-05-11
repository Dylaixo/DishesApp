import React from 'react'
import { Alert } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui-slice'
// import { RootState } from '../../store/store'

const Notification = () => {
  //   const dispatch = useDispatch();
  //   const notification = useSelector((state: RootState) => state.ui.notification);
  //   const handleClose = () =>{
  //       dispatch(uiActions.showNotification({
  //           open: false
  //       }))
  //   }
  // return (
  //   <div>
  //       {notification.open ? <Alert onClose={handleClose} severity={notification.type as "success" | "info" | "warning" | "error"}>{notification.message}</Alert> : null}
  //   </div>
  // )
}

export default Notification;
