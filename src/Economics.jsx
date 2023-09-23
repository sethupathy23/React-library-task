import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export function Economics({ economics, setEconomics }) {
  const deleteBook = (id) => {
    const alterList = economics.filter((del) => del.id !== id);
    setEconomics(alterList);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <h2>Hello all welcome to the economics book section</h2>
      </div>
      <div className="master-card">
        {economics.map((eco, index) => (
          <div key={index} className="card">
            <img className="image" src={eco.image} alt={eco.book} />
            <div className="book-details">
              <p>
                <strong>Book :</strong>
                {eco.book}
              </p>
              <p>
                <strong>Author :</strong>
                {eco.author}
              </p>
            </div>
            <div className="material-btns">
              <IconButton
                variant="outlined"
                color="primary"
                onClick={() => navigate(`/library/economics/details/${index}`)}
              >
                <InfoIcon></InfoIcon>
              </IconButton>
              <IconButton
                variant="outlined"
                color="success"
                onClick={() =>
                  navigate(`/library/economics/editbook/${eco.id}`)
                }
              >
                <EditIcon></EditIcon>
              </IconButton>
              <IconButton
                variant="outlined"
                color="error"
                onClick={() => deleteBook(eco.id)}
              >
                <DeleteIcon></DeleteIcon>
              </IconButton>
            </div>
          </div>
        ))}
      </div>
      <div className="add-btn">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/library/economics/addbook")}
        >
          Add New Book
        </Button>
        <Button variant="contained" color="error" onClick={()=>navigate("/library")}>
          Back
        </Button>
      </div>
    </div>
  );
}