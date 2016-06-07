import './menu-bar.sass';

export default React => (props) => (
  <klatch-menu-bar>
    <h1 id="logo" className="nav-logo">
        <a href="/home">
            <div className="icon" aria-hidden="true" title="Klatch"></div>
        </a>
    </h1>
    <ul className="nav-links nav-item">
        <li className="">
            <a href="/match">
                <span className="browse">
                    {props.browse}
                </span>
            </a>
        </li>
        <li className="">
            <a href="">
                <span className="join-klatch">
                    {props.joinKlatch}
                </span>
            </a>
        </li>
    </ul>
  </klatch-menu-bar>
);
