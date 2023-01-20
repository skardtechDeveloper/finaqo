import React from 'react';
import Link from 'next/link';

const sidebar = () => {
    return (
        <>
            <div className="col-md-3 col-lg-3">
                <div className="legal-page-links-section">
                    <ul className="legal-page-links">
                        <li><Link href="/privacy-policy" passHref>Privacy Policy</Link></li>
                        <li><Link href="/intellectual-property-policy" passHref>Intellectual Property Policy</Link></li>
                        <li><Link href="/terms-of-use" passHref>Terms of Use</Link></li>
                        <li><Link href="/disclaimer" passHref>Disclaimer</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default sidebar;