import { Modal, Box, Typography, Fade, Backdrop } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const PopUpModal = ({
  open,
  handleClose,
  content,
}: {
  open: boolean;
  handleClose: () => void;
  content: string;
}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="h6"
            component="h2"
            textAlign="center"
          >
            {content}
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default PopUpModal;
