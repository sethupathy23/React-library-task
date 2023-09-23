import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export function ScienceFictionBookDetails({ sciFi, setSciFi}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const sciFiDetail = sciFi[id];
  return (
    <div>
      <div className="title">
        <h3>
          Hello all welcome to the scienceFictionBook book details page {sciFiDetail.book}
        </h3>
      </div>
      <div className="master-card">
        <div className="card-details">
          <img
            className="image-details"
            src={sciFiDetail.image}
            alt={sciFiDetail.book}
          />
          <div className="book-details-view">
            <p>
              <strong>Book :</strong>
              {sciFiDetail.book}
            </p>
            <p>
              <strong>Author :</strong>
              {sciFiDetail.author}
            </p>
            <p>
              <strong>Year of release :</strong>
              {sciFiDetail.releaseyear}
            </p>
            <p>
              <strong>Description :</strong>
              {sciFiDetail.description}
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