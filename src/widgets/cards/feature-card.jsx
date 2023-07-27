import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export function FeatureCard({ img }) {
  return (
    <Card className="rounded-2xl bg-transparent shadow-none">
      <CardBody className="px-8 text-center">
        <img className="w-60" src={img} />
      </CardBody>
    </Card>
  );
}

FeatureCard.propTypes = {
  img: PropTypes.string,
};

FeatureCard.displayName = "/src/widgets/layout/feature-card.jsx";

export default FeatureCard;
