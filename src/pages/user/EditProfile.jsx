import React, { useState } from 'react';
import LoginHeader from '../../components/Header/LoginHeader';
import Modal from '../../components/Modal/Modal';
import Alert from '../../components/Icons/Alert';
import './EditProfile.scss';

const EditProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWithdraw = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  }

  const confirmWithdraw = () => {
    // 탈퇴 로직 구현
    console.log('탈퇴 완료');
    setIsModalOpen(false);
    // 다른 페이지로 이동
  }

  return (
    <div>
      <LoginHeader />
      <div className='edit-container'>
        <p className='edit-title'>정보 수정</p>
        <form>
          <div className="form-group">
            <label htmlFor='name'>이름</label>
            <input id='name' type='text' placeholder='이름을 입력해 주세요.' />
          </div>
          <div className="form-group">
            <label htmlFor='nickname'>닉네임</label>
            <div className="input-with-button">
              <input id='nickname' type='text' placeholder='닉네임을 입력해 주세요.' />
              <button className='notFilled short'>중복체크</button>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor='id'>아이디</label>
            <input id='id' type='text' value='elice123' disabled />
          </div>
          <div className="form-group">
            <label htmlFor='email'>이메일</label>
            <input id='email' type='email' value='elice123@naver.com' disabled />
          </div>
          <div className='button-container'>
            <button type='submit' className='long'>정보 수정</button>
            <button type='submit' className='long notFilled' onClick={handleWithdraw}>회원 탈퇴</button>
          </div>
        </form>
      </div>
      {isModalOpen && (
        <Modal
          IconComponent={Alert}
          alertBody='정말 탈퇴하시겠습니까?'
          buttonAction={confirmWithdraw}
          actionText='탈퇴'
          hideCloseButton={false}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}

export default EditProfile;