import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  
  render () {
    const { user } = this.props;
        /* // This is the array of Users - this will find the user we care about
  const user = this.props.users.find(user => user.id === this.props.userId); Rather than finding the correct user inside of our component, we want to find it inside mapStateToProps   */
  
  if (!user) {
    return <div>Loading...</div>;
  }

  return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state,ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(
  mapStateToProps, 
  { fetchUser }
  )(UserHeader);



