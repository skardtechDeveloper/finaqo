import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
        <footer className="footer">
          <div className="footer-links-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 footer-logo">
                        <Link href="/" passHref><Image src="/img/logo.png" width={154} height={154} alt="Logo-white-Paisabazaar"/></Link>
                    </div>
                    <div className="col-md-7 footer-links">
                        <div className="row">
                            <div className="col-6 col-md-4">
                                <ul>
                                    <li><Link href="/about-us" passHref>About</Link></li>
                                    <li><Link href="/careers" passHref>Careers</Link></li>
                                    <li><Link href="/awards" passHref>Awards</Link></li>
                                    <li><Link href="/contact-us" passHref>Contact Us</Link></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-4">
                                <ul>
                                    <li><Link href="/careers" passHref>Privacy Policy</Link></li>
                                    <li><Link href="/awards" passHref>Terms of Use</Link></li>
                                    <li><Link href="/contact-us" passHref>Disclaimer</Link></li>
                                    <li><Link href="/contact-us" passHref>Intellectual Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 contact-links">
                      <div className="contact-list">
                        <div className="list-detail-left">
                          <Image src="/img/footer/phone.svg" width={20} height={20} alt="Phone"/>
                        </div>
                        <div className="list-detail-right">
                          <h6>Call Us <br/> +91-987654321</h6>
                        </div>
                      </div>
                      <div className="contact-list">
                        <div className="list-detail-left">
                        <Image src="/img/footer/mail.svg" width={20} height={20} alt="Mail"/>
                        </div>
                        <div className="list-detail-right">
                          <h6>Mail Us <br/> info@finaqo.in</h6>
                        </div>
                      </div>
                      <div className="contact-list">
                        <div className="list-detail-left">
                        <Image src="/img/footer/location.svg" width={20} height={20} alt="Location"/>
                        </div>
                        <div className="list-detail-right">
                          <h6>Location <br/> Delhi</h6>
                        </div>
                      </div>
                      <div className="contact-list">
                        <div className="list-detail-left">
                        <Image src="/img/footer/stopwatch.svg" width={20} height={20} alt="24x7"/>
                        </div>
                        <div className="list-detail-right">
                          <h6>Time <br/> 24*7 All Day</h6>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="copyright-info">
            <div className="container">
                <div className="row">
                    <div className="offset-md-2 col-md-7">
                        <p>Copyright © 2023 Finaqo | All Rights Reserved.</p>
                    </div>
                    <div className="col-md-3 pb-social-links">
                        <Link target="_blank" rel="nofollow noopener" href="https://www.facebook.com/" passHref><Image src="/img/footer/facebook.svg" width={30} height={30} alt="facebook"/></Link>
                        <Link target="_blank" rel="nofollow noopener" href="https://in.linkedin.com/" passHref><Image src="/img/footer/linkedin.svg" width={30} height={30} alt="linkedin"/></Link>
                        <Link target="_blank" rel="nofollow noopener" href="https://twitter.com/" passHref><Image src="/img/footer/twitter.svg" width={30} height={30}  alt="twitter"/></Link>
                    </div>
                </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer;