import { useState } from "react";
import { Footer } from "@/widgets/layout";
import { Typography, Input, Textarea, Button } from "@material-tailwind/react";

export default function () {
  const [isSubmitted, setSubmitted] = useState(false);
  const afterSubmit = (
    <div className="mb-4ml-auto mx-auto w-full px-4 text-center lg:w-1/3">
      <Typography variant="h1" className="text-[#C9F24F]">
        THANK YOU!
      </Typography>
      <Typography variant="small">
        We will reply to your email within 24 hours
      </Typography>
    </div>
  );

  function onSubmit() {
    setSubmitted(true);
  }
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pb-32 ">
        <div className="absolute top-0 h-full w-full bg-white bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            {!isSubmitted ? (
              <div className="mb-4ml-auto mx-auto w-full px-4 text-center lg:w-3/5">
                <Typography className="text-[#C9F24F]" variant="h1">
                  Contact US
                </Typography>
                <Typography variant="small" className="mb-16">
                  Feedback, collaboration or partnerships, please fill out the
                  form below
                </Typography>
                <form onSubmit={onSubmit}>
                  <div className="my-5 mb-12 flex gap-4">
                    <div className="flex flex-col gap-6 sm:w-full lg:w-1/2">
                      <input
                        className="h-10 rounded-xl bg-[#F1F1F1] p-2"
                        placeholder="FULL NAME"
                      />
                      <input
                        className="h-10 rounded-xl bg-[#F1F1F1] p-2"
                        placeholder="EMAIL"
                      />
                      <input
                        className="h-10 rounded-xl bg-[#F1F1F1] p-2"
                        placeholder="MOBILE"
                      />
                    </div>

                    <div className=" sm:w-full lg:w-1/2">
                      <textarea
                        className="h-full w-full rounded-xl bg-[#F1F1F1] p-4"
                        placeholder="PLEASE WRITE YOUR MESSAGE..."
                      />
                    </div>
                  </div>
                  <Button
                    className="rounded-full bg-[#C9F24F] px-10 font-bold text-black"
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            ) : (
              afterSubmit
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
