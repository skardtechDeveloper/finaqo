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
            <p className="beforeLeadFormStrip">Finaqo brings personal loan offers from 30+ banks and NBFCs to cater to diverse consumer segments. This allows consumers to compare the key loan features offered by top lenders and then, apply for the best option available on their credit profiles. We have also entered into special partnerships with several banks and NBFCs to offer pre-approved/pre-qualified personal loans with end-to-end digital processing and instant disbursal.</p>
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
                        <input type="tel" className="mobileNumber" id="mobileNumber" required placeholder="Bank will contact you on this Number" autoComplete="off" />
                        <label htmlFor="mobileNumber" className="control-label">Mobile Number</label>
                        <i className="bar"></i>
                        <div className="form-help"><p className="error-holder">Error: This is a mandatory field</p></div>
                      </div>
                      <div className="form-radio has-value">
                        <label>Employment Type</label>
                        <div>
                          <div className="radio first">
                            <label>
                              <input type="radio" name="empType" defaultChecked defaultValue="1" />
                              <i className="helper"></i>
                              <span>Salaried</span>
                            </label>
                          </div>
                          <div className="radio">
                            <label>
                              <input type="radio" name="empType" defaultValue="3" />
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
          <div className="main-bottom">
            <div className="l-content">
              <section className="l-section">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <table className="fstTbl">
                      <tbody>
                        <tr>
                          <td colSpan={2} style={{ textAlign: "center" }}><strong>Personal Loan Highlights</strong></td>
                        </tr>
                        <tr>
                          <td><strong>Interest Rate</strong></td>
                          <td>10.49% p.a. onwards (through Finaqo.in)</td>
                        </tr>
                        <tr>
                          <td><strong>Loan Amount</strong></td>
                          <td>Can go up to Rs 40 lakh; some lenders may offer higher loan amounts</td>
                        </tr>
                        <tr>
                          <td><strong>Tenure</strong></td>
                          <td>Up to 5 years (some lenders offer repayment period till 7 years)</td>
                        </tr>
                        <tr>
                          <td><strong>Processing Fees</strong></td>
                          <td>0.5% to 4% of loan amount (may vary across lenders)</td>
                        </tr>
                      </tbody>
                    </table>
                    <h2 id="com"><strong>Personal Loan Interest Rates</strong></h2>
                    <p>
                      Currently, personal loan interest rates offered through Finaqo.in starts at 10.49% p.a. Some public sector banks may offer personal loans at lower interest rates. The final
                      <Link href="personal-loan/#"> personal loan interest rate</Link>&nbsp;offered by banks and NBFCs will depend on several factors, such as the desired loan amount, credit
                      score, income, etc.
                    </p>
                    <h3><strong>Comparing Interest Rates of Top Banks &amp; NBFCs in India</strong></h3>
                    <table>
                      <tbody>
                        <tr>
                          <td width="278"><strong>Lenders</strong></td>
                          <td width="242"><strong>Interest Rate (p.a.)</strong></td>
                        </tr>
                        <tr>
                          <td><Link href="/personal-loan/#">HDFC Bank</Link></td>
                          <td width="242">11.00% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="/personal-loan/#">Axis Bank</Link></td>
                          <td width="242">10.49% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="/personal-loan/#">Kotak Mahindra Bank</Link></td>
                          <td width="242">10.99% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="/personal-loan/#">IndusInd Bank</Link></td>
                          <td width="242">10.49% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="/personal-loan/#">Yes Bank</Link></td>
                          <td width="242">10.49% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="/personal-loan/#">IDFC FIRST Bank</Link></td>
                          <td width="242">10.49% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="/personal-loan/#">Bajaj Finance</Link></td>
                          <td width="242">11.00% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="/personal-loan/#">Tata Capital</Link></td>
                          <td width="242">10.99% onwards</td>
                        </tr>
                        <tr>
                          <td width="278"><Link href="/personal-loan/#">Standard Chartered Bank</Link></td>
                          <td width="242">11.49% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="/personal-loan/#">Fullerton India</Link></td>
                          <td width="242">11.99% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="/personal-loan/#">PaySense</Link></td>
                          <td width="242">16.80%-27.60%</td>
                        </tr>
                      </tbody>
                    </table>
                    <div><strong>Note:</strong> Rates as of 23 January 2023</div>
                    <h2><strong>Features &amp; Benefits</strong></h2>
                    <ul>
                      <li>Collateral-free loan</li>
                      <li>No end-use restriction</li>
                      <li>Interest rate starting from 10.49% p.a. (through Finaqo.in)</li>
                      <li>Loan amount of up to Rs. 40 lakh, which can exceed depending on lenders’ discretion</li>
                      <li id="fees">Repayment tenure up to 60 months, which may exceed on case to case basis</li>
                      <li>Minimal documentation</li>
                      <li>Quick disbursals</li>
                    </ul>
                    <h2><strong>Fees &amp; Charges</strong></h2>
                    <p>
                      The fees and charges of personal loans usually vary from lender to lender and from case to case. The aforementioned table will give you a fair idea of the
                      <Link href="/personal-loan/#" passHref>fees and charges related to personal loans</Link>:
                    </p>
                    <table>
                      <tbody>
                        <tr>
                          <td><strong>Particulars</strong></td>
                          <td><strong>Charges</strong></td>
                        </tr>
                        <tr>
                          <td>Loan Processing Fees</td>
                          <td>0.5% to 4% of loan amount</td>
                        </tr>
                        <tr>
                          <td>Pre-payment/Part-payment/Foreclosure Charges</td>
                          <td>
                            For Floating Rate – Nil<br />
                            For Fixed Rate – Usually around 2% – 5% on the principal outstanding
                          </td>
                        </tr>
                        <tr>
                          <td>Loan Cancellation</td>
                          <td>Usually around Rs 3,000</td>
                        </tr>
                        <tr>
                          <td>Stamp Duty Charges</td>
                          <td>As per actuals</td>
                        </tr>
                        <tr>
                          <td>Legal Fees</td>
                          <td>As per actuals</td>
                        </tr>
                        <tr>
                          <td>Penal Charges</td>
                          <td>Usually @ 2% per month; 24% p.a.</td>
                        </tr>
                        <tr>
                          <td>EMI/Cheque Bounce</td>
                          <td>Around Rs 400 per bounce</td>
                        </tr>
                      </tbody>
                    </table>
                    <p>&nbsp;</p>
                    <p>
                      Other fees and charges that lenders may levy on your personal loan include documentation charges, verification charges, duplicate statement charges, NOC certificate charges, swap and
                      <span id="Types">late fees</span>.
                    </p>
                    <h2><strong>Types of Personal Loans</strong></h2>
                    <ul>
                      <li>
                        <Link href="/personal-loan/#"><strong>Instant Personal Loans&nbsp;</strong></Link>are approved instantly within
                        a few minutes with none to minimal document requirements. Personal loans with instant disbursals are usually offered by banks and NBFCs to their select customers on the basis of their credit profiles.
                      </li>
                      <li>
                        <Link href="/personal-loan/#"><strong>Short-term Personal Loans</strong></Link>&nbsp;have short repayment periods ranging from a few
                        days to 12 months.
                      </li>
                      <li>
                        <strong><Link href="/personal-loan/#">Pre-approved Personal Loans</Link>&nbsp;</strong>are usually offered by banks and NBFCs to
                        their existing customers on the basis of their credit history, income, employer’s profile, etc.
                      </li>
                      <li>
                        <strong><Link href="/personal-loan/#">Consumer Durable Loans</Link>&nbsp;</strong>can be used to purchase any consumer durable items
                        like smartphones, furniture, microwave, etc. The purchase amount gets divided into EMIs and can be repaid within the tenure decide. Some products may require a down payment or a processing fee while
                        others may not.
                      </li>
                      <li>
                        <Link href="/personal-loan/#"><strong>Personal Loan Balance Transfer&nbsp;</strong></Link>facility allows borrowers to
                        transfer their outstanding personal loan to a new lender for lower interest rates or better loan terms. However, transfer your outstanding personal loan only when the savings made through the transfer
                        outweighs the cost of the loan transfer.
                      </li>
                      <li>
                        <Link href="/personal-loan/#"><strong>Personal Loan Top Up</strong></Link>&nbsp;is offered to existing personal loan borrowers who need
                        additional funds to meet their financial requirements. However, this loan facility is only offered to select existing personal loan borrowers having satisfactory loan repayment history and/or have
                        completed a specified number of EMIs.
                      </li>
                    </ul>
                    <ul>
                      <li id="eligibility">
                        <strong>Personal loan for Education:&nbsp;</strong>Individuals requiring funds for pursuing higher education in India and abroad, vocational courses, etc., and are unable to get a conventional
                        education loan can avail of a&nbsp;personal loan for higher education.
                      </li>
                      <li>
                        <strong>Debt Consolidation Loan:</strong>&nbsp;Individuals struggling with multiple debt obligations can consolidate them into a single loan taken at a reduced interest rate and/or for longer tenures.
                        The main purpose to&nbsp;apply for Debt Consolidation Loan&nbsp;is to reduce the interest cost and EMI burden.
                      </li>
                    </ul>
                    <h2><strong>Personal Loan Eligibility Criteria</strong></h2>
                    <ul>
                      <li><strong>Age: </strong>18 – 60 years</li>
                      <li><strong>Salary: </strong>At least Rs. 15,000 per month for salaried customers</li>
                      <li><strong>Income: </strong>At least Rs. 5 lakh&nbsp;p.a. for self-employed customers</li>
                      <li><strong>Credit Score: </strong>Preferably 750 and above as having higher credit scores improve chances of loan approval</li>
                      <li><strong>Employment Stability: </strong>At least&nbsp;2 years with a minimum 1 year of work experience in the same job for salaried</li>
                      <li id="docs"><strong>Business Continuity: </strong>At least 2 years of business continuity for self-employed professionals</li>
                      <li><strong>Employment Type: </strong>Salaried employees working with reputed organizations, MNCs, Private and Public Limited Companies, Govt. organizations, PSUs, and large enterprises</li>
                    </ul>
                    <h2><strong>Documentation&nbsp;for Personal Loan</strong></h2>
                    <ul>
                      <li><strong>Identity Proof: </strong>Passport/PAN Card/ Voter’s ID/ Aadhaar Card/ Driving License</li>
                      <li><strong>Address Proof: </strong>Passport/ Aadhaar Card/ Lease/ Property Purchase Agreement/ Utility Bills (not more than 3 months old)/ Passport/ Driving License</li>
                      <li><strong>Income Proof For Salaried Individuals: </strong>Salary Slips/ Bank Account Statement/ Form 16</li>
                      <li id="how"><strong>Income Proof For Self-employed Professionals: </strong>Previous Years’ ITR/ P&amp;L Statement and Balance Sheet/ Bank Account Statement</li>
                      <li>
                        <strong>Business Proof For Self-employed Individuals: </strong>Business Incorporation Certificate/ Professional Degree/ Certificate of Practice/ Partnership Deed/ GST Registration and Filing
                        Documents/ MOA &amp; AOA/ Shop Act License
                      </li>
                    </ul>
                    <h2><strong>How to Improve your Chances of Getting a Personal Loan?</strong></h2>
                    <p>A few ways of improving your chances of personal loan approval are:</p>
                    <ul>
                      <li>Maintain your CIBIL score above 750</li>
                      <li>
                        Check for inaccuracies in your credit report, as they might adversely impact your <Link href="/personal-loan/#">credit score</Link> and thereby, reduce the chances of loan
                        approval
                      </li>
                      <li id="apply">Compare the personal loan offers available from banks and NBFCs before finalizing any loan deal</li>
                      <li>Apply for the loan from a bank/NBFC where you have the highest chances of approval</li>
                      <li>Avoid making multiple loan applications within a short span of time</li>
                    </ul>
                    <h2 className="hd"><strong>How to Apply for a Personal Loan online?</strong></h2>
                    <p>Finaqo.in allows customers to compare personal loan offers from 30+ banks and NBFCs and apply for the best suited offer online with ease. The steps for the same are as below:</p>
                    <ul>
                      <li>Enter your mobile number&nbsp;in the personal loan form.</li>
                      <li>Enter personal details&nbsp;like desired loan amount, employment type, net monthly income, current residing city, bank where you receive your salary and company name.</li>
                      <li id="faq">Provide OTP for verification&nbsp;and&nbsp;check for available pre-approved personal loan offers.</li>
                      <li>For viewing more personal loan offers,&nbsp;provide more details&nbsp;like total EMI you pay currently, PAN, total work experience, tenure in current organisation, etc.</li>
                      <li>Compare and apply&nbsp;for personal loan offer that best suits your requirements</li>
                    </ul>
                    <p>&nbsp;</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default personalLoan;