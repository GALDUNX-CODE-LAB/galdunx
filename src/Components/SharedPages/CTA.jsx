import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { MdArrowOutward } from "react-icons/md";

export function CTA() {
  return (
    <section className="py-20 bg-pry  text-black">
      <div className="container max-w-7xl">
        <div className="max-w-2xl space-y-5">
          <p className="text-gray-600 text-2xl">
            Ready to Transform Your Vision?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Partner with GaldunX to bring your ideas to life.
          </h2>
          <div>
            <Link to="/contact">
              <Button className="flex gap-2 bg-black text-pry hover:text-black hover:border-black">
                Get Started <MdArrowOutward />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
