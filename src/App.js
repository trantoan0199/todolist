import { Container, Paper } from "@mui/material";
import Title from "./components/Title";
import Filters from "./components/Filters/Filter";
import FormTable from "./components/FormTable/FormTable";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [dataEdit,setDataEdit] = useState({})
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDataEdit({
      // name: '',
      // status: false
    })
  };

  return (
    <Container fixed style={{ marginTop: "40px" }}>
      <Title />
      <Paper>
        <Filters dataEdit={dataEdit} setDataEdit={setDataEdit} open={open} setOpen={setOpen} handleOpen={handleOpen} handleClose={handleClose} />
        <FormTable handleOpen={handleOpen} setDataEdit={setDataEdit}/>
      </Paper>
    </Container>
  );
}

export default App;
