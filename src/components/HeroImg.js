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
          <h1>Kick for Cause</h1>
          <p>
          Youth soccer training and camps in Sammamish, Washington that give back to the community.
          </p>
          <Card
            icon="⚽"
            title="What?"
            description="Kick for Cause offers fun, skill-building soccer programs for kids of all ages and abilities. Our team of experienced high-school trainers runs weekly private sessions ($35 per session) and seasonal group camps that focus on fundamentals, confidence, and game sense. All skill levels are welcome and kids tend to love our sessions because we keep activities engaging, positive, and development-focused. As a nonprofit, proceeds help improve local fields across Washington."
          />
          <Card
            icon="📅"
            title="When?"
            description="We run year-round weekly private sessions (book anytime) at $35 per session, plus seasonal group camps. This summer we'll also offer 3-day camps every week from Tuesdays to Thursdays — families can choose what works best for them."
          />
          <Card
            icon="📍"
            title="Where?"
            description="Locations may vary throughout Sammamish, but often sessions will be held at Klahanie Park, Beaver Lake Middle School, or Skyline High School."
          />
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Ongoing Programs & Summer Camps
          </h2>
          <p className="text-center text-gray-600 mt-4">
            We offer weekly private sessions year-round ($35/session) and seasonal
            group camps. Summer 2026 camp dates and details will be posted soon —
            text or email us to enroll or book a private session today.
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