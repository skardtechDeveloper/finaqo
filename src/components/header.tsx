import { useState } from 'react';
import Link from 'next/link';

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
    hoverStyle = {display: 'block'}
  } else {
    hoverStyle = {display: 'none'}
  }

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  var toggleStyle;
  if (isActive) {
    toggleStyle = {display: 'block'}
  } else {
    toggleStyle = {display: 'none'}
  }

  return (
    <>
        <header className="header">
        <div className="container">
          <div className="header-inner">
            <div className="nav-toggle-btn" onClick={toggleClass} data-ga-label="navHamburger">
                <img src="img/menu_icon.svg" alt="menu_icon" width="24px" id="imgID" />
            </div>

            <div className="site-logo" id="siteLogoPaisabazaar">
                <Link href="/" passHref>
                    <img src="img/logo.png" alt="Paisabazaar" width="100px" />
                </Link>
            </div>

            <nav className="main-nav" id="main-nav" style={toggleStyle}>
                <ul>
                    <li>
                        <Link href="/" passHref>Home</Link>
                    </li>
                    <li>
                        <Link href="/about-us" passHref>About Us</Link>
                    </li>
                    <li className={ isHovering ? "dropdown-link active" : "dropdown-link"} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <Link href="#" passHref>All Products</Link>

                        <div className="mega-dropdown-menu mobile" style={hoverStyle} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-lg-3">
                                        <p className="menu-title">Loans</p>
                                        <ul>
                                            <li><Link href="/personal-loan" passHref>Personal Loan</Link></li>
                                            <li><Link href="/short-term-loans" passHref>Micro Loan (Under ₹50K)</Link></li>
                                            <li><Link href="/business-loan" passHref>Business Loan</Link></li>

                                            <li><Link href="/home-loan" passHref>Home Loan</Link></li>
                                            <li><Link href="/loan-against-property" passHref>Loan Against Property</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-lg-3">
                                        <p className="menu-title">Other Products</p>
                                        <ul>
                                            <li><Link href="/cibil-credit-report" passHref>Credit Score</Link><span className="badge badge-green">Free</span></li>
                                            <li><Link href="/credit-card" passHref>Credit Card</Link></li>

                                            <li><Link href="/stepupcard" passHref>Step-Up Card</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-lg-3">
                                        <p className="menu-title">Loan Transfer</p>
                                        <ul>
                                            <li><Link href="/personal-loan-balance-transfer" passHref>Personal Loan Balance Transfer</Link></li>
                                            <li><Link href="/home-loan-balance-transfer" passHref>Home Loan Balance Transfer</Link></li>
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
                                            <li><Link href="/short-term-loans" passHref>Micro Loan (Under ₹50K)</Link></li>
                                            <li><Link href="/business-loan" passHref>Business Loan</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-lg-3">
                                    <p className="menu-title">&nbsp;</p>
                                        <ul>

                                            <li><Link href="/home-loan" passHref>Home Loan</Link></li>
                                            <li><Link href="/loan-against-property" passHref>Loan Against Property</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 col-lg-3">
                                        <p className="menu-title">Other Products</p>
                                        <ul>
                                            <li><Link href="/cibil-credit-report" passHref>Credit Score</Link><span className="badge badge-green">Free</span></li>
                                            <li><Link href="/credit-card" passHref>Credit Card</Link></li>

                                            <li><Link href="/stepupcard" passHref>Step-Up Card</Link></li>
                                        </ul>
                                    </div>
                                      <div className="col-md-4 col-lg-3">
                                        <p className="menu-title">Loan Transfer</p>
                                        <ul>
                                            <li><Link href="/personal-loan-balance-transfer" passHref>Personal Loan Balance Transfer</Link></li>
                                            <li><Link href="/home-loan-balance-transfer" passHref>Home Loan Balance Transfer</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li>
                    <li>
                        <Link href="/contact-us" passHref>Contact Us</Link>
                    </li>
                </ul>
            </nav>

          </div>
        </div>
      </header>
    </>
  )
}

export default Header;