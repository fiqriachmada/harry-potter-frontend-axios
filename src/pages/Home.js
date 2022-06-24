import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="py-5 text-center container mt-5 mb-lg-5">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Harry Potter Apps</h1>
          <p className="lead text-muted">
            “Failure meant a stripping away of the inessential. I stopped pretending to myself that I was anything other than what I was, and began to direct all my energy into finishing the only work that mattered to me. Had I really succeeded at anything else, I might never have found the determination to succeed in the one arena I believed I truly belonged.” ― J.K. Rowling, Harry Potter Writer
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
