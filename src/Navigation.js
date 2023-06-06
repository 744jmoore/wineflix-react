import { useState } from "react";
import MainLinks from "./MainLinks";


const Navigation = () => {

    const [links] = useState([
        { title: "Home", link: "https://developer.mozilla.org", id: 1 },
        { title: "Whites", link: "https://developer.mozilla.org", id: 2 },
        { title: "Reds", link: "https://developer.mozilla.org", id: 3 },
        { title: "Blends", link: "https://developer.mozilla.org", id: 4 }
    ]);
    return (
        <section className="primary-navigation">
            <h1>WineFlix</h1>
            <MainLinks links={links} />
{/*             <ul className="navigation-links">
                {links.map((link) => (
                    <li key={link.id}>{link.title}</li>
                ))}

            </ul> */}
        </section>
    );
}

export default Navigation;