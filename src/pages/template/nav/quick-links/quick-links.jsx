
export default React => observer((props) => {
    return (
      <klatsch-quick-links>
      <ul className="nav-links nav-item">
        <li className="">
          <a href="/match"> <span className="text"> Browse Matches </span> </a>
        </li>
        <li className="">
          <a href="https://www.okcupid.com/upgrade?cf=sitenav"> <span className="text"> Join A-List </span> </a>
        </li>
      </ul>
    </klatsch-quick-links>
    );
};
