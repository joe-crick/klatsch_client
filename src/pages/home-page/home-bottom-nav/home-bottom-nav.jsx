
export default React => props => (
	<klatsch-home-bottom-nav>
		<ul className="col-md-10 list-group">
			{props.navItems.map((item, idx) => <li key={`bnav${idx}`}>
				<div><img src={item.img}/></div>
				<div>{item.text}</div>
			</li>)}
		</ul>
	</klatsch-home-bottom-nav>
);
