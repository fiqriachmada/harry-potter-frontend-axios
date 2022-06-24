import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="py-5 text-center container mt-5 mb-lg-5">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Harry Potter Apps</h1>
          <p className="lead text-muted">
            “He must have known I'd want to leave you." "No, he must have known
            you would always want to come back.” ― J.K. Rowling, Harry Potter
            and the Deathly Hallows
          </p>
          <p>
            <Link to="/characters" className="btn btn-primary my-2 mx-2">
              Character
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
