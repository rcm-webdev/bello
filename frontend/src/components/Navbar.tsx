import { BellRing, MenuIcon } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import BetterIcon from "./BetterIcon";


const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY;
            
            // Show navbar when at top of page
            if (currentScrollY < 10) {
                setIsVisible(true);
            }
            // Show navbar when scrolling up
            else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }
            // Hide navbar when scrolling down
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlNavbar);
        
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const closeDropdown = () => {
        // Remove focus from the dropdown to close it
        const activeElement = document.activeElement as HTMLElement;
        if (activeElement) {
            activeElement.blur();
        }
    };

    return(
    <div className={`fixed top-0 left-0 right-0 z-50 bg-base-100/95 backdrop-blur-sm transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
        <div className="max-w-5xl mx-auto">
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <MenuIcon className="h-5 w-5" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-xl dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to="/" onClick={closeDropdown}>Get Started</Link></li>
                            <li><Link to="/about" onClick={closeDropdown}>How it works</Link></li>
                            <li><Link to="/menu" onClick={closeDropdown}>Pricing</Link></li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <BetterIcon >
                                <BellRing className="w-6 h-6"/>
                            </BetterIcon>
                            </div>
                    
                    <Link to="/" className="btn btn-ghost text-xl font-bold flex items-center gap-2">
                        
                        <span className="text-xl font-chillax">Bello</span>
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal text-lg font-synonym px-1">
                        <li> <Link to="/" >Get Started</Link></li>
                        <li><Link to="/about">How it works</Link></li>
                        <li><Link to="/menu">Pricing</Link></li>
                    </ul> 
                </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar;
