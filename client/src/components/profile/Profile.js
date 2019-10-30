import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProfileHeader from "./ProfileHeader";
import ProfileCreds from "./ProfileCreds";
import ProfileAbout from "./ProfileAbout";
import Spinner from "../common/Spinner";
import { getProfileByHandle } from "../../actions/profileAction";

export class Profile extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getProfileByHandle(this.props.match.params.handle);
    }
  }
  render() {
    const { profile, loading } = this.props.profile;
    let profileContent;

    if (profile === null || loading) {
      profileContent = <Spinner />;
    } else {
      profileContent = (
        <div>
          <ProfileHeader profile={profile} />
          <ProfileAbout profile={profile} />
          <ProfileCreds
            experience={profile.experience}
            education={profile.education}
          />
        </div>
      );
    }

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-12">{profileContent}</div>
          </div>
        </div>
        <div>
          <br></br>
        </div>
      </div>
    );
  }
}
Profile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(
  mapStateToProps,
  { getProfileByHandle }
)(Profile);
