import { Link } from "react-router-dom";
import bgImg from "@/assets/images/bg.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
import { useState } from "react";
const blackBox = {
  initial: {
    height: "100vh",
  },
};

const InitialTransition = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className="relative z-50 w-full bg-black"
        initial="initial"
        animate="animate"
        variants={blackBox}
      />
    </div>
  );
};
export function SignUp() {
  const [isSigned, setSign] = useState(false);
  const afterSubmit = (
    <div className="mb-4ml-auto mx-auto w-full px-4 text-center lg:w-1/3">
      <Typography variant="h1" color="white">
        THANK YOU!
      </Typography>
      <Typography variant="small" color="white">
        You have been added to our waitlist. An email will be sent out before
        the launch!
      </Typography>
    </div>
  );

  function onSubmit() {
    setSign(true);
  }
  return (
    <div className="relative flex h-screen content-center items-center justify-center pb-32 ">
      {/* <InitialTransition /> */}
      <div className="absolute top-0 h-full w-full bg-gradient-to-b from-[#6360C7] to-[#8782CD] bg-cover bg-center " />
      <img
        src={bgImg}
        className="absolute my-auto h-2/3 w-auto object-cover object-center "
      />
      <div className="absolute inset-0 h-full w-full object-cover backdrop-blur-lg" />
      <div className="max-w-8xl container relative mx-auto">
        <div className="flex flex-wrap items-center">
          {!isSigned ? (
            <div className="mb-4ml-auto mx-auto w-full px-4 text-center lg:w-1/3">
              <Typography color="white" variant="h1">
                Sign Up
              </Typography>
              <Typography variant="h3" color="white" className="mb-16">
                Early Access
              </Typography>
              <form
                className="my-5 mb-12 flex flex-col items-center gap-4"
                onSubmit={onSubmit}
              >
                <input
                  className="h-10 w-full rounded-xl bg-[#F1F1F1] p-2 text-center"
                  placeholder="FULL NAME"
                />
                <input
                  className="h-10 w-full rounded-xl bg-[#F1F1F1] p-2 text-center"
                  placeholder="EMAIL"
                />

                <Button
                  className="w-1/2 rounded-full bg-[#C9F24F] px-10 font-bold text-black sm:w-full"
                  type="submit"
                >
                  SIGN UP
                </Button>
              </form>
            </div>
          ) : (
            afterSubmit
          )}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
