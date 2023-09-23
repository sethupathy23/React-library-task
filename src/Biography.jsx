import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export function Biography({ bio, setBio }) {
  const deleteBook = (id) => {
    const alterList = bio.filter((del) => del.id !== id);
    setBio(alterList);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <h2>Hello all welcome to the bio section</h2>
      </div>
      <div className="master-card">
        {bio.map((bio, index) => (
          <div key={index} className="card">
            <img className="image" src={bio.image} alt={bio.book} />
            <div className="book-details">
              <p>
                <strong>Book :</strong>
                {bio.book}
              </p>
              <p>
                <strong>Author :</strong>
                {bio.author}
              </p>
            </div>
            <div className="material-btns">
              <IconButton
                variant="outlined"
                color="primary"
                onClick={() =>
                  navigate(`/library/biography/bookdetails/${index}`)
                }
              >
                <InfoIcon></InfoIcon>
              </IconButton>
              <IconButton
                variant="outlined"
                color="success"
                onClick={() =>
                  navigate(`/library/biography/editbook/${bio.id}`)
                }
              >
                <EditIcon></EditIcon>
              </IconButton>
              <IconButton
                variant="outlined"
                color="error"
                onClick={() => deleteBook(bio.id)}
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
          onClick={() => navigate("/library/biography/addbook")}
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