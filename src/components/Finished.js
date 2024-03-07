function Finished({ point, maxPoints, highscore, dispatch }) {
  const percentage = (point / maxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored {point} out of {maxPoints} ({Math.ceil(percentage)} %)
      </p>
      <p className="highscore">(Highscore: {highscore} points) </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </>
  );
}

export default Finished;
