import React, {useState} from "react";
import {Button, styled, Dialog, DialogTitle, DialogContent, DialogActions, IconButton, Typography} from '@mui/material'
import CloseIcon from "@mui/icons-material/Close"
import {useCartContext} from "../CartContext";
import "./letsTalkToUS.scss"
import {ImgSvgData} from "../contacts/img-svg/ImgSvgData";
import {Img} from "../img/imagesData"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));




function LetsTalkToUsDialog (){
  const {setDialog, dialog, handleDialog, switchBlock, setSwitchBlock} = useCartContext()
  
  const [check, setChecked] = useState(false)
  const [showPrg, setShowPrg] = useState(false)
  function Submit (){
    if (check === true){
      setSwitchBlock(true)
      setTimeout(()=>{
        setDialog(false)
      },5000)
    } else{
      setShowPrg(true)
    }
  }
  
  return(
     <div className="dialog-block">
       <BootstrapDialog className="dialog-box"
                        onClose={handleDialog}
                        // aria-labelledby="customized-dialog-title"
                        open={dialog}
       >
         <DialogTitle className="dialog-title" sx={{ m: "0 30px 0 0", p: 0 }} id="customized-dialog-title">
           <p style={{display: `${switchBlock ? "none" : "block"}`}}>Would like the same project?</p>
         </DialogTitle>
    
         <IconButton
            aria-label="close"
            onClick={handleDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[100],
            }}
         >
           <CloseIcon />
         </IconButton>
    
         <DialogContent dividers>
            <div style={{display: `${switchBlock ? "none" : "block"}`}} className="dialogContent">
              <div className="inputBlock">
                <p className="overInput">Contact person*</p>
                <input placeholder="text" type="text" className="input"/>
              </div>
  
              <div className="inputBlock">
                <p className="overInput">Email*</p>
                <input placeholder="text" type="text" className="input"/>
              </div>
  
              <div className="inputBlock">
                <p className="overInput">Phone*</p>
                <input placeholder="text" type="text" className="input"/>
              </div>
  
              <div className="inputBlock">
                <p className="overInput">I'm gonna need to do</p>
                <input placeholder="text" type="text" className="input"/>
              </div>
  
              <div className="checking">
                <input className="inputCheckbox" id="checkbox" type="checkbox"/>
                <label onClick={()=>{
                  setChecked(!check)
                }} className="inputLabel" htmlFor="checkbox">
                  <img src={ImgSvgData.check} alt=""/>
                </label>
                <p className="checkboxText">I accept the terms and conditions of the user agreement and consent to the processing of my data</p>
              </div>
            </div>
           
           <div style={{display: `${switchBlock ? "flex" : "none"}`}} className="sendingBlock">
             <img src={Img.accept} alt=""/>
              <p className="sendText">Your form was successfully submitted!</p>
           </div>
           
           
    
         </DialogContent>
         <DialogActions>
            <div style={{display: `${switchBlock ? "none" : "flex"}`}} className="buttons">
              <button onClick={Submit} className="G-link-button">Submit</button>
              <p style={{display: `${showPrg ? "block" : "none"}`}} className="redText">*Accept the Terms</p>
            </div>
         </DialogActions>
       </BootstrapDialog>
     </div>
  )
}

export default LetsTalkToUsDialog