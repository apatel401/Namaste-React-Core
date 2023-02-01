const CardShimmer = () => {
  return (
    <>
   <div className="search-hero-shimmer">
   </div>
   <div className="restaurant-list">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-title"></div>
            <div className="shimmer-tag"></div>
            <div className="shimmer-dist"></div>
          </div>
        ))}
    </div>
    </>
   
  );
};

export default CardShimmer;
