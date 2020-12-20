import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, fullMenu } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'DIFEZ' },
                {
                  name: 'keywords',
                  content:
                    'DIFEZ, estudio jurídico, contabilidad, asesoría legal y tributaria, auditoría',
                },
                {
                  name: 'google-site-verification',
                  content: 'T0YHmwLjNz2Uapvo8wPjM3cM8f0cAGmZXkF0hf2IAQk',
                },
              ]}
            >
              <html lang="es" />
              <script
                src="https://s.cliengo.com/weboptimizer/5fd5162c7572fd002a68ba3e/5fd5162d7572fd002a68ba41.js"
                type="text/javascript"
                defer="true"
              />
            </Helmet>
            <div
              className={
                isPreloaded
                  ? 'landing main-body is-preload'
                  : 'landing main-body'
              }
            >
              <div id="page-wrapper">
                <SideBar fullMenu={fullMenu} />
                {children}
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
