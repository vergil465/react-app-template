import { Component } from "react";
import PropTypes from "prop-types";

class PublicLayout extends Component {
  render() {
    const { children } = this.props;
    return children;
  }
}

PublicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicLayout;
