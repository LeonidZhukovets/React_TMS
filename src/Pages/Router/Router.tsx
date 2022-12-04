import React from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import PagesWrapper from "../PagesWrapper";
import RegistrationConfirmation from "../RegistrationConfirmation";
import Success from "../Success";
import ContentPage from "../ContentPage";

export enum PathNames {
  Home = "/",
  SignIn = "/sign-in",
  SignUp = "/sign-up",
  AddPost = "/posts/add",
  ContentPage = "/content/:id",
  RegistrationConfirmation = "/sign-up/confirm",
  RegistrationSuccess = "/sign-up/success",
  Search = "/search",
  ActivateUser = "/activate/:uid/:token",
}

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PathNames.Home} element={<PagesWrapper />}>
          <Route path={PathNames.SignIn} element={<SignIn />} />
          <Route path={PathNames.SignUp} element={<SignUp />} />
          <Route path={PathNames.ContentPage} element={<ContentPage />} />
          <Route
            path={PathNames.RegistrationConfirmation}
            element={<RegistrationConfirmation />}
          />
          <Route path={PathNames.ActivateUser} element={<Success />} />
        </Route>
        <Route path="*" element={<Navigate to={PathNames.SignIn} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
