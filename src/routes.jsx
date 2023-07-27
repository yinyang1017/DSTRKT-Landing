import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import Contact from "./pages/contact";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "contact",
    path: "/contact",
    element: <Contact />,
  },
  {
    icon: UserCircleIcon,
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Sign In",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    icon: DocumentTextIcon,
    name: "Docs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];
export const navItems = [
  { title: "home" },
  { title: "about" },
  { title: "exclusive drops" },
  { title: "insider access" },
  { title: "community" },
  { title: "sign up" },
];
export default routes;
