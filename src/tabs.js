const tabs = (() => {
  const container = document.getElementById('content');

  container.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">EatIn</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" id = 'homee' href="#">Home <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" id = "menuu" href="#">Menu</a>
        <a class="nav-item nav-link" id = "contactt" href="#">Contact</a>
      </div>
    </div>
  </nav>`;

})();

export default tabs;
