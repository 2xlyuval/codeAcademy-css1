export function Modal({ toggleModal }) {
  function onSubmit(e) {
    e.preventDefault();
    toggleModal(false);
  }
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button className="close-modal-btn" onClick={() => toggleModal(false)}>
          &#x2715;
        </button>
        <h3>Join us to get access to the latest stories!</h3>
        <form>
          <label htmlFor="email">Your Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email@address.com"
          />
          <button className="submit-btn" onClick={(e) => onSubmit(e)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
