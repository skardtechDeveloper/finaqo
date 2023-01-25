import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const personalLoan = () => {
  return (
    <>
      <Head>
        <title>Personal Loan - Finaqo</title>
        <meta name="description" content="ssss" />
      </Head>
      <main className="main">
        <div className="container">
          <div className="main-top">
            <h1 className="headline">Personal Loan</h1>
            <p className="beforeLeadFormStrip">Paisabazaar brings personal loan offers from 30+ banks and NBFCs to cater to diverse consumer segments. This allows consumers to compare the key loan features offered by top lenders and then, apply for the best option available on their credit profiles. We have also entered into special partnerships with several banks and NBFCs to offer pre-approved/pre-qualified personal loans with end-to-end digital processing and instant disbursal.</p>
          </div>
          <div id="leadFormStarts">
            <div id="personalLoanV2" className="pl-short-lead-form">
              <Image width={143} height={119} loading="lazy" src="/img/pl-illustration.webp" alt="illustration" />
              <div>
                <span className="heading-text">Unlock Best <span>Personal Loan</span> Offers From 30+ Lenders</span>
                <form className="material-form" >
                  <div className="form-fields">
                    <div>
                      <div className="form-group">
                        <input type="tel" className="mobileNumber" id="mobileNumber"  placeholder="Bank will contact you on this Number" autoComplete="off"  />
                        <label htmlFor="mobileNumber" className="control-label">Mobile Number</label>
                        <i className="bar"></i>
                        <div className="form-help"><p className="error-holder">Error: This is a mandatory field</p></div>
                      </div>
                      <div className="form-radio has-value">
                        <label>Employment Type</label>
                        <div>
                          <div className="radio first">
                            <label>
                              <input type="radio" name="empType"  value="1" />
                              <i className="helper"></i>
                              <span>Salaried</span>
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input type="radio" name="empType" value="3" />
                              <i className="helper"></i>
                              <span>Self Employed</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="puckarConsent" className="checkbox">
                      <label htmlFor="check_term_condition">
                        <input type="checkbox" defaultChecked id="check_term_condition" />
                        <i className="helper"></i>
                        <span id="contract-view" className="tnc__text">
                          By submitting this form, you have read and agree to the
                          <Link href="/terms-of-use" target="_blank" rel="nofollow noopener" className="clr-blue4 TdecorN" passHref> Terms of Use </Link> &amp;
                          <Link href="/privacy-policy" target="_blank" rel="nofollow noopener" className="clr-blue4 TdecorN" passHref> Privacy Policy </Link>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="form-action">
                    <button className="submit-btn" type="button">Apply Now</button>
                  </div>
                </form>
              </div>
            </div>

            <div className="clear"></div>
          </div>
        </div>

      </main>
    </>
  )
}

export default personalLoan;