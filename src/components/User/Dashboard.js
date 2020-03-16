import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Icon } from 'antd';
import { getUser, editUser } from '../../actions/user';
import NavBar from '../NavBar';
import { imgUrl, preset } from '../../config';
import { UserContainer } from '../../styles/User';
import ModalForm from './ModalForm';

const Dashboard = ({ getUser, user, editUser }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    getUser();
  }, [getUser]);

  const upload = async event => {
    const file = event.currentTarget.files[0];
    console.log(file);
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', preset);
    console.log(preset);
    try {
      const response = await axios.post(imgUrl, formData);
      editUser({ avatar: response.data.secure_url });
      console.log(response.data.secure_url);
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <div>
      <NavBar />
      <UserContainer>
        <div className='edit' onClick={() => setShow(!show)}>
          Edit Profile
          <span>
            <Icon type='edit' />
          </span>
        </div>
        <div className='main'>
          <div className='img'>
            <img src={user.avatar} alt='Author avatar' />
            <label className='overlay'>
              <input
                name='img'
                type='file'
                accept='image/*'
                onChange={upload}
              />
              <Icon type='camera' />
              Change profile avatar
            </label>
          </div>
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
      <ModalForm show={show} setShow={setShow} user={user} />
    </div>
  );
};

const mapStateToProps = ({ userReducer }) => ({
  loading: userReducer.loading,
  user: userReducer.user,
  error: userReducer.error
});

export default connect(mapStateToProps, { getUser, editUser })(Dashboard);
