import Image from 'next/image';
import Head from 'next/head';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Finaqo</title>
        <meta name="description" content="sgsg" />
      </Head>
      <main className="main">
      <section className="about-top-section">
          <div className="container">
            <div className="row">
            <div className="col-sm-6">
                <div className="about-top-content">
                  <h1>We Are Finaqo , The New Era Of Fintech</h1>
                  <p>Using data and technology innovations, we help you choose the most-suited financial products. Our algorithm-based technology platform provides you with access to multiple personal credit offers, ease of comparison of multiple offers available and unbiased advice. From application to disbursal, Finaqo will accompany you at each step, till the disbursal of loan or issuance of credit card.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="about-pb-banner-bg color-overlay">
                  <Image width={570} height={350} src="/img/contactus.jpg" alt="about-us" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map-section">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe src="https://maps.google.com/maps?q=Delhi&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" width="100%" height="600" frameBorder="0" style={{border:0}} ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
