import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Header from './components/Header'
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const Home = () => {
  return <h2>Home Page</h2>
}

const About = () => {
  return <h2>About Page</h2>
}

const Contact = () => {
  return <h2>Contact Page</h2>
}

const NotFound = () => {
  return <h2>Page not found.</h2>
}

const Profile = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Profile Page</h2>
      <Link to="/profile/10">Edit Profile</Link>
    </div>
  )
}

const EditProfile = (props) => {
  console.log(props)
  return <h2>Edit Profile page</h2>
}

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route path="/profile" component={Profile} exact={true} />
        <Route path="/profile/:id" component={EditProfile} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
