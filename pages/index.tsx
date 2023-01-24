import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {


  return (
    <>
      <Head>
        <title>Home - Finaqo</title>
        <meta name="description" content="We are New Era Fintech Company Finaqo is the fintech startup.We integrate our acute understanding of the marketplace with digital technology, to help you find the best financial products most suited to your needs.  Contact Us Apply Now Amazing Offer Best deals. Instant approvals. That’s the Finaqo guarantee. Home Loan From 30 Lakhs Read More … Home Read More »" />
      </Head>
      <main className="main">
        <section className="homebanner">
          <Carousel>
            <Carousel.Item>
              <div className="itemImg">
                <Image width={490} height={336}
                  className="d-block"
                  src="/img/creditcard.jpg"
                  alt="First slide"
                  priority
                />
              </div>
              <Carousel.Caption>
                <div className="bnr-content">
                  <h1 className="display-d mt52"><strong>Earn 7.25% interest on your FD &amp; </strong><br />
                    <span className="w80">Get a lifetime free Step Up Credit Card</span>
                  </h1>
                  <ul className="display-d sub-ul-w">
                    <li>Card Limit is 100% of FD Amount</li>
                    <li>Instant Virtual Card</li>
                  </ul>
                  <div className="action-box">
                    <div className="apply-now">Apply Now</div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="itemImg">
                <Image width={490} height={336}
                  className="d-block"
                  blurDataURL="/img/loan.jpg"
                  src="/img/loan.jpg"
                  alt="Second slide"
                />
              </div>

              <Carousel.Caption>
                <div className="bnr-content">
                  <h1 className="display-d mt52"><strong>Endless Possibilities of Loans </strong><br />
                    <span className="w80">Your instant cash is just a few clicks away</span>
                  </h1>
                  <div className="action-box">
                    <div className="apply-now">Apply Now</div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="itemImg">
                <Image width={490} height={336}
                  className="d-block"
                  src="/img/creditcardscore.jpg"
                  alt="Third slide"
                />
              </div>

              <Carousel.Caption>
                <div className="bnr-content">
                  <h1 className="display-d mt52"><strong>Your Credit Score & Report </strong><br />
                    <span className="w80"><s>worth ₹1,200 </s>&nbsp;<span> Absolutely FREE</span></span>
                  </h1>
                  <p>Your credit score is more than just a number. It’s the key to help you unlock the doors to the best loans & credit card offers available</p>
                  <div className="action-box">
                    <div className="apply-now creditreport">Get Free Credit Report</div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
        <section className="products-section">
          <div className="container">
            <div className="section-title mb16 m-hidden">
              <h3>Credit Products</h3>
            </div>
            <div className="our-products row" id="ourProducts">
              <div className="col-3 col-md-4 col-lg-3 col-xl-3 ord-6">
                <a href="/cards-lite">
                  <div className="pb-product inactive">
                    <h1 className="product-name">Credit Cards</h1>
                    <p className="product-desc">From 35+ options, choose a card matching your lifestyle &amp; needs</p>
                    <span className="m-hidden bestTag">Get Best Offers <span><Image width={12} height={10} src="/img/blue-right-arrow.svg" alt="blue arrow" /></span></span>
                    <div className="product-icon">
                      <svg width="60" height="60" shapeRendering="geometricPrecision" className="mtIcon">
                        <g fill="none" fillRule="evenodd">
                          <path d="M47.8639795 42.9308789H12.5512657c-1.08226201 0-1.96060244-.8695312-1.96060244-1.9429687V28.407832H49.8239909v12.5800782c0 1.0734375-.8777494 1.9429687-1.9600114 1.9429687" fill="#ED6262"></path>
                          <path fill="#FFF" d="M10.59107701 28.4080078H49.8244047v-4.34472655H10.59107701z"></path>
                          <path d="M49.8242273 24.06298828H10.59089969v-3.53378906c0-1.07285156.87774936-1.94355469 1.96001136-1.94355469H47.864216c1.082262 0 1.9600113.87070313 1.9600113 1.94355469v3.53378906z" fill="#ED6262"></path>
                          <path d="M49.8242273 31.6778906v9.3134766c0 1.0710937-.8759761 1.9394531-1.9570559 1.9394531H12.54854675c-1.08167093 0-1.95764706-.8683594-1.95764706-1.9394531V24.06304688H44.8455857" stroke="#1B325E" strokeWidth="1.18215402" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M10.5909588 20.52621094c0-1.07167969.87597612-1.940625 1.95764705-1.940625H47.8672305c1.0810798 0 1.9570559.86894531 1.9570559 1.940625v7.88144536H15.45315828M15.43903154 38.0310938h8.23429386M26.9344155 38.0310938h3.7923501M41.6784768 38.0310938h3.7929412" stroke="#1B325E" strokeWidth="1.18215402" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-3 col-md-4 col-lg-3 col-xl-3 ord-7">
                <a href="/personal-loans">
                  <div className="pb-product inactive">
                    <h1 className="product-name">Personal Loan</h1>
                    <p className="product-desc">Select the best offer curated just for you from a wide choice of Banks &amp; NBFC&apos;s</p>
                    <span className="m-hidden bestTag">Check Eligibility <span><Image width={12} height={10} src="/img/blue-right-arrow.svg" alt="blue arrow" /></span></span>
                    <div className="product-icon">
                      <svg width="60" height="60" shapeRendering="geometricPrecision">
                        <g fill="none" fillRule="evenodd">
                          <path d="M19.9610411 22.933525l-1.05972603-5.835375-1.33315069-7.34445833c-.07232876-.39704167.1950685-.77729167.59726028-.84825L45.7462466 4.01148333c.4016438-.07095833.7857534.193375.8575342.589875l.7649315 4.21091667" fill="#84EB9C"></path>
                          <path d="M48.7217534 23.6645583H20.6998356c-.4076712 0-.73863012-.3271666-.73863012-.73125V9.54276667c0-.403.33095892-.73070834.73863012-.73070834h28.0219178c.4082192 0 .7397261.32770834.7397261.73070834V22.9333083c0 .4040834-.3315069.73125-.7397261.73125" fill="#84EB9C"></path>
                          <path d="M22.9554521 13.27555417v6.34616663c.9901369 0 1.7923287.700375 1.7923287 1.5637917 0 .0281667-.0076712.0547083-.009315.0834167h19.9063013c-.0016438-.0287084-.009863-.05525-.009863-.0834167 0-.8634167.8027397-1.5637917 1.7928767-1.5637917.0213699 0 .0416439.004875.0630137.0059584v-6.35808337c-.0213698.00054167-.0416438.00595834-.0630137.00595834-.990137 0-1.7928767-.700375-1.7928767-1.56379167H24.7477808c0 .86341667-.8021918 1.56379167-1.7923287 1.56379167" fill="#84EB9C"></path>
                          <path d="M14.90323288 35.7494125l4.72657534-4.8663333s2.00821918-2.5620834 5.08493148-2.5620834h10.0087671s1.3358905 3.2927917-2.0465753 4.7764167c0 0 4.8263014.0834167 8.8569863-2.2121667 0 0 4.7391781-3.1514166 7.9271233.0417084l-8.7243836 6.5092083s-2.7528767 1.9424167-7.7172602 2.3600417c-.4394521.0362916-.8789041.0720416-1.3167124.1256666l-6.7923287.8314584c-2.030137.248625-4.0739726.37375-6.11945209.37375h-3.88767123" fill="#F5D9BA"></path>
                          <path d="M10.00010959 33.7282375h3.05808219c1.01863014 0 1.84493151.84933333 1.84493151 1.89745833v5.30345834c0 1.048125-.82630137 1.89745833-1.84493151 1.89745833h-3.0580822" fill="#ED6262"></path>
                          <path d="M10.00010959 33.7282375h3.05808219c1.01863014 0 1.84493151.84933333 1.84493151 1.89745833v5.30345834c0 1.048125-.82630137 1.89745833-1.84493151 1.89745833h-3.0580822M14.90323288 35.7494125l4.72657534-4.8663333s2.00821918-2.5620834 5.08493148-2.5620834h10.0087671s1.3358905 3.2927917-2.0465753 4.7764167c0 0 4.8263014.0834167 8.8569863-2.2121667 0 0 4.7391781-3.1514166 7.9271233.0417084l-8.7243836 6.5092083s-2.7528767 1.9424167-7.7172602 2.3600417c-.4394521.0362916-.8789041.0720416-1.3167124.1256666l-6.7923287.8314584c-2.030137.248625-4.0739726.37375-6.11945209.37375h-3.88767123M25.3296986 33.0416208l7.3468493.0563334M48.7217534 23.6645583H20.6998356c-.4076712 0-.73863012-.3271666-.73863012-.73125V9.54276667c0-.403.33095892-.73070834.73863012-.73070834h28.0219178c.4082192 0 .7397261.32770834.7397261.73070834V22.9333083c0 .4040834-.3315069.73125-.7397261.73125z" stroke="#1B325E" strokeWidth="1.0980392" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M22.9554521 13.27555417v6.34616663c.9901369 0 1.7923287.700375 1.7923287 1.5637917 0 .0281667-.0076712.0547083-.009315.0834167h19.9063013c-.0016438-.0287084-.009863-.05525-.009863-.0834167 0-.8634167.8027397-1.5637917 1.7928767-1.5637917.0213699 0 .0416439.004875.0630137.0059584v-6.35808337c-.0213698.00054167-.0416438.00595834-.0630137.00595834-.990137 0-1.7928767-.700375-1.7928767-1.56379167H24.7477808c0 .86341667-.8021918 1.56379167-1.7923287 1.56379167z" stroke="#1B325E" strokeWidth="1.0980392" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M28.7966575 16.490075c0 .6364583-.5216438 1.1515833-1.1649315 1.1515833-.6432876 0-1.1649315-.515125-1.1649315-1.1515833 0-.6359167.5216439-1.1515833 1.1649315-1.1515833.6432877 0 1.1649315.5156666 1.1649315 1.1515833M42.7756712 16.490075c0 .6364583-.5210959 1.1515833-1.1649315 1.1515833-.6432876 0-1.1649315-.515125-1.1649315-1.1515833 0-.6359167.5216439-1.1515833 1.1649315-1.1515833.6438356 0 1.1649315.5156666 1.1649315 1.1515833" fill="#052F5F"></path>
                          <path stroke="#1B325E" strokeWidth="1.0980392" strokeLinecap="round" strokeLinejoin="round" d="M32.6745205 13.52677917h3.7621918M32.6745205 15.3221333h3.7621918M33.7870137 13.52677917c.88 0 1.5934247.85962503 1.5934247 1.92020833 0 1.0605833-.7134247 1.6125417-1.5934247 1.6125417h-1.1123288l2.7413699 2.6872083"></path>
                          <path d="M19.9610411 22.933525l-1.05972603-5.835375-1.33315069-7.34445833c-.07232876-.39704167.1950685-.77729167.59726028-.84825L45.7462466 4.01148333c.4016438-.07095833.7857534.193375.8575342.589875l.7649315 4.21091667" stroke="#1B325E" strokeWidth="1.0980392" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-3 col-md-4 col-lg-3 col-xl-3 ord-8">
                <a href="/short-term-loans">
                  <div className="pb-product sponsorTag inactive">
                    <h1 className="product-name">Over Draft</h1>
                    <p className="product-desc">Instant small ticket loans to meet your immediate cash needs</p>
                    <span className="m-hidden bestTag">Get Instant Loan <span><Image width={12} height={10} src="/img/blue-right-arrow.svg" alt="blue arrow" /></span></span>
                    <div className="product-icon">

                      <svg width="60" height="60" shapeRendering="geometricPrecision">
                        <g fill="none" fillRule="evenodd">
                          <path d="M42.6484667 11.3567297c0 4.7993326-3.9326667 8.6896552-8.7846667 8.6896552-4.8513333 0-8.7846667-3.8903226-8.7846667-8.6896552 0-4.79866518 3.9333334-8.68965517 8.7846667-8.68965517 4.852 0 8.7846667 3.89098999 8.7846667 8.68965517" fill="#FFD032"></path>
                          <path d="M14.97006667 35.533059L19.7614 30.5969077s2.0353333-2.5982203 5.154-2.5982203h10.146s1.3546667 3.3397108-2.0753333 4.8447164c0 0 4.8926666.0847608 8.978-2.2438265 0 0 4.8046666-3.196218 8.036.0420467l-8.844 6.6026697s-2.79 1.9701891-7.822 2.3933259c-.446.0380422-.8913334.0734149-1.3353334.1281424l-6.8846666.843604c-2.058.2516129-4.13.3784204-6.20333337.3784204h-3.94066666" fill="#F5D9BA"></path>
                          <path d="M10 33.48291448h3.09933333c1.03333334 0 1.87066667.86229143 1.87066667 1.92480533v5.37931035c0 1.06318131-.83733333 1.92480534-1.87066667 1.92480534H10" fill="#ED6262"></path>
                          <path d="M10 33.48291448h3.09933333c1.03333334 0 1.87066667.86229143 1.87066667 1.92480533v5.37931035c0 1.06318131-.83733333 1.92480534-1.87066667 1.92480534H10M14.97006667 35.533059L19.7614 30.5969077s2.0353333-2.5982203 5.154-2.5982203h10.146s1.3546667 3.3397108-2.0753333 4.8447164c0 0 4.8926666.0847608 8.978-2.2438265 0 0 4.8046666-3.196218 8.036.0420467l-8.844 6.6026697s-2.79 1.9701891-7.822 2.3933259c-.446.0380422-.8913334.0734149-1.3353334.1281424l-6.8846666.843604c-2.058.2516129-4.13.3784204-6.20333337.3784204h-3.94066666M25.5390667 32.7868076l7.4473333.0567297M42.6484667 11.3567297c0 4.7993326-3.9326667 8.6896552-8.7846667 8.6896552-4.8513333 0-8.7846667-3.8903226-8.7846667-8.6896552 0-4.79866518 3.9333334-8.68965517 8.7846667-8.68965517 4.852 0 8.7846667 3.89098999 8.7846667 8.68965517zM31.6198 7.64460512h4.488M31.6198 9.78765295h4.488" stroke="#1B325E" strokeWidth="1.37931034" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M32.9472667 7.64460512c1.05 0 1.9013333 1.02647386 1.9013333 2.29187986 0 1.26607342-.8513333 1.92547275-1.9013333 1.92547275h-1.3273334l3.27 3.20689657" stroke="#1B325E" strokeWidth="1.37931034" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-3 col-md-4 col-lg-3 col-xl-3 ord-9">
                <a href="/business-loan">
                  <div className="pb-product inactive">
                    <h1 className="product-name">Business Loan</h1>
                    <p className="product-desc w77">Expand your business with loans at low interest rates</p>
                    <span className="m-hidden bestTag">Check Eligibility <span><Image width={12} height={10} src="/img/blue-right-arrow.svg" alt="blue arrow" /></span></span>
                    <div className="product-icon">
                      <svg width="60" height="60" shapeRendering="geometricPrecision">
                        <g fill="none" fillRule="evenodd">
                          <path d="M14.90641132 35.94488465l4.7189041-4.98482433s2.00438357-2.62289189 5.08109588-2.62732432l10.0082192-.01551351s1.3419178 3.36643243-2.0383562 4.88897297c0 0 4.8257535.07756757 8.8531507-2.27660811 0 0 4.7347945-3.23068919 7.9276712.03047297l-8.7150684 6.67191892s-2.7495891 1.99071626-7.7139726 2.42509456c-.4389042.0382298-.8783562.0753514-1.3161644.1302027l-6.7912329.8615541c-2.02958905.2570811-4.07287672.3878378-6.11890412.3906081l-3.88712329.0060946" fill="#F5D9BA"></path>
                          <path d="M14.90641132 35.94488465l4.7189041-4.98482433s2.00438357-2.62289189 5.08109588-2.62732432l10.0082192-.01551351s1.3419178 3.36643243-2.0383562 4.88897297c0 0 4.8257535.07756757 8.8531507-2.27660811 0 0 4.7347945-3.23068919 7.9276712.03047297l-8.7150684 6.67191892s-2.7495891 1.99071626-7.7139726 2.42509456c-.4389042.0382298-.8783562.0753514-1.3161644.1302027l-6.7912329.8615541c-2.02958905.2570811-4.07287672.3878378-6.11890412.3906081l-3.88712329.0060946" stroke="#1B325E" strokeWidth="1.0980392" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M10.0000548 33.88507835l3.05808219-.00443481c1.01863013-.00165978 1.84602739.86654292 1.84767123 1.93808346l.00822163 5.42418919c.00164138 1.07264865-.82301615 1.94251351-1.84274218 1.94417567l-3.05753425.00498649" fill="#ED6262"></path>
                          <path d="M10.0000548 33.88507835l3.05808219-.00443481c1.01863013-.00165978 1.84602739.86654292 1.84767123 1.93808346l.00822163 5.42418919c.00164138 1.07264865-.82301615 1.94251351-1.84274218 1.94417567l-3.05753425.00498649M14.90641096 35.9448851l4.71890411-4.9848243s2.00438353-2.6228919 5.08109593-2.6273243l10.0082191-.0155135s1.3419178 3.3664324-2.0383561 4.8889729c0 0 4.8257534.0775676 8.8531507-2.2766081 0 0 4.7347945-3.2306892 7.9276712.030473l-8.7150685 6.6719189s-2.749589 1.9907162-7.7139726 2.4250946c-.4389041.0382298-.8783562.0753514-1.3161644.1302027l-6.7912329.8615541c-2.029589.2570811-4.0728767.3878378-6.11890408.3906081l-3.88712328.0060946M25.4554521 33.2309068l7.379726-.0343514" stroke="#1B325E" strokeWidth="1.0980392" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M37.5482192 21.6845311H20.5509589c-1.69808219 0-3.07561643-1.3928919-3.07561643-3.1099054V9.92251757c0-1.71756757 1.37753424-3.11045946 3.07561643-3.11045946h16.9972603c1.6991781 0 3.0761644 1.39289189 3.0761644 3.11045946v8.65210813c0 1.7170135-1.3769863 3.1099054-3.0761644 3.1099054" fill="#E0B688"></path>
                          <path d="M24.7293151 6.42638108V4.37693514c0-.45487838.3643835-.82332433.8131507-.82332433h6.9873972c.449863 0 .8142466.36844595.8142466.82332433v2.08601351" fill="#FFF"></path>
                          <path d="M37.5482192 21.6845311H20.5509589c-1.69808219 0-3.07561643-1.3928919-3.07561643-3.1099054V9.92251757c0-1.71756757 1.37753424-3.11045946 3.07561643-3.11045946h16.9972603c1.6991781 0 3.0761644 1.39289189 3.0761644 3.11045946v8.65210813c0 1.7170135-1.3769863 3.1099054-3.0761644 3.1099054z" stroke="#1B325E" strokeWidth="1.0980392" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M37.6252603 10.47790135c-2.2580822 2.00733784-5.2964384 3.23733785-8.6383562 3.23733785-3.3956164 0-6.4783562-1.2698919-8.7468493-3.33540542" stroke="#1B325E" strokeWidth="1.0980392" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M29.7132603 15.6619081h-1.1791781c-.2339726 0-.4241096-.1922567-.4241096-.4282838v-3.11322971c0-.23658108.190137-.42828378.4241096-.42828378h1.1791781c.2345205 0 .4241096.1917027.4241096.42828378v3.11322971c0 .2360271-.1895891.4282838-.4241096.4282838" fill="#FFF"></path>
                          <path d="M29.7132603 15.6619081h-1.1791781c-.2339726 0-.4241096-.1922567-.4241096-.4282838v-3.11322971c0-.23658108.190137-.42828378.4241096-.42828378h1.1791781c.2345205 0 .4241096.1917027.4241096.42828378v3.11322971c0 .2360271-.1895891.4282838-.4241096.4282838zM24.7293151 5.42647973V4.3765473c0-.45432433.3643835-.82277027.8131507-.82277027h6.9873972c.449863 0 .8142466.36844594.8142466.82277027v2.08656756" stroke="#1B325E" strokeWidth="1.0980392" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-3 col-md-4 col-lg-3 col-xl-3 ord-10">
                <a href="/personal-loan-balance-transfer">
                  <div className="pb-product inactive">
                    <h1 className="product-name">Transfer Personal Loan</h1>
                    <p className="product-desc w77">Get better interest rates on your existing personal loan</p>
                    <span className="m-hidden bestTag">Reduce Your EMI <span><Image width={12} height={10} src="/img/blue-right-arrow.svg" alt="blue arrow" /></span></span>
                    <div className="product-icon">
                      <svg width="42" height="39" shapeRendering="geometricPrecision" className="plbt-icon mtIconRight">
                        <g fill="none" fillRule="evenodd">
                          <path d="M5.97006667 30.8808667l4.79133333-4.99S12.7967333 23.2642 15.9154 23.2642h10.146s1.3546667 3.3766667-2.0753333 4.8973333c0 0 4.8926666.086 8.978-2.268 0 0 4.8046666-3.2313333 8.036.042l-8.844 6.6753334s-2.79 1.9913333-7.822 2.4193333c-.446.0373333-.8913334.074-1.3353334.1293333l-6.8846666.8526667c-2.058.2546667-4.13.3826667-6.20333337.3826667H5.97006667" fill="#F5D9BA"></path>
                          <path d="M1 28.80793367h3.09933333c1.03333334 0 1.87066667.87133333 1.87066667 1.946v5.438c0 1.07466666-.83733333 1.946-1.87066667 1.946H1" fill="#ED6262"></path>
                          <path d="M1 28.80793367h3.09933333c1.03333334 0 1.87066667.87133333 1.87066667 1.946v5.438c0 1.07466666-.83733333 1.946-1.87066667 1.946H1M5.97006667 30.8808667l4.79133333-4.99S12.7967333 23.2642 15.9154 23.2642h10.146s1.3546667 3.3766667-2.0753333 4.8973333c0 0 4.8926666.086 8.978-2.268 0 0 4.8046666-3.2313333 8.036.042l-8.844 6.6753334s-2.79 1.9913333-7.822 2.4193333c-.446.0373333-.8913334.074-1.3353334.1293333l-6.8846666.8526667c-2.058.2546667-4.13.3826667-6.20333337.3826667H5.97006667M16.5390667 28.1041333l7.4473333.0573334" stroke="#1B325E" strokeWidth="1.33333333" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M30.7213333 9.31313333c0 3.54066667-2.0946666 6.59133337-5.1113333 7.98199997-1.1173333.5153334-2.362.8026667-3.6733333.8026667-4.8513334 0-8.7846667-3.9333333-8.7846667-8.78466667C13.152 4.4618 17.0853333.52846667 21.9366667.52846667c1.302 0 2.538.28333333 3.65.792 3.0293333 1.386 5.1346666 4.44333333 5.1346666 7.99266666" fill="#FFD032"></path>
                          <path d="M18.2539333 17.291c-3.012-1.3933333-5.1013333-4.4413333-5.1013333-7.978 0-3.536 2.0893333-6.58466667 5.1013333-7.97733333M25.5866 1.32033333c3.0293333 1.386 5.1346667 4.44333334 5.1346667 7.99266667 0 3.5406667-2.094 6.5913333-5.1113334 7.982M19.6927333 5.56053333h4.4873334M19.6927333 7.72653333h4.4873334M21.0202 5.56053333c1.0493333 0 1.9006667 1.03733334 1.9006667 2.31733334 0 1.27933333-.8513334 1.94666666-1.9006667 1.94666666h-1.3273333L22.9622 13.0658667M25.61 17.2949333l3.7846667-.002M18.2539333 1.33593333h-3.346" stroke="#1B325E" strokeWidth="1.33333333" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-3 col-md-4 col-lg-3 col-xl-3 ord-11">
                <a href="/home-loan">
                  <div className="pb-product covid inactive">
                    <h1 className="product-name">New Home Loan</h1>
                    <p className="product-desc">Choose from lowest interest rates available for your dream home</p>
                    <span className="m-hidden bestTag">Check Eligibility <span><Image width={12} height={10} src="/img/blue-right-arrow.svg" alt="blue arrow" /></span></span>
                    <div className="product-icon">
                      <svg width="60" height="60" shapeRendering="geometricPrecision">
                        <g fill="none" fillRule="evenodd">
                          <path d="M41.6048077 10.21294872l-8.3198718-5.08782051c-.7679487-.46923077-1.725641-.475-2.498718-.01282052l-8.9044871 5.31410257c-.9333334.5576923-1.5128205 1.57948718-1.5128205 2.66602564 0 .29423077.2371794.53141025.5314102.53141025h2.024359v9.31217945c0 .2935898.2378205.5314103.5314102.5314103.2935898 0 .5320513-.2378205.5320513-.5314103v-.4205128h16.175c0 .2935898.2378205.5314103.5314103.5314103.2935897 0 .5314102-.2378205.5314102-.5320513v-8.92692308h1.4410257c.2935897 0 .5314102-.23782051.5314102-.53141026 0-1.15320513-.6108974-2.24294872-1.5935897-2.84358974" fill="#FEDA9B" fillRule="nonzero"></path>
                          <path d="M31.2576282 14.0190385h-4.7673077c-.2942308 0-.5320513.2378205-.5320513.5314102v7.0544872c0 .5032051.4076923.9102564.9102564.9102564h4.0102565c.5025641 0 .9102564-.4076923.9102564-.9102564v-7.0544872c0-.2935897-.2378206-.5314102-.5314103-.5314102" fill="#C58B59"></path>
                          <path fill="#FFF" d="M33.574359 19.2442308h3.9083333V14.55H33.574359z"></path>
                          <path fill="#052F5F" d="M40.7265385 10.29903846V5.30224359h-3.398718v2.91858974z"></path>
                          <path d="M10.86185897 34.3030769h2.96602565c.98846153 0 1.78974359.8339744 1.78974359 1.8621795v5.2032051c0 1.0288462-.80128206 1.8621795-1.78974359 1.8621795h-2.96602565" fill="#ED6262"></path>
                          <path d="M15.61762821 36.2862179l4.58461539-4.775s1.9480769-2.5134615 4.9326923-2.5134615h9.7076923s1.2967949 3.2307692-1.9846154 4.6865385c0 0 4.6814103.0820513 8.5910257-2.1705128 0 0 4.5974359-3.0923077 7.6891025.0410256l-8.4621795 6.3871795s-2.6705128 1.9057692-7.4858974 2.3147436c-.426282.0365384-.8525641.0711538-1.2769231.1237179l-6.5884615.8160257c-1.9698718.2442307-3.9512821.3660256-5.93589745.3660256h-3.77115384" fill="#F5D9BA"></path>
                          <path d="M10.86185897 34.3030769h2.96602565c.98846153 0 1.78974359.8339744 1.78974359 1.8621795v5.2032051c0 1.0288462-.80128206 1.8621795-1.78974359 1.8621795h-2.96602565" stroke="#1B325E" strokeWidth="1.33333333" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M15.61762821 36.2862179l4.58461539-4.775s1.9480769-2.5134615 4.9326923-2.5134615h9.7076923s1.2967949 3.2307692-1.9846154 4.6865385c0 0 4.6814103.0820513 8.5910257-2.1705128 0 0 4.5974359-3.0923077 7.6891025.0410256l-8.4621795 6.3871795s-2.6705128 1.9057692-7.4858974 2.3147436c-.426282.0365384-.8525641.0711538-1.2769231.1237179l-6.5884615.8160257c-1.9698718.2442307-3.9512821.3660256-5.93589745.3660256h-3.77115384M25.7312821 33.6298077l7.126282.0544872M40.6946154 22.5154487v-9.45897434h1.9724359c0-.97564103-.5076923-1.88076923-1.3397436-2.38974359l-8.3198718-5.08782051c-.5974359-.36538462-1.3480769-.36923077-1.948718-.01025641l-8.9044871 5.31474359c-.7775641.46410256-1.2538462 1.30320512-1.2538462 2.20961538h2.5557692v8.03461538M37.3279487 8.22070513V5.30211538h3.398718v4.66217949" stroke="#1B325E" strokeWidth="1.33333333" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M33.1663462 9.96410256c0 .62435898-.5064103 1.13012821-1.1301283 1.13012821-.6237179 0-1.1294871-.50576923-1.1294871-1.13012821 0-.62371794.5057692-1.1301282 1.1294871-1.1301282.623718 0 1.1301283.50641026 1.1301283 1.1301282" fill="#1B325E"></path>
                          <path stroke="#1B325E" strokeWidth="1.33333333" strokeLinecap="round" strokeLinejoin="round" d="M26.490641 21.0759615v-6.525641h4.7673077v7.9653846"></path>
                          <path d="M30.2716667 19.4978205c0 .3115385-.2532052.5647436-.5653846.5647436-.3115385 0-.5647436-.2532051-.5647436-.5647436 0-.3121795.2532051-.5647436.5647436-.5647436.3121794 0 .5653846.2525641.5653846.5647436" fill="#052F5F"></path>
                          <path stroke="#1B325E" strokeWidth="1.33333333" strokeLinecap="round" strokeLinejoin="round" d="M33.574359 19.2442308h3.9083333V14.55H33.574359z"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-3 col-md-4 col-lg-3 col-xl-3 ord-13">
                <a href="/loan-against-property">
                  <div className="pb-product inactive">
                    <h1 className="product-name">Loan Against Property</h1>
                    <p className="product-desc">Get liquidity against your property at best interest rates</p>
                    <span className="m-hidden bestTag">Check Eligibility <span><Image width={12} height={10} src="/img/blue-right-arrow.svg" alt="blue arrow" /></span></span>
                    <div className="product-icon">
                      <svg width="60" height="60" shapeRendering="geometricPrecision" className="mtIconRightTop">
                        <g fill="none" fillRule="evenodd">
                          <path d="M14.24458065 25.3572357l-2.56451613-.0057857c-.94129033-.0019286-1.3916129-1.1455714-.70064517-1.7787857L27.7303871 8.22380714c1.2632258-1.25228571 3.3148387-1.24071428 4.563871.02442857L49.0200645 23.57845c.6922581.6345.2393549 1.7794286-.7025806 1.7794286h-3.443871l.0316129 3.4508571.0780645 13.131c.0051613.5843572-.6716129 1.0600714-1.5096774 1.0600714H15.75425806c-.83354838 0-1.50967741-.4712142-1.50967741-1.0523571V25.3572357z" fill="#FEDA9B" fillRule="nonzero"></path>
                          <path fill="#C58B59" d="M44.8897419 19.9670071V6.99993571h-7.3574193v6.26207143z"></path>
                          <path stroke="#1B325E" strokeWidth="1.33333333" strokeLinecap="round" strokeLinejoin="round" d="M37.532129 10.26385V7.00006429h7.3574194v8.84957142"></path>
                          <path d="M49.0971613 28.6091929c0 3.1236428-1.8651613 5.8165714-4.5516129 7.0437857-.9954839.4545-2.1025807.7084285-3.2709678.7084285-4.32 0-7.8225806-3.4714285-7.8225806-7.7522142 0-4.2814286 3.5025806-7.7528572 7.8225806-7.7528572 1.1593549 0 2.26.2500714 3.2496775.6987857 2.6987096 1.2233572 4.5729032 3.9214286 4.5729032 7.0540715" fill="#FFD032" fillRule="nonzero"></path>
                          <path stroke="#1B325E" strokeWidth="1.33333333" strokeLinecap="round" strokeLinejoin="round" d="M39.2760645 25.2969357h3.996129M39.2760645 27.2085357h3.996129M40.4580645 25.2969357c.9348387 0 1.6929032.9154286 1.6929032 2.0449286 0 1.1288571-.7580645 1.7177143-1.6929032 1.7177143H39.276129l2.9122581 2.8613571"></path>
                          <path d="M49.0971613 28.6091929c0 3.1236428-1.8651613 5.8165714-4.5516129 7.0437857-.9954839.4545-2.1025807.7084285-3.2709678.7084285-4.32 0-7.8225806-3.4714285-7.8225806-7.7522142 0-4.2814286 3.5025806-7.7528572 7.8225806-7.7528572 1.1593549 0 2.26.2500714 3.2496775.6987857 2.6987096 1.2233572 4.5729032 3.9214286 4.5729032 7.0540715z" stroke="#1B325E" strokeWidth="1.33333333" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path fill="#C58B59" d="M20.6666667 25.6666667h8V43h-8z"></path>
                          <path d="M44.9741935 38.2834214l.0090616 3.6559286c.005132.585-.6716422 1.0607143-1.5097067 1.0607143H15.75419355c-.83354839 0-1.50967742-.4712143-1.50967742-1.053V25.3574929l-2.56387097-.0057858c-.94129032-.0019285-1.39225806-1.1455714-.70064516-1.7794285L27.7303226 8.22342143C28.9935484 6.97177857 31.0451613 6.98335 32.2941935 8.24785L44.26 19.1732071" stroke="#1B325E" strokeWidth="1.33333333" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M27.421871 35.1124643c0 .5650714-.4619355 1.0227857-1.0316129 1.0227857-.5690323 0-1.0309678-.4577143-1.0309678-1.0227857 0-.5644286.4619355-1.0221429 1.0309678-1.0221429.5696774 0 1.0316129.4577143 1.0316129 1.0221429" fill="#052F5F"></path>
                          <path stroke="#1B325E" strokeWidth="1.33333333" strokeLinecap="round" strokeLinejoin="round" d="M20.5191613 37.9682929V26.1622214h8.7025806v14.4102857"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-3 col-md-4 col-lg-3 col-xl-3 ord-12">
                <a href="/home-loan-balance-transfer">
                  <div className="pb-product covid inactive">
                    <h1 className="product-name hl">Transfer Home Loan</h1>
                    <p className="product-desc">Get better interest rates on your existing home loan</p>
                    <span className="m-hidden bestTag">Reduce Your EMI <span><Image width={12} height={10} src="/img/blue-right-arrow.svg" alt="blue arrow" /></span></span>
                    <div className="product-icon">
                      <svg width="40" height="42" shapeRendering="geometricPrecision" className="mtIconRight">
                        <g fill="none" fillRule="evenodd">
                          <path d="M4.24458065 19.4262951l-2.56451613-.0052459c-.94129033-.0019672-1.3916129-1.1508197-.70064516-1.7862295L17.7303871 2.2282623c1.2632258-1.25639345 3.3148387-1.2452459 4.563871.02491803L39.0200645 17.641377c.6922581.6360656.2393549 1.7855738-.7025806 1.7855738h-3.443871l.0316129 3.4642623.0780645 16.3888525c.0051613.5862295-.6716129 1.0642623-1.5096774 1.0642623H5.75425806c-.83354838 0-1.50967741-.4734427-1.50967741-1.0570492V19.4262951z" fill="#F5D9BA"></path>
                          <path fill="#DEB07D" d="M34.8897419 14.0154754V.9997377h-7.3574193v6.28590164z"></path>
                          <path d="M4.24458065 19.4262951l-2.56451613-.0052459c-.94129033-.0019672-1.3916129-1.1508197-.70064516-1.7862295L17.7303871 2.2282623c1.2632258-1.25639345 3.3148387-1.2452459 4.563871.02491803L39.0200645 17.641377c.6922581.6360656.2393549 1.7855738-.7025806 1.7855738h-3.443871l.0316129 3.4642623.0780645 16.3888525c.0051613.5862295-.6716129 1.0642623-1.5096774 1.0642623H5.75425806c-.83354838 0-1.50967741-.4734427-1.50967741-1.0570492V19.4262951zM27.532129 4.27645902V.9997377h7.3574194V9.8830164" stroke="#1B325E" strokeWidth="1.33333333" strokeLinecap="round" strokeLinejoin="round"></path>
                          <path d="M29.073871 25.3570492c0 3.637377-2.1632258 6.772459-5.2793549 8.2013115-1.1548387.5291803-2.44.824918-3.7941935.824918-5.0116129 0-9.0741936-4.0413115-9.0741936-9.0262295 0-4.9849181 4.0625807-9.0262295 9.0741936-9.0262295 1.3451613 0 2.6212903.2911475 3.7696774.8137705 3.1296774 1.4236065 5.303871 4.5652459 5.303871 8.212459" fill="#FFD032"></path>
                          <path d="M16.1958065 33.5540984c-3.1109678-1.4314754-5.2696775-4.5632787-5.2696775-8.1967214 0-3.6340983 2.1587097-6.7665573 5.2696775-8.197377M23.7701935 17.1443279c3.1296775 1.4236065 5.303871 4.5659016 5.303871 8.212459 0 3.637377-2.1632258 6.772459-5.2793548 8.2019672M17.6820645 21.5011148h4.636129M17.6820645 23.7270164h4.636129M19.0530323 21.5011148c1.0845161 0 1.9638709 1.0655737 1.9638709 2.3809836 0 1.3147541-.8793548 2-1.9638709 2h-1.3709678l3.3774194 3.3311475M23.7947097 33.558623l3.9090322-.0019673M16.1958065 17.16h-3.4554839" stroke="#1B325E" strokeWidth="1.33333333" strokeLinecap="round" strokeLinejoin="round"></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-feature-section">
          <div className="container">
              <div className="row" id="contentAboutHomes">
                  <div className="col-md-5">
                      <div className="pb-feature">
                          <span className="top-line"></span>
                          <h3>How to apply?</h3>
                      </div>
                      <div className="row">
                          <div className="col-sm-6">
                              <div className="pb-feature">
                                  <Image src="/img/ammount.jpg" width={150} height={150} alt="credible" />
                                  <h3>Choose Amount</h3>
                              </div>
                          </div>
                          <div className="col-sm-6">
                              <div className="pb-feature">
                                  <Image src="/img/document.jpg" width={150} height={150} alt="trustworthy" />
                                  <h3>Provide Document</h3>
                              </div>
                          </div>
                          <div className="col-sm-6">
                              <div className="pb-feature">
                                  <Image src="/img/approved.jpg" width={150} height={150} alt="secure" />
                                  <h3>Approved Loan</h3>
                              </div>
                          </div>
                          <div className="col-sm-6">
                              <div className="pb-feature">
                                  <Image src="/img/getcass.jpg" width={150} height={150} alt="helpful" />
                                  <h3>Get your money</h3>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-7">
                    <div className="row">
                      <div className="col-md-6 col-lg-5 offset-lg-1">
                        <div className="about-us-block about-us-bg">
                          <div className="about-us-img-wrap"><Image src="/img/aboutmore.jpg"  width={442} height={300} alt="about_us_Illustration" /></div>
                          <h3>About Us</h3>
                          <p>We have partnerships with large banks, NBFCs and fintech lenders who offer a wide choice of products on our platform</p>
                          <Link href="/about-us" className="know-more-btn" passHref>Know More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </section>
        <section className="our-partners-section product_pad1">
          <div className="container">
            <div className="pb-feature">
              <span className="top-line"></span>
              <h3>Our partners from<br/>across the industry</h3>
            </div>
          </div>
          <div className="our_partners_wrapper container clear">
            <div className="cmn_partner_type_container clear">
              <div className="cmn_partner aditya_birla js-partner-all js-partner-hl"></div>
              <div className="cmn_partner axis_bank js-partner-hl js-partner-credit-improvement js-partner-cc js-partner-unsecured js-partner-all"></div>
              <div className="cmn_partner axis_finance js-partner-hl js-partner-credit-improvement js-partner-cc js-partner-unsecured js-partner-all"></div>
              <div className="cmn_partner bajaj_finserv js-partner-unsecured js-partner-credit-improvement js-partner-all"></div>
              <div className="cmn_partner fullerton_india js-partner-unsecured js-partner-all"></div>
              <div className="cmn_partner finable js-partner-unsecured js-partner-all"></div>
              <div className="cmn_partner hdfc js-partner-hl js-partner-gl js-partner-credit-improvement js-partner-unsecured js-partner-cc js-partner-all"></div>
              <div className="cmn_partner hero_housing_finance js-partner-hl js-partner-all"></div>
              <div className="cmn_partner icici js-partner-credit-improvement js-partner-cc js-partner-unsecured js-partner-hl js-partner-all"></div>
              <div className="cmn_partner idfc js-partner-credit-improvement js-partner-unsecured js-partner-hl js-partner-all"></div>
              <div className="cmn_partner indusind_bank js-partner-unsecured js-partner-cc js-partner-all"></div>
              <div className="cmn_partner kotak js-partner-credit-improvement js-partner-unsecured js-partner-hl js-partner-all"></div>
              <div className="cmn_partner paysense js-partner-unsecured js-partner-all"></div>
              <div className="cmn_partner standard_chartered js-partner-hl js-partner-unsecured js-partner-all"></div>
              <div className="cmn_partner tata_capital js-partner-hl js-partner-credit-improvement js-partner-unsecured js-partner-all"></div>
              <div className="cmn_partner yes_bank js-partner-unsecured js-partner-all"></div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
