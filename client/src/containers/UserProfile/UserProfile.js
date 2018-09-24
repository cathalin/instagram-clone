import React, { Component } from "react";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import * as actions from "../../actions";

const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

class UserProfile extends Component {
  componentDidMount() {
    this.props.getUserProfile(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.props.getUserProfile(this.props.match.params.userId);
    }
  }

  render() {
    return <Header user={this.props.user} />;
  }
}

export default connect(
  mapStateToProps,
  actions
)(UserProfile);