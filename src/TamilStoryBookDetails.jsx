import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

export function TamilStoryBookDetails({ tamilStory, setTamilStory }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const tamilStoryDetail = tamilStory[id];
  return (
    <div>
      <div className="title">
        <h3>
          Hello all welcome to the tamil story book details page {tamilStoryDetail.book}
        </h3>
      </div>
      <div className="master-card">
        <div className="card-details">
          <img
            className="image-details"
            src={tamilStoryDetail.image}
            alt={tamilStoryDetail.book}
          />
          <div className="book-details-view">
            <p>
              <strong>Book :</strong>
              {tamilStoryDetail.book}
            </p>
            <p>
              <strong>Author :</strong>
              {tamilStoryDetail.author}
            </p>
            <p>
              <strong>Year of release :</strong>
              {tamilStoryDetail.releaseyear}
            </p>
            <p>
              <strong>Description :</strong>
              {tamilStoryDetail.description}
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