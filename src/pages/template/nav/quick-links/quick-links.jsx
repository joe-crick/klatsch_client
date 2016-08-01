
export default React => (props) => {
    return (
      <klatsch-quick-links>
      <ul className="nav-links nav-item nav-menu">
        <li className="">
          <a href="/match"> <span className="text"> {props.browseMatches} </span> </a>
        </li>
      </ul>
    </klatsch-quick-links>
    );
};
