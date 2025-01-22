import { Scale } from "lucide-react";
import { FramerContainer, FramerHeader } from "../../Components/SharedPages/FramerContainer";

function AboutHero() {
  return (
    <div className="wrap py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-wrap text-white">
            <FramerHeader
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{once: true}}
            className="text-4xl lg:text-6xl font-bold">
              GaldunX - Digital{" "}
              <span className="text-pry underline underline-offset-8">
                Design
              </span>{" "}
              <br />& Development <br />
              <span className=" text-pry underline underline-offset-8">
                Agency
              </span>
            </FramerHeader>

            <FramerContainer
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{once: true}}
            className="wrap flex mt-10">
              <div className="text-lg">
                <p className="text-gray-300">
                  A team of skilled professionals combining expertise in
                  Business Analysis, UI/UX Design, and Development to create
                  products that captivate and delight users.
                </p>
              </div>
            </FramerContainer>
          </div>

          <FramerContainer
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1,}}
          transition={{ duration: 1 }}
          className="img-wrap flex justify-end">
            <img src="/gdx.png" alt="GaldunX" className="w-[500px]" />
          </FramerContainer>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
