function Progress({ index, numQues, point, maxPoints, answer }) {
  return (
    <header className="progress">
      <progress max={numQues} value={index + Number(answer !== null)} />
      <p>
        Question <strong> {index} </strong> / {numQues}
      </p>
      <p>
        <strong>
          {point} / {maxPoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
