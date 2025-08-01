const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Farouk has been instrumental in maintaining and enhancing our legacy website.
                  His technical precision ensure everything runs smoothly.
                  We truly rely on his expertise. "
              </span>
              <span className="person">Ammar Hmammieh</span>
              <span className="job">Senior Front End Developer - ATC Solution</span>
              <span className="number">+963988501453</span>
            </p>
            <img src="assets/testimonials/testimonial-1.png" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Working with Farouk has been a pleasure. His prompt responses and effective solutions
                  to complex figma design and animation challenges were incredibly helpful. Highly recommended! "
              </span>
              <span className="person">Salim Al Daadi</span>
              <span className="job">UI/UX Team Leader - Tradinos</span>
              <span className="number">+963992947551</span>
            </p>
            <img src="assets/testimonials/testimonial-2.png" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
