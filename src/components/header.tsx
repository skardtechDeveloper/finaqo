import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from 'react-bootstrap/Button';

const Header = () => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };
    var hoverStyle;
    if (isHovering) {
        hoverStyle = { display: 'block' }
    } else {
        hoverStyle = { display: 'none' }
    }

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };

    var toggleStyle;
    if (isActive) {
        toggleStyle = { display: 'block' }
    } else {
        toggleStyle = { display: 'none' }
    }

    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);

    return (
        <>
            <header className={scroll ? "header sticky" : "header"}>
                <div className="container">
                    <div className="header-inner">
                        <div className="nav-toggle-btn" onClick={toggleClass} data-ga-label="navHamburger">
                            <Image src="/img/menu_icon.svg" alt="menu_icon" width={24} height={15} id="imgID" />
                        </div>

                        <div className="site-logo">
                            <Link href="/" passHref >
                                <Image src="/img/logo.png" alt="finaqo" width={100} height={87} placeholder="blur" blurDataURL={'/img/logo.png'} />
                            </Link>
                        </div>

                        <nav className="main-nav" id="main-nav" style={toggleStyle}>
                            <ul>
                                <li>
                                    <Link href="/" passHref>Home</Link>
                                </li>
                                <li className={isHovering ? "dropdown-link active" : "dropdown-link"} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                    <Link href="/#" passHref>All Products</Link>

                                    <div className="mega-dropdown-menu mobile" style={hoverStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 col-lg-3">
                                                    <p className="menu-title">Loans</p>
                                                    <ul>
                                                        <li><Link href="/personal-loan" passHref>Personal Loan</Link></li>
                                                        <li><Link href="/business-loan" passHref>Business Loan</Link></li>
                                                        <li><Link href="/home-loan" passHref>Home Loan</Link></li>
                                                        <li><Link href="/over-draft" passHref>Over Draft</Link></li>
                                                        <li><Link href="/loan-against-property" passHref>Loan Against Property</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-4 col-lg-3">
                                                    <p className="menu-title">Blance Transfer</p>
                                                    <ul>
                                                        <li><Link href="/cibil-credit-report" passHref>Personal Loan Transfer</Link></li>
                                                        <li><Link href="/credit-card" passHref>Home Loan Transfer</Link></li>
                                                        <li><Link href="/stepupcard" passHref>Credit Card Blance Transfer</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mega-dropdown-menu desktop" style={hoverStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-md-4 col-lg-3">
                                                    <p className="menu-title">Loans</p>
                                                    <ul>
                                                        <li><Link href="/personal-loan" passHref>Personal Loan</Link></li>
                                                        <li><Link href="/business-loan" passHref>Business Loan</Link></li>
                                                        <li><Link href="/home-loan" passHref>Home Loan</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-4 col-lg-3">
                                                    <p className="menu-title">&nbsp;</p>
                                                    <ul>
                                                        <li><Link href="/over-draft" passHref>Over Draft</Link></li>
                                                        <li><Link href="/loan-against-property" passHref>Loan Against Property</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-4 col-lg-3">
                                                    <p className="menu-title">Blance Transfer</p>
                                                    <ul>
                                                        <li><Link href="/personal-loan-transfer" passHref>Personal Loan Transfer</Link></li>
                                                        <li><Link href="/home-loan-transfer" passHref>Home Loan Transfer</Link></li>

                                                    </ul>
                                                </div>
                                                <div className="col-md-4 col-lg-3">
                                                    <p className="menu-title">&nbsp;</p>
                                                    <ul>
                                                        <li><Link href="/credit-card-blance-transfer" passHref>Credit Card Blance Transfer</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/#" passHref>Financial Tools</Link>
                                </li>
                                <li>
                                    <Link href="/about-us" passHref>About Us</Link>
                                </li>
                                <li>
                                    <Link href="/contact-us" passHref>Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="/our-team" passHref>Our Team</Link>
                                </li>
                                <li>
                                    <Link href="/#" passHref>Become Our Patner</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="enquery-btn">
                            <Link href="/contact-us" passHref >
                                <Button variant="primary" type="button">
                                    Enquery Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;