import nav from './nav/nav';

export default React => observer((props) => {
    const Nav = nav(React);

    return (
      <klatsch>
        <Nav />
        <main>
          {this.props.children}
        </main>
      </klatsch>
    )
});
