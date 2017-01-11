export default React => (props) => (
  <klatsch-menu-bar>
    <h1 id="logo" className="nav-logo">
        <a href="/home">
            <div className="icon" aria-hidden="true" title="klatsch"></div>
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
                <span className="join-klatsch">
                    {props.joinKlatsch}
                </span>
            </a>
        </li>
    </ul>
  </klatsch-menu-bar>
);
