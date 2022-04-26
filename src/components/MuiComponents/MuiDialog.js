import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import BookAppointmentForm from "../BookAppointmentForm";
import Checkout from "../Checkout";
import { ButtonStyled } from "../StyledComponents/Wrapper";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ButtonStyledJ = styled(ButtonStyled)`
  margin-top: 1.2rem;
`;

export default function ResponsiveDialog({ cart }) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const details = useSelector((state) => state.user.details);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getEmptyFieldDetails = () =>
    details && details.filter((d) => typeof d === "undefined");



  console.log(getEmptyFieldDetails());
  return (
    <div>
      <ButtonStyledJ primary onClick={handleClickOpen}>
        Proceed To Checkout
      </ButtonStyledJ>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Enter the details below to continue for Checkout"}
        </DialogTitle>
        <DialogContent>
          <BookAppointmentForm dialogT />
        </DialogContent>
        <DialogActions>
          {/* <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}
