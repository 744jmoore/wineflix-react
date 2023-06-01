const SecondaryNavigation = () => {
const link = "https://developer.mozilla.org"
const initial = 'S'
    return ( 
        <section className="secondary-navigation">
        <span className="user-avatar">
          <a href={ link }>{ initial }</a>
        </span>
      </section>
     );
}
 
export default SecondaryNavigation;