import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/landingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/loginScreen/loginScreen";
import RegisterScreen from "./screens/registerScreen/registerScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

const App = () => {
  const [search, setSearch] = useState("");

  console.log(search);

  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Route path="/" component={LandingPage} exact />
        <Route path="/login" component={LoginScreen} exact />
        <Route path="/register" component={RegisterScreen} exact />
        <Route path="/mynotes" component={() => <MyNotes search={search} />} />
        <Route path="/createnote" component={CreateNote} exact />
        <Route path="/note/:id" component={SingleNote} exact />
        <Route path="/profile" component={ProfileScreen} exact />
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
