export function Modal({ setShowModal }) {
  function onSubmit(e) {
    e.preventDefault();
    setShowModal(false);
  }
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <button onClick={() => setShowModal(false)}>&#x2715;</button>
        <h3>Join us to get access to the latest stories!</h3>
        <form>
          <label htmlFor="email">Your Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="email@address.com"
          />
          <button onClick={(e) => onSubmit(e)}>Submit</button>
        </form>
      </div>
    </div>
  );
}
