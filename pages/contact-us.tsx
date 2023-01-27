import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Contact = () => {

  const [images, setImages] = useState([] as any);
  const [imageURLS, setImageURLs] = useState([]);
  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls: any = [];
    images.forEach((image: any) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e: any) {
    setImages([...e.target.files]);
  }

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
              <div className="cont_form">
                <div className="about-top-content">
                  <h1>Contact Us</h1>
                  <Form>
                    <Row className="mb-3">
                      <Col>
                        <Form.Control type="text" placeholder="your Name" />
                      </Col>
                      <Col>
                        <Form.Control type="email" placeholder="Email Id" />
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Phone Number" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Control type="text" placeholder="Type Your Requirement" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Control
                        as="textarea"
                        placeholder="Message Here"
                        style={{ height: '100px' }}
                      />
                    </Form.Group>
                    <div className="fileuploder-container">
                      <div className="fileuploder-inner">
                        <h3>Drag and Drop here</h3>
                        <span>or</span><br />
                        <span>Browse Files</span>
                        <input type="file" onChange={onImageChange} multiple />
                      </div>
                    </div>
                    <div className="img-pview">
                      {imageURLS.map((imageSrc, key) => (
                        <div key={key} className='img-pview-inner'>
                          <div className="img-pview-left">
                            <div className="imgs ">
                              <Image width={48} height={48} alt="File" src={imageURLS ? imageSrc : 'img/file.png'} />
                            </div>
                          </div>
                        </div>

                      ))}
                    </div>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-pb-box-section">
          <div className="container about-pb-box-container contact-pb-box-container">
            <div className="row">
              <div className="col-md-12 col-lg-4 box-hover">
                <div className="about-pb-box">
                  <div className="about-pb-box-icon"><Image width={44} height={44}src="/img/footer/mail.svg" alt="email-icon" /></div>
                  <div>
                    <span className="top-line"></span>
                    <h3>Email:<br/>
                      <Link href="mailto:info@finaqo.in">info@finaqo.in</Link>
                    </h3>
                    <p>For queries related to loans, credit cards or in case of any general enquiries</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 box-hover">
                <div className="about-pb-box">
                  <div className="about-pb-box-icon"><Image width={44} height={44}src="/img/footer/phone.svg" alt="call-icon" /></div>
                  <div>
                    <span className="top-line"></span>
                    <h3>Toll Free:<br/>
                      <Link href="tel:01204459361">0120 445 9361</Link>
                    </h3>
                    <p>Our customer service experts are here for you. Lines are open Mon-Sat from 9:30 am – 6:30 pm</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 box-hover">
                <div className="about-pb-box">
                  <div className="about-pb-box-icon"><Image width={44} height={44}src="/img/footer/stopwatch.svg" alt="24x7" /></div>
                  <div>
                    <span className="top-line"></span>
                    <h3>Our Time<br/>
                      <Link href="/#">24*7 ALL DAY'S</Link>
                    </h3>
                    <p>You can even reach out to us anytime. Our service expert team will help you with your queries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="map-section">
          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe src="https://maps.google.com/maps?q=Delhi&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" width="100%" height="600" frameBorder="0" style={{ border: 0 }} ></iframe>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
