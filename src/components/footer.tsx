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
                <Link href="/" passHref><Image src="/img/logo.png" placeholder="blur" blurDataURL={'/img/logo.png'} width={154} height={154} alt="Logo-white-Paisabazaar" /></Link>
              </div>
              <div className="col-md-7 footer-links">
                <div className="row">
                  <div className="col-6 col-md-4">
                    <ul>
                      <li><Link href="/personal-loan" passHref>Personal Loan</Link></li>
                      <li><Link href="/home-loan" passHref>Home Loan</Link></li>
                      <li><Link href="/business-loan" passHref>Business Loan</Link></li>
                      <li><Link href="/over-draft" passHref>Over Draft</Link></li>
                    </ul>
                  </div>

                  <div className="col-6 col-md-4">
                    <ul>
                      <li><Link href="/loan-against-property" passHref>Loan Against Property</Link></li>
                      <li><Link href="/cibil-credit-report" passHref>Personal Loan Transfer</Link></li>
                      <li><Link href="/credit-card" passHref>Home Loan Transfer</Link></li>
                      <li><Link href="/stepupcard" passHref>Credit Card Blance Transfer</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 contact-links">
                {/* <div className="contact-list">
                  <div className="list-detail-left">
                    <Image src="/img/footer/phone.svg" width={20} height={20} alt="Phone" />
                  </div>
                  <div className="list-detail-right">
                    <h6>Call Us <br /> +91-987654321</h6>
                  </div>
                </div>
                <div className="contact-list">
                  <div className="list-detail-left">
                    <Image src="/img/footer/mail.svg" width={20} height={20} alt="Mail" />
                  </div>
                  <div className="list-detail-right">
                    <h6>Mail Us <br /> info@finaqo.in</h6>
                  </div>
                </div>
                <div className="contact-list">
                  <div className="list-detail-left">
                    <Image src="/img/footer/location.svg" width={20} height={20} alt="Location" />
                  </div>
                  <div className="list-detail-right">
                    <h6>Location <br /> Delhi</h6>
                  </div>
                </div>
                <div className="contact-list">
                  <div className="list-detail-left">
                    <Image src="/img/footer/stopwatch.svg" width={20} height={20} alt="24x7" />
                  </div>
                  <div className="list-detail-right">
                    <h6>Time <br /> 24*7 All Day</h6>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="terms-policy-links">
          <div className="container">
            <div className="row">
              <div className="offset-md-2 col-md-8">
                <div className="pb-legal-links">
                  <Link href="/privacy-policy" passHref>Privacy Policy</Link>
                  <Link href="/terms-of-use" passHref>Terms of Use</Link>
                  <Link href="/disclaimer" passHref>Disclaimer</Link>
                  <Link href="/intellectual-property-policy" passHref>Intellectual Policy</Link>
                </div>
              </div>
              <div className="col-md-2">
                <div className="pb-social-links">
                  <Link target="_blank" rel="nofollow noopener" href="https://www.facebook.com/" passHref><Image src="/img/footer/facebook.svg" width={30} height={30} alt="facebook" /></Link>
                  <Link target="_blank" rel="nofollow noopener" href="https://in.linkedin.com/" passHref><Image src="/img/footer/linkedin.svg" width={30} height={30} alt="linkedin" /></Link>
                  <Link target="_blank" rel="nofollow noopener" href="https://twitter.com/" passHref><Image src="/img/footer/twitter.svg" width={30} height={30} alt="twitter" /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-info">
          <div className="container">
            <div className="row">
              <div>
                <p>**Discount is offered by the Insurance company as approved by IRDAI for the product under File &amp; Use guidelines <br />#On the basis of your profile</p>
                <p>FINAQO FINSERVE PRIVATE LIMITED | CIN: U67100UP2022PTC168776 | Registered Office - G-13,3rd Floor,Sector-3, Noida, Uttar Pradesh - 201301 Tel no. : 0120-4459361 Email ID: info@finaqo.in </p>
                <p>Copyright ?? 2023 Finaqo | All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;