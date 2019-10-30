import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authAction";
import { clearCurrentProfile } from "../../actions/profileAction";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/feed">
            <button className="btn btn-light btn-sm">Post Feed</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <img
              className="rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "30px", marginRight: "30px" }}
            />

            <button className="btn btn-light btn-sm">Dashboard</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            <button className="btn btn-sm btn-danger">Logout</button>
          </Link>
        </li>
      </ul>
    );
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            <button className="btn btn-light btn-sm">Sign Up</button>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            <button className="btn btn-light btn-sm">LogIn</button>
          </Link>
        </li>
      </ul>
    );
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <h3>Creative Blogs</h3>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/profiles">
                    {" "}
                    <button className="btn btn-light btn-sm">Profiles</button>
                  </Link>
                </li>
              </ul>
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
Navbar.propType = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
