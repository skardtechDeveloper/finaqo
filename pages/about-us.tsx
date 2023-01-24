import Image from 'next/image';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Finaqo</title>
        <meta name="description" content="sgsg" />
      </Head>
      <main className="main">
        <section className="about-top-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="about-pb-banner-bg color-overlay">
                  <Image width={570} height={350} src="/img/aboutus.webp" alt="about-us" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="about-top-content">
                  <h1>We Are Finaqo , The New Era Of Fintech</h1>
                  <p>Using data and technology innovations, we help you choose the most-suited financial products. Our algorithm-based technology platform provides you with access to multiple personal credit offers, ease of comparison of multiple offers available and unbiased advice. From application to disbursal, Finaqo will accompany you at each step, till the disbursal of loan or issuance of credit card.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-top-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="about-top-content">
                  <h1>About Us</h1>
                  <p>Finaqo is the fintech startup. We integrate our acute understanding of the marketplace with digital technology, to help you find the best financial products most suited to your needs With a Experinced Team of approx 10 years in finance Sector.</p>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="about-pb-banner-bg color-overlay">
                  <Image width={570} height={350} src="/img/aboutus2.jpg" alt="about-us" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-top-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="about-pb-banner-bg color-overlay">
                  <Image width={570} height={350} src="/img/aboutsus3.jpg" alt="about-us" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="about-top-content">
                  <h1>We Are There For You. Almost Everywhere.</h1>
                  <p>To integrate our acute understanding of the marketplace with the latest trends and developments in digital technology, to help you find the best financial products most suited to your needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;