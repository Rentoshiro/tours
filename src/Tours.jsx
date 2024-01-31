import Tour from "./Tour";

function Tours({ tours, removeTour }) {
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="title-underline"></div>
      </div>
      <div className="tours">
        {tours.map((tour) => (
          <Tour tour={tour.id} {...tour} removeTour={removeTour}></Tour>
        ))}
      </div>
    </section>
  );
}

export default Tours;
