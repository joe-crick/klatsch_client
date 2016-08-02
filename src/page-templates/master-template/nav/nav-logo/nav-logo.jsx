export default React => (props) => {
    return (
        <klatsch-nav-logo>
          <div className="navbar-header">
              <button type="button" className="navbar-toggle"
                data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="glyphicon glyphicon-menu-hamburger"></span>
              </button>
              <a className="navbar-brand" href="#">Klatsch</a>
          </div>
        </klatsch-nav-logo>
      );
    }
