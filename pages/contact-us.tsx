import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Contact = () => {

  const [files, setFile] = useState([]);
  const [message, setMessage] = useState();
  const handleFile = (e: { target: { files: any; }; }) => {
    setMessage("");
    let file = e.target.files;

    for (let i = 0; i < file.length; i++) {
      const fileType = file[i]['type'];
      const validImageTypes = ['image/jpeg', 'image/png', 'file/pdf'];
      if (validImageTypes.includes(fileType)) {
        setFile([...files, file[i]]);
      } else {
        setMessage("Only JPG, PNG and PDF accepted!");
      }
    }
  };
  const removeImage = (i: any) => {
    setFile(files.filter(x => x.name !== i));
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
                      <span className="form-error-message">{message}</span>
                      <div className="fileuploder-inner">
                        <h3>Drag and Drop Your Document's here</h3>
                        <span>or</span><br />
                        <span>Browse Files</span>
                        <input type="file" onChange={handleFile} className="" multiple name="files[]" />
                      </div>
                    </div>
                    <div className="img-pview">
                      {files.map((file, key) => {
                        return (
                          <div key={key} className='img-pview-inner'>
                            <div className="img-pview-left">
                              <div className="imgs ">
                                <Image width={48} height={48}  src={URL.createObjectURL(file)} />
                              </div>
                              <span className="img-name">{file.name}</span>
                            </div>
                            <div onClick={() => { removeImage(file.name) }} className="img-remove">
                            <Image width={12} height={14} src="/img/delete.svg" alt="delete" />
                            </div>
                          </div>

                        )
                      })}
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
