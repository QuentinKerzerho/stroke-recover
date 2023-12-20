export default function BasicButtons({ onClose, selectedValue, open }) {
  //   const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };
  return (
    <div>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Liste du diaporama</DialogTitle>
        <List sx={{ pt: 0 }}>
          {ListPhoto.map((card, index) => (
            <ListItem disableGutters key={index}>
              <ListItemAvatar
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {index + 1}
              </ListItemAvatar>
              <ListItemText
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "50px",
                }}
                primary={card.name}
              />
              <ListItemButton
                disableGutters={true}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "20px",
                }}
              >
                <DeleteForeverSharpIcon sx={{ padding: "0" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Dialog>
    </div>
  );
}
