
const Buttons = ({ b }) => {

    return (
        <li>
            <button className={b.type} key={b.id}>
                <img src={b.icon} style={{width: 20, height:20}}/>
                <span>{b.title}</span>
            </button>
        </li>
     );
}

export default Buttons;