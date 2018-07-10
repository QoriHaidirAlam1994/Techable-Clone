import {configureRoutes} from "pawjs/src/utils/bundler";
// routes
import * as Home from "./pages/home";
// import * as Program from "./pages/program";
import * as Enrolled from "./pages/enrolled";
import * as Careers from "./pages/careers";
import * as Blog from "./pages/blog";
import * as Bootcamp from "./pages/bootcamp";
import * as Courses from "./pages/courses";
import * as Login from "./pages/login";
import * as Register from "./pages/register";
import * as ProgressiveImageRendering from "./pages/progressive-image-rendering";
import * as Curriculum from "./pages/curriculum";
import * as Lecture from "./pages/lecture";
import * as Search from "./pages/search";


export default configureRoutes([
  Home,
  // Program,
  Careers,
  Login,
  Register,
  Bootcamp,
  Courses,
  Enrolled,
  Blog,
  Curriculum,
  Lecture,
  Search
]);