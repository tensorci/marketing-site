import React, { Component } from 'react';

import FooterLinkSection from './FooterLinkSection';

const linkSections = {
  quokka: [
    ['/', 'Overview'],
    ['mailto:support@tensorci.com', 'Support'],
    ['mailto:team@tensorci.com', 'Contact']
  ],
  company: [
    ['/', 'About'],
    ['/', 'FAQ']
  ],
  legal: [
    ['/', 'Terms of Service'],
    ['/', 'Privacy Policy']
  ]
};

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid">
          <div className="row">
            <FooterLinkSection classes={['col-md-3', 'col-sm-3', 'col-xs-6']} title="TensorCI" links={linkSections.quokka} />
            <FooterLinkSection classes={['col-md-3', 'col-sm-3', 'col-xs-6']} title="Company" links={linkSections.company} />
            <FooterLinkSection classes={['col-md-3', 'col-sm-3', 'col-xs-6']} title="Legal" links={linkSections.legal} />
            <div className="footer-section col-md-3 col-sm-3 col-xs-6">
              <div className="soc-media-copyright">
                <div className="soc-media">
                  <a href="/">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div>
                <div className="copyright">© 2018 LatticeAI, Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;