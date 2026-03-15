import React from "react";
import "./HeroImgStyles.css";
import CampForm from "./CampForm.js";
import SmallImg from "../assets/3.png";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const HeroImg = () => {
  return (
    <div className="hero bg-gray-100 py-16">
      <div className="content max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card
            icon="⚽"
            title="What?"
            description="Here at the Kick for Cause Sports Camp, our team of 8 high school trainers teach kids attending the camp the fundamentals of soccer. We incorporate fun activities as well to keep the kids engaged and excited to improve! Our non-profit organization is dedicated to spreading the love of the beautiful game and all our proceeds are donated to improve field-conditions across Washington, making the game more accessible! All skill-levels are welcome and our coaches have lots of experience running these camps..."
          />
          <Card
            icon="📅"
            title="When?"
            description="Well... whenever you want! We train kids throughout the year, offering both private sessions, and group sessions. This summer, join us for our biggest project yet, where we will be holding 3-day camps every week from Tuesdays to Thursdays!"
          />
          <Card
            icon="📍"
            title="Where?"
            description="Locations may vary throughout Sammamish, but often sessions will be held at Klahanie Park, Beaver Lake Middle School, or Skyline High School."
          />
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Coming Soon...
          </h2>
          <p className="text-center text-gray-600 mt-4">
            Summer is almost here! More details regarding our summer camps will
            be released shortly. Send us a text or email to enroll your child.
          </p>
        </div>
        <div className="home-form-wrapper mt-16">
          <h1 className="signup-title text-center text-3xl font-bold mb-8">
            Camp Interest Form
          </h1>
          <CampForm />
        </div>
      </div>
      <div className="into-img mt-16">
        <img
          className="full-screen mx-auto rounded-lg shadow-lg"
          src={SmallImg}
          alt="IntroImg"
        />
      </div>
    </div>
  );
};

export default HeroImg;