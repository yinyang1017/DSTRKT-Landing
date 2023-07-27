import PropTypes from "prop-types";
export const InstagramIcon = ({ theme }) => {
  const fill = theme === "dark" ? "white" : "black";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="instagram">
      <g
        fill="none"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        data-name="<Group>"
      >
        <rect
          width="21"
          height="21"
          x="1.5"
          y="1.5"
          data-name="<Path>"
          rx="5.48"
          ry="5.48"
        ></rect>
        <circle cx="12" cy="12" r="5.5" data-name="<Path>"></circle>
        <circle cx="18" cy="5" r=".5" data-name="<Path>"></circle>
      </g>
    </svg>
  );
};
InstagramIcon.defaultProps = {
  theme: "dark",
};
InstagramIcon.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]),
};
