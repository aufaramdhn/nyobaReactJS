import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Footer() {
  return (
    <div className="pt-20 dark:bg-gray-800">
      <section className="flex flex-col items-center">
        <div>
          <p className="py-2 text-2xl font-semibold text-center text-white">Join the Adventure newsletter to receice our best vacation deals</p>
          <p className="py-2 text-xl font-semibold text-center text-white">You can unsubscribe at any time</p>
        </div>
        <div className="py-2">
          <form>
            <input className="px-2 py-2 mx-4 w-34 md:px-5" placeholder="Your Email" />
            <Link to="/contact">
              <button type="button" className="py-2 mr-3 text-sm font-bold text-center text-white duration-200 delay-100 rounded-sm px-2.5 hover:text-gray-900 bg outline outline-slate-100 hover:bg-slate-100 md:mr-0">
                Subscribe
              </button>
            </Link>
          </form>
        </div>
      </section>
      <div className="justify-center mt-12 text-lg text-white md:flex">
        <div className="grid grid-cols-2 mx-1 md:flex">
          <div className="flex flex-col mx-8 my-3 md:my-0">
            <h1 className="mb-2 text-2xl font-bold">About Us</h1>
            <Link to="/">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="flex flex-col mx-8 my-3 md:my-0">
            <h1 className="mb-2 text-2xl font-bold">Contact Us</h1>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
          <div className="flex flex-col mx-8 my-3 md:my-0">
            <h1 className="mb-2 text-2xl font-bold">Videos</h1>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="flex flex-col mx-8 my-3 md:my-0">
            <h1 className="mb-2 text-2xl font-bold">Social Media</h1>
            <Link to="/">instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="py-5 mt-20 bg-slate-900">
        <div className="flex flex-col items-center justify-between px-4 text-white lg:flex-row md:flex lg:px-80">
          <div className="pb-4 text-5xl md:text-4xl">
            <Link to="">
              <i className="ri-aliens-fill" />
            </Link>
          </div>
          <small className="justify-center pb-6 text-lg font-bold md:items-center md:justify-between">Alien Jom Ride © 2022</small>
          <div className="flex text-2xl md:text-4xl">
            <div className="mx-2">
              <Link to="">
                <i className="ri-facebook-fill" />
              </Link>
            </div>
            <div className="mx-2">
              <Link to="">
                <i className="ri-instagram-line" />
              </Link>
            </div>
            <div className="mx-2">
              <Link to="">
                <i className="ri-youtube-fill" />
              </Link>
            </div>
            <div className="mx-2">
              <Link to="">
                <i className="ri-twitter-fill" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
