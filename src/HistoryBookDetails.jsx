import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export function HistoryBookDetails({ history, setHistory }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const historyDetail = history[id];
  return (
    <div>
      <div className="title">
        <h3>
          Hello all welcome to the history book details page {historyDetail.book}
        </h3>
      </div>
      <div className="master-card">
        <div className="card-details">
          <img
            className="image-details"
            src={historyDetail.image}
            alt={historyDetail.book}
          />
          <div className="book-details-view">
            <p>
              <strong>Book :</strong>
              {historyDetail.book}
            </p>
            <p>
              <strong>Author :</strong>
              {historyDetail.author}
            </p>
            <p>
              <strong>Year of release :</strong>
              {historyDetail.releaseyear}
            </p>
            <p>
              <strong>Description :</strong>
              {historyDetail.description}
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