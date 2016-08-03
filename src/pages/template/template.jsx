import nav from './nav/nav';

export default React => ({children}, props) => {
    const Nav = nav(React);

    return (
      <klatsch>
        <Nav />
        <main>
          {children}
        </main>
      </klatsch>
    )
};
