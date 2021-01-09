import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../dashboard/dashboard";
import PrivateRoute from "../routing/privateRoute";
import createProfile from "../profile-forms/createProfile";
import EditProfile from "../profile-forms/editProfile";
import AddExperience from "../profile-forms/addExperience";
import AddEducation from "../profile-forms/addEducation";
import Profiles from "../profiles/profiles";
import Profile from "../profile/profile";
import Posts from "../posts/posts";
import Post from "../post/post";
import Err404 from "../layouts/err404";
import Alert from "../layouts/alert";
import Register from "../auth/register";
import Login from "../auth/login";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={createProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/add-experience" component={AddExperience} />
        <PrivateRoute exact path="/add-education" component={AddEducation} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/post/:id" component={Post} />
        <Route component={Err404} />
      </Switch>
    </section>
  );
};

export default Routes;
