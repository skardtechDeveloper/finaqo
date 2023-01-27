import Image from 'next/image';
import Head from 'next/head';

const ourTeam = () => {
    return (
        <>
            <Head>
                <title>Our Team - Finaqo</title>
                <meta name="description" content="sgsg" />
            </Head>
            <main className="main">
                <section className="about-top-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                                <div className="about-top-content">
                                    <h1>Meet the team</h1>
                                    <p>Our leadership brings together an energetic group of people with a wealth of experience and commitment towards helping people make better financial decisions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-pb-box-section team">
                    <div className="container about-pb-box-container contact-pb-box-container">
                        <div className="row">
                            <div className="col-md-12 col-lg-4 box-hover">
                                <div className="about-pb-box">
                                    <div className="about-pb-box-icon"><Image width={370} height={350} src="/img/team/yashish-dahiya-pic.png" alt="Team" /></div>
                                    <div>
                                        <h3>Yashish Dahiya</h3>
                                        <p>Co-Founder & Group CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 box-hover">
                                <div className="about-pb-box">
                                    <div className="about-pb-box-icon"><Image width={370} height={350} src="/img/team/alok-bansal-pic.png" alt="Team" /></div>
                                    <div>
                                        <h3>Alok Bansal</h3>
                                        <p>Co-Founder & Executive Vice Chairman</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 box-hover">
                                <div className="about-pb-box">
                                    <div className="about-pb-box-icon"><Image width={370} height={350} src="/img/team/sarbvir-singh-pic.png" alt="Team" /></div>
                                    <div>
                                        <h3>Sarbvir Singh</h3>
                                        <p>President & CEO</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4 box-hover">
                                <div className="about-pb-box">
                                    <div className="about-pb-box-icon"><Image width={370} height={350} src="/img/team/tarun-mathur-pic.png" alt="Team" /></div>
                                    <div>
                                        <h3>Tarun Mathur</h3>
                                        <p>Chief Business Officer - General Insurance</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 box-hover">
                                <div className="about-pb-box">
                                    <div className="about-pb-box-icon"><Image width={370} height={350} src="/img/team/santosh-agarwal-pic.png" alt="Team" /></div>
                                    <div>
                                        <h3>Santosh Agarwal</h3>
                                        <p>Chief Business Officer - Life Insurance</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 box-hover">
                                <div className="about-pb-box">
                                    <div className="about-pb-box-icon"><Image width={370} height={350} src="/img/team/dhruv-sarin-pic.png" alt="Team" /></div>
                                    <div>
                                        <h3>Dhruv Sarin</h3>
                                        <p>Chief Business Officer - PB Partners</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4 box-hover">
                                <div className="about-pb-box">
                                    <div className="about-pb-box-icon"><Image width={370} height={350} src="/img/team/kheadup-dorjee-bhutia-pic.png" alt="Team" /></div>
                                    <div>
                                        <h3>Kheadup Dorjee Bhutia</h3>
                                        <p>Chief Sales Officer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 box-hover">
                                <div className="about-pb-box">
                                    <div className="about-pb-box-icon"><Image width={370} height={350} src="/img/team/atrash-aman-pic.png" alt="Team" /></div>
                                    <div>
                                        <h3>Atrash Aman</h3>
                                        <p>Chief Customer Officer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 box-hover">
                                <div className="about-pb-box">
                                    <div className="about-pb-box-icon"><Image width={370} height={350} src="/img/team/saurabh-tiwari-pic.png" alt="Team" /></div>
                                    <div>
                                        <h3>Saurabh Tiwari</h3>
                                        <p>Chief Technology Officer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ourTeam;