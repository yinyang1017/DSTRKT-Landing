import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Dialog,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { InstagramIcon } from "../svg";
import theme from "@material-tailwind/react/theme";

const Logo = ({ theme }) => {
  const fill = theme === "dark" ? "white" : "black";
  return (
    <svg
      width="150"
      height="21"
      viewBox="0 0 150 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_23)">
        <path
          d="M0 0H7.60618V20.1565H0V0ZM19.4846 0L24.4206 10.4515L19.8614 20.154H8.16018V16.8707H13.765L16.7845 10.449L13.4156 3.28076H8.16018V0H19.4846Z"
          fill={fill}
        />
        <path
          d="M30.5195 0V4.58158L32.3487 8.4391H43.9626L47.3315 15.5799V20.159H39.6953V15.5799L37.8961 11.7224H26.2822L22.9133 4.58158V0H30.5195ZM30.1252 14.2516L31.3455 16.8707H39.1713V20.154H23.7393V14.2516H30.1252ZM47.3315 0V5.90487H40.9431L39.6953 3.28576H31.071V0H47.3315Z"
          fill={fill}
        />
        <path
          d="M72.9973 0V5.90487H66.6089L65.3612 3.28576H56.1853L54.9651 5.90487H48.5767V0H72.9973ZM64.5776 3.67775V6.56402L64.6075 20.154H56.9714V3.68025H64.5776V3.67775Z"
          fill={fill}
        />
        <path
          d="M74.2451 0H81.8513V20.1565H74.2451V0ZM98.6658 0V6.56652L95.6163 13.0456H87.9802L91.0296 6.56652V3.28326H82.4053V0H98.6658ZM95.5589 13.5924L98.6658 20.1565H91.0296L89.4899 16.8732H82.4053V13.5899H95.5589V13.5924Z"
          fill={fill}
        />
        <path
          d="M99.9136 0H107.52V20.1565H99.9136V0ZM121.225 13.5899L124.332 20.154H116.696L115.156 16.8707H108.071V13.5874H121.225V13.5899ZM124.332 0L118.175 13.0432H110.569L116.696 0H124.332Z"
          fill={fill}
        />
        <path
          d="M150 0V5.90487H143.612L142.364 3.28576H133.188L131.968 5.90487H125.579V0H150ZM141.578 3.67525V6.56402L135.219 20.154H127.583L133.972 6.56402V3.67775H141.578V3.67525Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_23">
          <rect width="150" height="20.159" fill={fill} />
        </clipPath>
      </defs>
    </svg>
  );
};
const NavItem = ({ title, onClick, theme }) => {
  const textColor = theme === "dark" ? "white" : "black";
  return (
    <Button
      ripple={false}
      className={`text-${textColor} bg-transparent px-2 py-1 shadow-none hover:bg-[#C9F24F] hover:shadow-none focus:bg-[#C9F24F]`}
    >
      {title}
    </Button>
  );
};
export function Navbar({ routes, action, theme }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="lex-col mb-4 mt-2 flex gap-2 text-inherit lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ title }) => (
        <Typography
          key={title}
          as="li"
          variant="small"
          color="inherit"
          className="capitalize"
        >
          <NavItem title={title} theme={theme} />
        </Typography>
      ))}
    </ul>
  );

  return (
    <MTNavbar color="transparent" className="mx-auto p-3">
      <div className="mx-auto flex w-full items-center justify-between text-white">
        <div className="hidden lg:block">
          <Link to="/">
            <Logo theme={theme} />
          </Link>
        </div>

        <div className="hidden lg:block">{navList}</div>
        <div className="hidden h-6 w-6 gap-2 lg:flex">
          {React.cloneElement(action)}
        </div>
        <IconButton
          variant="outlined"
          size="lg"
          className="z-20 mr-auto rounded-full border-none bg-[#C9F24F] text-inherit lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} color="black" className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Dialog
        // className="h-screen bg-white px-4 pb-4 pt-2 text-blue-gray-900"
        size="xxl"
        className="z-20"
        open={openNav}
        handler={setOpenNav}
      >
        <div className="px-2 py-6">
          <IconButton
            variant="outlined"
            size="lg"
            className="z-20 mr-auto rounded-full border-none bg-[#C9F24F] text-inherit lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          </IconButton>
          <div className="mx-4 mt-32 flex flex-col items-center gap-3">
            {routes.map(({ title }) => (
              <Typography
                key={title}
                as="h1"
                variant="h1"
                color="inherit"
                className="capitalize"
              >
                {title}
                {/* <NavItem title={title} theme={theme} /> */}
              </Typography>
            ))}
            <div className="h-10 w-10">
              {React.cloneElement(action, { theme: "light" })}
            </div>
          </div>
        </div>
      </Dialog>
    </MTNavbar>
  );
}

Navbar.defaultProps = {
  theme: "dark",
  brandName: "Material Tailwind React",
  action: <InstagramIcon />,
};

Navbar.propTypes = {
  theme: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
