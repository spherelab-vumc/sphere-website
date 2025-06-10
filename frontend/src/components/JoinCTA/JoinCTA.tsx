import "./JoinCTA.scss";
import { useNavigate } from "react-router-dom";

// import React from "react";

function JoinCTA() {
  const navigate = useNavigate();
  return (
    <section className="join-section">
      <h3 className="join-title">Want to Join our Lab?</h3>
      <p className="join-message">
        We are always on the lookout for excited and motivated students to join
        our team. Learn how to join our team by clicking the button below!
      </p>
      <button className="join-button" onClick={() => navigate("/#")}>
        Join Our Lab
      </button>
    </section>
  );
}

export default JoinCTA;
