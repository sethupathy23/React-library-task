import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export function TamilBooksDetails({ tamil, setTamil }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const tamilDetail = tamil[id];
  return (
    <div>
      <div className="title">
        <h3>
          Hello all welcome to the tamil book details page {tamilDetail.book}
        </h3>
      </div>
      <div className="master-card">
        <div className="card-details">
          <img
            className="image-details"
            src={tamilDetail.image}
            alt={tamilDetail.book}
          />
          <div className="book-details-view">
            <p>
              <strong>Book :</strong>
              {tamilDetail.book}
            </p>
            <p>
              <strong>Author :</strong>
              {tamilDetail.author}
            </p>
            <p>
              <strong>Year of release :</strong>
              {tamilDetail.releaseyear}
            </p>
            <p>
              <strong>Description :</strong>
              {tamilDetail.description}
            </p>
          </div>
        </div>
      </div>
      <div className="add-btn">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(-1)}
        >
          ⬅ Back
        </Button>
      </div>
    </div>
  );
}