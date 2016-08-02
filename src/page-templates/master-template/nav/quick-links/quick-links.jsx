
export default React => (props) => {
    return (
      <klatsch-quick-links>
        <ul className="nav navbar-nav">
            <li className="active">
                <a href="#">Find Friends
                    <span className="sr-only">(current)</span>
                </a>
            </li>
            <li>
                <a href="#">Join a Group</a>
            </li>
        </ul>
    </klatsch-quick-links>
    );
};
