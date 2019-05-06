import React from "react";

import { connect } from "react-redux";
const Footer = () => <p>Você tem 3 favoritos.</p>;

const mapStateToProps = state => {
    count: state.favorites.length;
};

export default connect(mapStateToProps)(Footer);
