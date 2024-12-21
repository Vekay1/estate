
import './Header.css'
const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings h-container">

                <img src="/logo.png" alt="" width={100}/>
                <div className="h-menu">
                    <a href="">Residents</a>
                    <a href="">Ourпар Value</a>
                    <a href="">Contact Us</a>



                     <a href="">Get Started</a>
                        <button>
                            <a href="">Contact</a>
                        </button>
            </div>
        </div>
        </section>
    )
}


export default Header;