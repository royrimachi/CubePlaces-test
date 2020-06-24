// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Resources
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

const Layout = ({ children }) => (
  <div className="p-grid p-dir-col p-align-center p-justify-center">
    <NavMenu />
    <Container>
      {children}
    </Container>
  </div>
);

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]),
};

export default Layout;
