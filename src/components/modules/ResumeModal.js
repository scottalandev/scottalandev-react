function Resume(props) {
  return (
    <>
      {props.isOpen && (
        <div className="modalOverlay">
          <div className="modalContainer">
            <button className="modalCloser" onClick={props.closer}>
              Close Resumé
            </button>
            <object className="modalContent" data={props.src}>{props.alt}</object>
          </div>
        </div>
      )}
    </>
  );
}

export default Resume;
