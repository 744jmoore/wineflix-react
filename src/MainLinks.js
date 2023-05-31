
const MainLinks = (props) => {
    const links = props.links;
    return (
        <ul className="navigation-links">
            {links.map((link) => (
                <li key={link.id}>
                    <a href={link.link}>{link.title}</a>
                </li>
            ))}
        </ul>
    );
}

export default MainLinks;