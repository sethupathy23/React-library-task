import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export function EconomicsBookDetails({ economics, setEconomics }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const economicsDetail = economics[id];
  return (
    <div>
      <div className="title">
        <h3>
          Hello all welcome to the economics book details page {economicsDetail.book}
        </h3>
      </div>
      <div className="master-card">
        <div className="card-details">
          <img
            className="image-details"
            src={economicsDetail.image}
            alt={economicsDetail.book}
          />
          <div className="book-details-view">
            <p>
              <strong>Book :</strong>
              {economicsDetail.book}
            </p>
            <p>
              <strong>Author :</strong>
              {economicsDetail.author}
            </p>
            <p>
              <strong>Year of release :</strong>
              {economicsDetail.releaseyear}
            </p>
            <p>
              <strong>Description :</strong>
              {economicsDetail.description}
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