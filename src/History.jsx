import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export function History({ history, setHistory }) {
  const deleteBook = (id) => {
    const alterList = history.filter((del)=>del.id !== id);
    setHistory(alterList)
  }
  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <h2>Hello all welcome to the history book section</h2>
      </div>
      <div className="master-card">
        {history.map((hist, index) => (
          <div key={index} className="card">
            <img className="image" src={hist.image} alt={hist.book} />
            <div className="book-details">
              <p>
                <strong>Book :</strong>
                {hist.book}
              </p>
              <p>
                <strong>Author :</strong>
                {hist.author}
              </p>
            </div>
            <div className="material-btns">
              <IconButton
                variant="outlined"
                color="primary"
                onClick={() => navigate(`/library/history/bookdetails/${index}`)}
              >
                <InfoIcon></InfoIcon>
              </IconButton>
              <IconButton variant="outlined" color="success" onClick={()=>navigate(`/library/history/editbook/${hist.id}`)}>
                <EditIcon></EditIcon>
              </IconButton>
              <IconButton variant="outlined" color="error" onClick={()=>deleteBook(hist.id)}>
                <DeleteIcon></DeleteIcon>
              </IconButton>
            </div>
          </div>
        ))}
      </div>
      <div className="add-btn">
        <Button variant="contained" color="primary" onClick={()=>navigate("/library/history/addbook")}>
          Add New Book
        </Button>
        <Button variant="contained" color="error" onClick={()=>navigate("/library")}>
          Back
        </Button>
      </div>
    </div>
  );
}