import { Route, Routes } from "react-router-dom";
import { LogInPage } from "./pages/Auth/LogInPage";
import { SignUpPage } from "./pages/Auth/SignUpPage";
import { UserSetting } from "./components/User/UserSetting";
import { UserProfile } from "./components/User/UserProfile";
import { Layout } from "./pages/Layout";
import { HomeLayout } from "./pages/HomeLayout";
import { HomePage } from "./pages/Post/HomePage";
import { Notification } from "./components/Common/Notification";
import { CreatePostComp } from "./components/Post/CreatePostComp";
import { ChatPage } from "./pages/Chat/ChatPage";

const App = () => {
  return (
    <div className="w-screen h-screen dark:bg-gray-900">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeLayout />}>
            <Route path="" element={<HomePage />} />
            <Route path="create-post" element={<CreatePostComp />} />
            <Route path="notifications" element={<Notification />} />
            <Route path="chats" element={<ChatPage />} />
          </Route>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/user-settings" element={<UserSetting />} />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<LogInPage />} />
      </Routes>
    </div>
  );
};

export default App;
