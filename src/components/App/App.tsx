import React from 'react';
import {Route, Routes} from "react-router";
import {UserPageContainer} from "../pages/UserPage/UserPageContainer/UserPageContainer";
import {MainPageContainer} from "../pages/MainPage/MainPageContainer/MainPageContainer"


function App() {

  return (
      <Routes>
          <Route path='/' element={<MainPageContainer />}/>
          <Route path='/users/:id' element={<UserPageContainer />}/>
      </Routes>
  );
}

export default App;
