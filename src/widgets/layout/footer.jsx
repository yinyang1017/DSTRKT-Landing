import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";
import { InstagramIcon } from "../svg";
const FooterIcon = () => {
  return (
    <svg
      width="28"
      height="83"
      viewBox="0 0 28 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0079 4.37639C14.3639 5.93939 14.9661 7.74204 15.982 9.43529C17.7677 12.4258 20.3441 14.3587 23.6693 15.2236C21.2448 15.8592 19.2078 17.0679 17.5844 18.8445L17.5321 18.9018L17.5007 18.9696C16.6261 20.7514 14.9661 35.2143 14.1283 55.799C13.3585 36.423 11.9027 21.8507 11.0021 19.5531L10.9706 19.4801L10.9183 19.4176C9.22162 17.3284 7.02226 15.9269 4.34636 15.2288C7.66635 14.3639 10.2428 12.431 12.0284 9.4405C13.0391 7.74725 13.6413 5.9446 14.0026 4.3816M14.0026 0.00520999L13.9817 0.791918C13.8246 3.90228 12.3898 15.2288 0 15.2288C5.18422 15.2288 8.45184 17.2138 10.5046 19.7459C11.5362 22.3769 13.5732 43.9775 14.0183 70.8767L14.1021 79.6294C14.1021 80.4109 14.1021 81.2029 14.1021 82.0104L14.1126 81.0205L14.1231 82.0104C14.1231 81.2029 14.1231 80.4109 14.1231 79.6294L14.2068 70.8767C14.6886 41.7216 17.0398 21.0692 17.9562 19.204C20.0299 16.9377 23.1876 15.2288 27.9948 15.2288C15.6155 15.2184 14.1859 3.89707 14.0236 0.786708L14.0026 0V0.00520999Z"
        fill="#C9F24F"
      />
      <path
        d="M27.6858 24.9194V35.2299H0V24.9194H27.6858ZM27.6858 51.3236L13.3271 58.0132L0 51.8394V35.9802H4.5087V43.5763L13.3271 47.6714L23.1771 43.1074V35.9854H27.6858V51.334V51.3236Z"
        fill="#C9F24F"
      />
    </svg>
  );
};
export function Footer({ theme }) {
  return (
    <footer
      className={`fixed bottom-0 w-full ${
        theme == "dark" ? "bg-[#998AD6]" : "bg-[#C4C4C4]"
      } px-4 pb-4 pt-8`}
    >
      <div className=" mx-auto">
        <div className="flex text-center sm:flex-col-reverse md:flex-row lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex sm:justify-evenly md:justify-start">
              <div className="flex items-center">
                <FooterIcon className="-translate-x-1" />

                <Typography variant="h4" className="text-white">
                  DSTARKT.WORLD @ 2023-FUTURE
                </Typography>
              </div>
            </div>
          </div>
          <div className="flex w-max items-center sm:mx-auto md:mr-0 lg:mt-0">
            <Typography variant="h4" className="text-white">
              {" "}
              CONTACT /{" "}
            </Typography>
            <div className="h-8 w-8">
              <InstagramIcon />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
