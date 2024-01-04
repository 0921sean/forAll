import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SearchIdPage from "./pages/SearchIdPage";
import SearchPwPage from "./pages/SearchPwPage";
import SignUpPage from "./pages/SignUpPage";
import SignUpPage2 from "./pages/SignUpPage2";
import SignUpCompletePage from "./pages/SignUpCompletePage";
import PersonalInfoModifyPage from './pages/PersonalInfoModifyPage';
import PlaceInfoModifyPage from './pages/PlaceInfoModifyPage';
import PersonalInfoModifyPage2 from './pages/PersonalInfoModifyPage2';
import PlaceInfoModifyPage2 from './pages/PlaceInfoModifyPage2';  
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />}/>
          <Route path="/searchId" element={<SearchIdPage />} />
          <Route path="/searchPw" element={<SearchPwPage />}/>
          <Route path="/signUp" element={<SignUpPage />}/>
          <Route path="/signUp2" element={<SignUpPage2 />}/>
          <Route path="/signUpComplete" element={<SignUpCompletePage />} />
          <Route path="/personalInfoModify" element={<PersonalInfoModifyPage />} />
          <Route path="/personalInfoModify2" element={<PersonalInfoModifyPage2 />} />
          <Route path="/placeInfoModify" element={<PlaceInfoModifyPage />} />
          <Route path="/placeInfoModify2" element={<PlaceInfoModifyPage2 />} /> 
          <Route path="/error" element={<ErrorPage />}/>
      </Routes>
  );
}

export default App;
