import { useState } from "react";

function Tour({ id, image, info, name, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);
  const newText = info.substring(0, 200);

  function toogleInfo() {
    setReadMore((prevState) => !prevState);
  }

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name} </h5>
        <p>
          {readMore ? info : `${newText}...`}
          <button onClick={toogleInfo} type="button" className="info-btn">
            {readMore ? "Show less" : "Read more"}
          </button>
        </p>
        <button
          onClick={() => removeTour(id)}
          type="button"
          className="btn btn-block delete-btn"
        >
          Not interested
        </button>
      </div>
    </article>
  );
}

export default Tour;
