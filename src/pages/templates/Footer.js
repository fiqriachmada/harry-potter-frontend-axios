import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue pt-4 shadow-lg">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Footer Content</h5>
            <p data-testid="footer-component">
              Here you can use rows and columns to organize your footer content.
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/characters">Character</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="https://fiqriachmada.design"> fiqriachmada.design</a>
      </div>
    </footer>
  );
};

export default Footer;
