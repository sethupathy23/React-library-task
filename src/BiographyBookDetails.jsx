import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export function BiographyBookDetails({ bio, setBio }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const bioDetail = bio[id];
  return (
    <div>
      <div className="title">
        <h3>
          Hello all welcome to the biography book details page {bioDetail.book}
        </h3>
      </div>
      <div className="master-card">
        <div className="card-details">
          <img
            className="image-details"
            src={bioDetail.image}
            alt={bioDetail.book}
          />
          <div className="book-details-view">
            <p>
              <strong>Book :</strong>
              {bioDetail.book}
            </p>
            <p>
              <strong>Author :</strong>
              {bioDetail.author}
            </p>
            <p>
              <strong>Year of release :</strong>
              {bioDetail.releaseyear}
            </p>
            <p>
              <strong>Description :</strong>
              {bioDetail.description}
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