import nav from './nav/nav';

export default React => ({children}) => {
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
