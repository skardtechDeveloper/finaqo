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
                          <td>10.49% p.a. onwards (through Paisabazaar.com)</td>
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
                    <div className="table-content">
                      <p>
                        <strong>
                          <br />
                          Table of Contents
                        </strong>
                      </p>
                      <ul>
                        <li><Link href="#interest">Interest Rates</Link></li>
                        <li><Link href="#com">Compare Interest Rates Offered by Top Lenders</Link></li>
                        <li><Link href="#emi">EMI Calculator</Link></li>
                        <li><Link href="#features">Features &amp; Benefits</Link></li>
                        <li><Link href="#fees">Fees &amp; Charges</Link></li>
                        <li><Link href="#Types">Types of Personal Loan</Link></li>
                        <li><Link href="#eligibility">Eligibility Criteria</Link></li>
                        <li id="interest"><Link href="#docs">Documents Required</Link></li>
                        <li><Link href="#how">How to Improve your Chances of Getting a Personal Loan?</Link></li>
                        <li><Link href="#apply">How to Apply for a Personal Loan</Link></li>
                        <li><Link href="#faq">FAQ</Link></li>
                      </ul>
                    </div>
                    <h2 id="com"><strong>Personal Loan Interest Rates</strong></h2>
                    <p>
                      Currently, personal loan interest rates offered through Paisabazaar.com starts at 10.49% p.a. Some public sector banks may offer personal loans at lower interest rates. The final
                      <Link href="#"> personal loan interest rate</Link>&nbsp;offered by banks and NBFCs will depend on several factors, such as the desired loan amount, credit
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
                          <td><Link href="#">State Bank of India</Link></td>
                          <td width="242">10.90%-15.40%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">HDFC Bank</Link></td>
                          <td width="242">11.00% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Punjab National Bank</Link></td>
                          <td width="242">10.15%-16.70%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">ICICI Bank</Link></td>
                          <td width="242">10.75% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Bank of Baroda</Link></td>
                          <td width="242">10.60%-17.95%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Union Bank of India</Link></td>
                          <td width="242">11.15%-15.25%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Axis Bank</Link></td>
                          <td width="242">10.49% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Bank of India</Link></td>
                          <td width="242">10.10%-14.60%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Indian Bank</Link></td>
                          <td width="242">9.75%-14.75%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Kotak Mahindra Bank</Link></td>
                          <td width="242">10.99% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Central Bank of India</Link></td>
                          <td width="242">10.70%-12.30%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">IndusInd Bank</Link></td>
                          <td width="242">10.49% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">IDBI Bank</Link></td>
                          <td width="242">11.00%-15.50%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Yes Bank</Link></td>
                          <td width="242">10.49% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">UCO Bank</Link></td>
                          <td width="242">12.30%-12.70%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Federal Bank</Link></td>
                          <td width="242">10.49%-17.99%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Bank of Maharashtra</Link></td>
                          <td width="242">9.25%-15.05%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">IDFC FIRST Bank</Link></td>
                          <td width="242">10.49% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Bajaj Finance</Link></td>
                          <td width="242">11.00% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">RBL Bank</Link></td>
                          <td width="242">17.50%-26.00%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Muthoot Finance</Link></td>
                          <td width="242">14.00%-22.00%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Citibank</Link></td>
                          <td width="242">10.75%-16.49%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Tata Capital</Link></td>
                          <td width="242">10.99% onwards</td>
                        </tr>
                        <tr>
                          <td width="278"><Link href="#">Standard Chartered Bank</Link></td>
                          <td width="242">11.49% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">HSBC</Link></td>
                          <td width="242">9.75%-16.00%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Navi Finserv</Link></td>
                          <td width="242">9.90%-45.00%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">StashFin</Link></td>
                          <td width="242">11.99% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Fullerton India</Link></td>
                          <td width="242">11.99% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Faircent</Link></td>
                          <td width="242">12.00% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">KreditBee</Link></td>
                          <td width="242">Up to 29.95%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">MoneyTap</Link></td>
                          <td width="242">36.00% onwards</td>
                        </tr>
                        <tr>
                          <td width="278"><Link href="#">Dhani Loans &amp; Services</Link>&nbsp;(Formerly known as Indiabulls Consumer Finance Ltd.)</td>
                          <td width="242">13.99% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Money View</Link></td>
                          <td width="242">15.96% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">PaySense</Link></td>
                          <td width="242">16.80%-27.60%</td>
                        </tr>
                        <tr>
                          <td><Link href="#">Home Credit</Link></td>
                          <td width="242">24.00% onwards</td>
                        </tr>
                        <tr>
                          <td><Link href="#">CASHe</Link></td>
                          <td width="242">27.00% onwards</td>
                        </tr>
                        <tr id="emi">
                          <td width="278"><Link href="#">HDB Financial Services</Link></td>
                          <td width="242">Up to 36.00%</td>
                        </tr>
                      </tbody>
                    </table>
                    <div><strong>Note:</strong> Rates as of 23 January 2023</div>
                    <div>
                      <div className="vc_empty_space"></div>
                      <div className="bureauBannerShortCode">
                        <Image loading="lazy" alt="bureau meter" title="bureau meter" width={160} height={58} src="/img/PL-Icon_1.jpg.webp" />
                        <p>
                          Get a <strong> Personal Loan Online </strong> at low interest rates
                          <Link target="_blank" rel="nofollow noopener" href="#" title="Apply Now" passHref> Apply Now </Link>
                        </p>
                      </div>
                      <div className="vc_empty_space"></div>
                    </div>
                    <h2>
                      <strong>Personal Loan EMI Calculator<br /> </strong>
                    </h2>
                    <div className="emi-calculator-shortcode">
                      <div className="calc-box">
                        <span className="emi-heading">Personal Loan EMI Calculator</span>
                        <div className="row">
                          <div className="input-box left-align">
                            <label>Amount</label>
                            <div><span>₹</span> <input id="principal_amount" type="tel" defaultValue="500000" placeholder="Enter amount" /></div>
                          </div>
                        </div>
                        <div className="row half">
                          <div className="input-box">
                            <label>Interest Rate</label>
                            <div><input type="tel" id="rate_of_interest_w" defaultValue="10.50" placeholder="Enter interest rate" /> <span>%</span></div>
                          </div>
                          <div className="input-box">
                            <label>Tenure</label>
                            <div><input type="tel" id="tennure" defaultValue="5" placeholder="Enter tenure" /> <span>Year(s)</span></div>
                          </div>
                        </div>
                        <button className="calc-btn" type="button">Calculate</button>
                      </div>
                      <div className="res-box">
                        <span className="emi-heading">Personal Loan EMI Calculator</span>
                        <div>
                          <p>Monthly EMI <b id="emi_amount">₹ 15,622</b></p>
                          <p>Total Amount Payble <b id="total_amount_paid">₹ 5,62,395</b><span>(Principal + interest)</span></p>
                          <p>Principal Amount <b id="principal_amount_paid">₹ 5,00,000</b></p>
                          <p>Total Interest Payble <b id="total_interest_paid">₹ 62,395</b></p>
                        </div>
                      </div>
                      <input type="hidden" defaultValue="1000" id="calcw_emi" />
                    </div>
                    <div className="vc_empty_space"></div>
                    <h2><strong>Features &amp; Benefits</strong></h2>
                    <ul>
                      <li>Collateral-free loan</li>
                      <li>No end-use restriction</li>
                      <li>Interest rate starting from 10.49% p.a. (through Paisabazaar.com)</li>
                      <li>Loan amount of up to Rs. 40 lakh, which can exceed depending on lenders’ discretion</li>
                      <li id="fees">Repayment tenure up to 60 months, which may exceed on case to case basis</li>
                      <li>Minimal documentation</li>
                      <li>Quick disbursals</li>
                    </ul>
                    <h2><strong>Fees &amp; Charges</strong></h2>
                    <p>
                      The fees and charges of personal loans usually vary from lender to lender and from case to case. The aforementioned table will give you a fair idea of the
                      <Link href="#" passHref>fees and charges related to personal loans</Link>:
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
                    <h2>
                      <strong>
                        <Link href="#leadFormStarts">
                          <Image
                            loading="lazy"
                            className="aligncenter wp-image-267429 size-full"
                            src="/img/PL-Banner_5.jpg.webp"
                            alt="Personal Loan"
                            width={795}
                            height={250}
                            sizes="(max-width: 795px) 100vw, 795px"
                          />
                        </Link>
                      </strong>
                    </h2>
                    <h2><strong>Types of Personal Loans</strong></h2>
                    <ul>
                      <li>
                        <Link href="#" target="_blank" rel="noopener"><strong>Instant Personal Loans&nbsp;</strong></Link>are approved instantly within
                        a few minutes with none to minimal document requirements. Personal loans with instant disbursals are usually offered by banks and NBFCs to their select customers on the basis of their credit profiles.
                      </li>
                      <li>
                        <Link href="#" target="_blank" rel="noopener"><strong>Short-term Personal Loans</strong></Link>&nbsp;have short repayment periods ranging from a few
                        days to 12 months.
                      </li>
                      <li>
                        <strong><Link href="#" target="_blank" rel="noopener">Pre-approved Personal Loans</Link>&nbsp;</strong>are usually offered by banks and NBFCs to
                        their existing customers on the basis of their credit history, income, employer’s profile, etc.
                      </li>
                      <li>
                        <strong><Link href="#" target="_blank" rel="noopener">Consumer Durable Loans</Link>&nbsp;</strong>can be used to purchase any consumer durable items
                        like smartphones, furniture, microwave, etc. The purchase amount gets divided into EMIs and can be repaid within the tenure decide. Some products may require a down payment or a processing fee while
                        others may not.
                      </li>
                      <li>
                        <Link href="#" target="_blank" rel="noopener"><strong>Personal Loan Balance Transfer&nbsp;</strong></Link>facility allows borrowers to
                        transfer their outstanding personal loan to a new lender for lower interest rates or better loan terms. However, transfer your outstanding personal loan only when the savings made through the transfer
                        outweighs the cost of the loan transfer.
                      </li>
                      <li>
                        <Link href="#" target="_blank" rel="noopener"><strong>Personal Loan Top Up</strong></Link>&nbsp;is offered to existing personal loan borrowers who need
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
                    <div className="vc_empty_space"></div>
                    <div className="bureauBannerShortCode">
                      <Image loading="lazy" alt="bureau meter" title="bureau meter" width={160} height={58}
                        src="/img/PL-Icon_1.jpg.webp" />
                      <p>
                        Get a <strong>Personal Loan Online </strong>at low interest rates
                        <Link target="_blank" href="#" title="Apply Now"> Apply Now </Link>
                      </p>
                    </div>
                    <div className="vc_empty_space"></div>
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
                        Check for inaccuracies in your credit report, as they might adversely impact your <Link href="#">credit score</Link> and thereby, reduce the chances of loan
                        approval
                      </li>
                      <li id="apply">Compare the personal loan offers available from banks and NBFCs before finalizing any loan deal</li>
                      <li>Apply for the loan from a bank/NBFC where you have the highest chances of approval</li>
                      <li>Avoid making multiple loan applications within a short span of time</li>
                    </ul>
                    <h2 className="hd"><strong>How to Apply for a Personal Loan online?</strong></h2>
                    <p>Paisabazaar.com allows customers to compare personal loan offers from 30+ banks and NBFCs and apply for the best suited offer online with ease. The steps for the same are as below:</p>
                    <ul>
                      <li>Enter your mobile number&nbsp;in the personal loan form.</li>
                      <li>Enter personal details&nbsp;like desired loan amount, employment type, net monthly income, current residing city, bank where you receive your salary and company name.</li>
                      <li id="faq">Provide OTP for verification&nbsp;and&nbsp;check for available pre-approved personal loan offers.</li>
                      <li>For viewing more personal loan offers,&nbsp;provide more details&nbsp;like total EMI you pay currently, PAN, total work experience, tenure in current organisation, etc.</li>
                      <li>Compare and apply&nbsp;for personal loan offer that best suits your requirements</li>
                    </ul>
                    <div className="vc_empty_space"></div>
                    <div className="bureauBannerShortCode">
                      <Image loading="lazy" alt="bureau meter" title="bureau meter" width={160} height={58}
                        src="/img/PL-Icon_1.jpg.webp" />
                      <p>
                        Get a <strong>Personal Loan Online </strong>at low interest rates
                        <Link target="_blank" href="#" title="Apply Now"> Apply Now </Link>
                      </p>
                    </div>
                    <div className="vc_empty_space"></div>
                    <h3><strong>FAQ</strong></h3>
                    <p><strong>1. What is the minimum credit score required to get a personal loan?</strong></p>
                    <p>
                      <strong>Ans.</strong> It depends on the eligibility criteria set by the lender. Most lenders do not specify a minimum credit score for a personal loan. Some lenders might lend to applicants with low
                      credit scores (less than 750) but the interest rate applicable is usually higher in such cases.
                    </p>
                    <p>
                      <strong>Read more: </strong>How to build/improve your credit score using&nbsp;
                      <Link href="#">Step UP Credit Card&nbsp;</Link> co-branded with SBM Bank India Ltd.
                    </p>
                    <p><strong>2. Can I cancel a personal loan after the loan amount is disbursed?</strong></p>
                    <p>
                      <strong>Ans.</strong> In some cases, you may cancel a personal loan after disbursal subject to the terms and conditions of the lender. Loan cancellation will lead to cancellation charges and processing
                      fees. Please note that all banks do not allow loan cancellation once the amount is disbursed. However, you can always prepay the loan amount as per the terms and conditions of the bank and save on the
                      interest component.
                    </p>
                    <p><strong>3. What is the minimum salary required to get a personal loan?</strong></p>
                    <p>
                      <strong>Ans.</strong> The minimum monthly salary required to avail personal loans varies from lender to lender. However, for large lenders like private and public sector banks, the minimum income
                      eligibility is Rs. 15,000 per month and above.
                    </p>
                    <p><strong>4. Can I get a personal loan being a pensioner, if I have a pension account with one of the leading banks in India?</strong></p>
                    <p>
                      <strong>Ans.</strong> Yes, you can get a personal loan even as a pensioner, if you have a pension account with one of the leading banks. However, you should ensure that the bank where you receive pension
                      funds offers personal loans to pensioners and you meet the eligibility criteria as specified by your prospective lender.
                    </p>
                    <p><strong>5. Can a student apply for a personal loans?</strong></p>
                    <p>
                      <strong>Ans.</strong> Generally, students are not eligible for a personal loan as a stable source of income and a good credit score are necessary prerequisites. However, if you have a stable monthly
                      income and fulfill the lender’s other eligibility criteria, you may easily avail of a personal loans.
                    </p>
                    <p><strong>6. Can I get a personal loan if I have a home loan?</strong></p>
                    <p>
                      <strong>Ans.</strong> Yes, you can apply for a personal loans even if you already have a <Link href="https://www.paisabazaar.com/home-loan/" target="_blank" rel="noopener">home loan</Link>. However, the chances
                      of getting the loan approved will depend on whether you have adequate repayment capacity to repay the proposed personal loan.
                    </p>
                    <p><strong>7. Can I get a personal loan without a salary slip?</strong></p>
                    <p>
                      <strong>Ans.</strong> Yes, you can get a personal loan without providing salary slips. You can submit your bank account statement/ a copy of Form 16/ employee certificate from the employer, etc. as proof
                      of income to fulfill the eligibility criteria. However, it is always recommended to confirm the list of required documents with the lender as it may vary from one bank to another.
                    </p>
                    <p><strong>8. Can I use a personal loan for marriage purposes?</strong></p>
                    <p>
                      <strong>Ans.</strong> Yes, you can avail personal loan to meet marriage-related expenditure as personal loans come with flexible end-use. Some lenders even provide personal loans specifically named as
                      wedding/ marriage loans.
                    </p>
                    <p><strong>9. Can I take a personal loan from two different banks at the same time?</strong></p>
                    <p>
                      <strong>Ans.</strong> Yes, you may avail personal loans from two different lenders at the same time. However, it is not advised to do so as it will not only affect your credit score but also increase your
                      EMI payout. It will be better to take one personal loan of a larger amount than two personal loans of smaller amounts. This way you can pay lower EMIs for a longer tenure and also improve your credit
                      score. Moreover, you will save upon processing fees and other loan-related charges.
                    </p>
                    <p><strong>10. How do I cancel my personal loan after the loan is disbursed?</strong></p>
                    <p>
                      <strong>Ans. </strong>You cannot cancel your personal loan after the loan disbursement. However, you can prepay the loan amount. However, prepaying the personal loan may attract some prepayment or
                      foreclosure charges, depending on the lender’s loan policies. Some lenders may also restrict personal loan prepayment or foreclosure till the repayment of a pre-determined number of EMIs.
                    </p>
                    <p><strong>11. Are there any charges for prepaying my personal loan?</strong></p>
                    <p>
                      <strong>Ans. </strong>Prepayment charges of up to 5% plus applicable taxes are levied on fixed rate personal loans. In case of floating rate personal loans, as per RBI’s directives, no prepayment or
                      foreclosure charges will be applicable.
                    </p>
                    <p><strong>12. Do I need to provide any security or collateral to apply for a personal loans?</strong></p>
                    <p>
                      <strong>Ans.&nbsp; </strong>Traditionally, personal loans are unsecured loans, which implies that the borrower does not need to pledge collateral or security to avail the loan. However, some lenders also
                      offer secured personal loans wherein the borrower needs to provide security or collateral to avail the loan. An applicant should opt for a secured personal loan when he is ineligible for availing
                      unsecured personal loan or is charged very high interest rates for availing unsecured personal loan.
                    </p>
                    <p><strong>13. What are the tenure options for a personal loan?</strong></p>
                    <p>
                      <strong>Ans.</strong> The tenure of a regular personal loan usually ranges from 1 year to 5 years. However, some lenders like SBI, Tata Capital and Bajaj Finance offers personal loans for up to 7 years.
                    </p>
                    <p>&nbsp;</p>
                  </div>
                </div>
              </section>
            </div>
            <aside className="l-sidebar">
              <div>
                <h3 className="widgettitle">Personal Loan Pages</h3>
                <div className="textwidget">
                  <ul>
                    <li><Link href="#">Personal Loan Interest Rate</Link></li>
                    <li><Link href="#">Personal Loan Eligibility</Link></li>
                    <li><Link href="#">Personal Loan Documents Required</Link></li>
                    <li><Link href="#">Personal Loan Status</Link></li>
                    <li><Link href="#">Personal Loan EMI Calculator</Link></li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="widgettitle">&nbsp;Personal Loan Providers</h3>
                <div className="textwidget">
                  <ul>
                    <li><Link href="#">HDFC Personal Loan</Link></li>
                    <li><Link href="#">Axis Bank Personal Loan</Link></li>
                    <li><Link href="#">ICICI Personal Loan</Link></li>
                    <li><Link href="#">Bajaj Finserv Personal Loan</Link></li>
                    <li><Link href="#">Tata Capital Personal Loan</Link></li>
                    <li><Link href="#">Indusind Bank Personal Loan</Link></li>
                    <li><Link href="#">Standard Chartered Personal Loan</Link></li>
                    <li><Link href="#">Fullerton India Personal Loan</Link></li>
                    <li><Link href="#">IDFC First Bank Personal Loan</Link></li>
                    <li><Link href="#">Aditya Birla Personal Loan</Link></li>
                  </ul>
                </div>
              </div>
              <p>&nbsp;</p>
              <div>
                <h3 className="widgettitle">&nbsp;Personal Loan Types</h3>
                <div className="textwidget">
                  <ul>
                    <li><Link href="#">Agriculture Loan</Link></li>
                    <li><Link href="#">Consumer Loan</Link></li>
                    <li><Link href="#">Flexi Loan</Link></li>
                    <li><Link href="#">Marriage Loans</Link></li>
                    <li><Link href="#">NRI Personal Loan</Link></li>
                    <li><Link href="#">Personal Loan Balance Transfer</Link></li>
                    <li><Link href="#">Personal Loan For Salaried Employees</Link></li>
                    <li><Link href="#">Secured Loans</Link></li>
                    <li><Link href="#">Short Term Loans</Link></li>
                    <li><Link href="#">Term Loan</Link></li>
                    <li><Link href="#">Top Up Loan</Link></li>
                    <li><Link href="#">Loan Against LIC Policy</Link></li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  )
}

export default personalLoan;