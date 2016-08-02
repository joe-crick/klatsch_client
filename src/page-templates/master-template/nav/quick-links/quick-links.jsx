
export default React => (props) => {
    return (
      <klatsch-quick-links>
      <ul className="nav navbar-nav">
        <li>
          <a href="/match"> <span className="text"> {props.browseMatches} </span> </a>
        </li>
      </ul>
    </klatsch-quick-links>
    );
};
