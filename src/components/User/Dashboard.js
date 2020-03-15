import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import { getUser } from '../../actions/user';
import NavBar from '../NavBar';
import { UserContainer } from '../../styles/User';

const Dashboard = ({ getUser, user }) => {
  useEffect(() => {
    getUser();
  }, [getUser]);

  return (
    <div>
      <NavBar />
      <UserContainer>
        <div className='edit'>
          Edit Profile  
          <span>
            <Icon type='edit' />
          </span>
        </div>
        <div className='main'>
          <img src={user.avatar} alt='Author avatar' />
          <div className='details'>
            <p>
              <span>Username: </span>
              {user.username}
            </p>
            <p>
              <span>Phone Number: </span>
              {user.phone_number}
            </p>
            <p>
              <span>Email: </span>
              {user.email}
            </p>
            <p>
              <span>Motto: </span>
              {user.motto}
            </p>
          </div>
        </div>
      </UserContainer>
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({
  loading: userReducer.loading,
  user: userReducer.user,
  error: userReducer.error
});

export default connect(mapStateToProps, { getUser })(Dashboard);
