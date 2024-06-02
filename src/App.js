import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import NewBoard from './pages/NewBoard';
import ViewBoardPage from './pages/ViewBoardPage';
import Mypage from './pages/MyPage/Mypage';
import NoticeEditPage from './pages/NoticeEditPage/NoticeEditPage';
import NoticeViewPage from './pages/NoticeViewPage/NoticeViewPage';
import StudyGroupPage from './pages/StudyGroupPage/StudyGroupPage';
import RankPage from './pages/RankPage/RankPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<LoginPage />}/>
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/home' element={<Mainpage />} />
          <Route path='/newBoard' element={<NewBoard />} />
          <Route path='/viewBoard' element={<ViewBoardPage />} />
          <Route path='/mypage' element={<Mypage />} />
          <Route path='/studyGroup' element={<StudyGroupPage />} />
          <Route path='/newNotice' element={<NoticeEditPage />} />
          <Route path='/notice' element={<NoticeViewPage />} />
          <Route path='/rank' element={<RankPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
