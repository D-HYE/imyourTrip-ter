import React from 'react';
import { useParams } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import MyPage from './MyPage';

export default function User() {
  const { page } = useParams();
  const currentPage = page || 'login'; // 기본값: 로그인

  let content;

  switch (currentPage) {
    case 'login':
      content = <Login />;
      break;
    case 'signup':
      content = <SignUp />;
      break;
    case 'mypage':
      content = <MyPage />;
      break;
    default:
      content = <Login />;
  }

  return (
    <main className="subMain page_login">
      <section>
        <div className="sectionBanner pc"></div>
        {content}
      </section>
    </main>
  );
}
