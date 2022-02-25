import React from "react";

function Footer() {
  return (
    <div className="pt-20 pb-10 dark:bg-gray-800">
      <section className="flex flex-col items-center">
        <div>
          <p className="py-2 text-2xl font-semibold text-center text-white">
            Join the Adventure newsletter to receice our best vacation deals
          </p>
          <p className="py-2 text-xl font-semibold text-center text-white">
            You can unsubscribe at any time
          </p>
        </div>
        <div className="py-2">
          <form className="px-2">
            <input className="px-10 py-2 mx-4" placeholder="Your Email" />
            <button
              type="button"
              className="py-2 mr-3 text-sm font-bold text-center text-white duration-200 delay-100 rounded-sm px-2.5 hover:text-gray-900 bg outline outline-slate-100 hover:bg-slate-100 md:mr-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <div className="flex justify-center mt-12 text-lg text-white">
        <div className="flex mx-4 my-4">
          <div className="mx-8">
            <h1 className="mb-2 text-2xl font-bold">About Us</h1>
            <p>How it works</p>
            <p>Testimonials</p>
            <p>Careers</p>
            <p>Terms of Service</p>
          </div>
          <div className="mx-8 ">
            <h1 className="mb-2 text-2xl font-bold">Contact Us</h1>
            <p>Contact</p>
            <p>Support</p>
            <p>Destinations</p>
            <p>Sponsorships</p>
          </div>
          <div className="mx-8 ">
            <h1 className="mb-2 text-2xl font-bold">Videos</h1>
            <p>Submit Video</p>
            <p>Ambassadors</p>
            <p>Agency</p>
            <p>Influencer</p>
          </div>
          <div className="mx-8 ">
            <h1 className="mb-2 text-2xl font-bold">Social Media</h1>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Youtube</p>
            <p>Twitter</p>
          </div>
        </div>
      </div>
      <section className="mt-20">
        <div className="flex items-center justify-between text-white px-72">
          <div className="text-4xl">
            <i className="ri-aliens-fill" />
          </div>
          <small className="items-center justify-center text-lg font-bold">
            Alien Jom Ride
          </small>
          <div className="flex text-4xl">
            <div className="mx-2">
              <i className="ri-facebook-fill" />
            </div>
            <div className="mx-2">
              <i className="ri-instagram-line" />
            </div>
            <div className="mx-2">
              <i className="ri-youtube-fill" />
            </div>
            <div className="mx-2">
              <i className="ri-twitter-fill" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
