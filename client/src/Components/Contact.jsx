export default function Contact() {
  return (<>
<div className="container">
<form>

<div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Name
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" className="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">
      Message
    </label>
    <textarea
      type="text"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>

  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>
</div>

  </>
  );
}
