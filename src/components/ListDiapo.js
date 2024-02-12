// "use client";

// import Dialog from "@mui/material/Dialog";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import DialogTitle from "@mui/material/DialogTitle";
// import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
// import { ListPhoto } from "@/src/datas/ListPhoto";
// import prisma from "@/lib/prisma";
// import { PrismaClient } from "@prisma/client";

// export default function ListDiapo({ onClose, selectedValue, open, name }) {
//   const handleClose = () => {
//     onClose(selectedValue);
//   };

//   return (
//     <div>
//       <Dialog onClose={handleClose} open={open}>
//         <DialogTitle>Liste du diaporama</DialogTitle>
//         <List sx={{ pt: 0 }}>
//           {feed.map((card, index) => (
//             <ListItem disableGutters key={index}>
//               <ListItemAvatar
//                 sx={{ display: "flex", justifyContent: "center" }}
//               >
//                 {index + 1}
//               </ListItemAvatar>
//               <ListItemText
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   width: "50px",
//                 }}
//                 primary={card}
//               />
//               <ListItemButton
//                 disableGutters={true}
//                 sx={{
//                   display: "flex",
//                   justifyContent: "center",
//                   borderRadius: "20px",
//                 }}
//               >
//                 <DeleteForeverSharpIcon sx={{ padding: "0" }} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Dialog>
//     </div>
//   );
// }
