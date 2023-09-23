import { Button, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

export function TamilStoryBooks({ tamilStory, setTamilStory }) {
  const deleteBook = (id) => {
    const alterList = tamilStory.filter((del) => del.id !== id);
    setTamilStory(alterList);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div className="title">
        <h2>Hello all welcome to the tamil story book section</h2>
      </div>
      <div className="master-card">
        {tamilStory.map((tamil, index) => (
          <div key={index} className="card">
            <img className="image" src={tamil.image} alt={tamil.book} />
            <div className="book-details">
              <p>
                <strong>Book :</strong>
                {tamil.book}
              </p>
              <p>
                <strong>Author :</strong>
                {tamil.author}
              </p>
            </div>
            <div className="material-btns">
              <IconButton
                variant="outlined"
                color="primary"
                onClick={() =>
                  navigate(`/library/tamilstorybooks/details/${index}`)
                }
              >
                <InfoIcon></InfoIcon>
              </IconButton>
              <IconButton
                variant="outlined"
                color="success"
                onClick={() =>
                  navigate(`/library/tamilstorybooks/editbook/${tamil.id}`)
                }
              >
                <EditIcon></EditIcon>
              </IconButton>
              <IconButton
                variant="outlined"
                color="error"
                onClick={() => deleteBook(tamil.id)}
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
          onClick={() => navigate("/library/tamilstorybooks/addbook")}
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