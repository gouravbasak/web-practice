import "./App.css";
function App() {
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: "gray", padding: "4px" }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Delivery</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/">User</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Agent</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact us</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Tracking id" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
<form class="row g-3" style={{ backgroundColor: "gray" ,padding: "40px"}}>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">First Name</label>
    <input type="text" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-6">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder=""/>
  </div>
  <div class="col-md-12">
    <label for="inputZip" class="form-label">Tracking id</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-md-4">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>Delhi</option>
      <option>Kolkata</option>
      <option>mumbai</option>
      <option>bangalore</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck"/>
      <label class="form-check-label" for="gridCheck">
        keep me updated..
      </label>
    </div>
  </div>
  <div class="col-12" style={{paddingLeft:"600px"}}>
    <button type="submit" class="btn btn-primary">get info</button>
  </div>
</form>
</>
  );
}

export default App;
