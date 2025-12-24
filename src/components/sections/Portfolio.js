import { handleSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Projects
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      <Swiper
        {...handleSlider.portfolio}
        className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
        data-wow-offset={200}
      >
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <img className="img-fluid" src="assets/portfolio/atc-systematic.png" title="ATC Systematic Website" alt="ATC Systematic Website" />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>ATC Systematic</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project:
                  </span>
                  <span>Our Company Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client:
                  </span>
                  <span>ATC Systematic</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration:
                  </span>
                  <span>3 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks:
                  </span>
                  <span>React</span>
                </li>
              </ul>
            </div>
            <a href="https://www.atcsystematic.com" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...handleSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/lumytic-website.png" title="Lumytic Website" alt="Lumytic Website" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/lumytic-customer.png" title="Lumytic Customer" alt="Lumytic Customer" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/lumytic-admin.png" title="Lumytic Admin" alt="Lumytic Admin" />
              </SwiperSlide>
              <div className="swiper-pagination bottom-projects" />
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Lumytic</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project:
                  </span>
                  <span>Lumytic Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client:
                  </span>
                  <span>ATC Systematic</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration:
                  </span>
                  <span>5 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks:
                  </span>
                  <span>React</span>
                </li>
              </ul>
            </div>
            <a href="https://www.lumytic.com" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...handleSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/help-portal.png" title="Lumytic Help Portal" alt="Lumytic Help Portal" />
              </SwiperSlide>
              <div className="swiper-pagination bottom-projects" />
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Help Portal</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project:
                  </span>
                  <span>Lumytic Help Portal</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client:
                  </span>
                  <span>ATC Systematic</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration:
                  </span>
                  <span>2 months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks:
                  </span>
                  <span>Docusaurus & Next.js</span>
                </li>
              </ul>
            </div>
            <a href="https://help.lumytic.com" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...handleSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/admin-dashboard.png" title="ERP Admin Dashboard" alt="ERP Admin Dashboard" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/customer-dashboard.png" title="ERP Customer Dashboard" alt="ERP Customer Dashboard" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/website.png" title="ERP Website" alt="ERP Website" />
              </SwiperSlide>
              <div className="swiper-pagination bottom-projects" />
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>ERP Dashboard</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project:
                  </span>
                  <span>ERP Dashboard</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client:
                  </span>
                  <span>ATC Systematic</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration:
                  </span>
                  <span>3 Year</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks:
                  </span>
                  <span>PHP & jQuery</span>
                </li>
              </ul>
            </div>
            <a href="https://demo.lumytic.com" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...handleSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/digital-company.png" title="Digital Service Company Project" alt="Digital Service Company Project" />
              </SwiperSlide>
              <div className="swiper-pagination bottom-projects" />
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Digital Service Company</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project:
                  </span>
                  <span>Digital Service Company Website</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client:
                  </span>
                  <span>Freelance</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration:
                  </span>
                  <span>2 Days</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks:
                  </span>
                  <span>React</span>
                </li>
              </ul>
            </div>
            <a href="https://digital-service-company.vercel.app/" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...handleSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/holiday-project.png" title="Holiday Project" alt="Holiday Project" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/ramadan-holiday.png" title="Ramadan Holiday Information" alt="Ramadan Holiday Information" />
              </SwiperSlide>
              <div className="swiper-pagination bottom-projects" />
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Holiday Project</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project:
                  </span>
                  <span>Holiday Project</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client:
                  </span>
                  <span>Freelance</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration:
                  </span>
                  <span>7 Days</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks:
                  </span>
                  <span>Google Sheets & Google Apps Script</span>
                </li>
              </ul>
            </div>
            <a href="https://script.google.com/macros/s/AKfycbzZZTulqg3_5bQQleCpmdjSOsmqzEazLlf-n_6Oey4n497XxZnEWDACIIZO3mYrHo7m3A/exec" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...handleSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/trips-project.png" title="Trips Calcualtor Project" alt="Trips Calcualtor Project" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/trips-report.png" title="Trips Calcualtor Report" alt="Trips Calcualtor Report" />
              </SwiperSlide>
              <div className="swiper-pagination bottom-projects" />
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>Trips Calcualtor Project</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project:
                  </span>
                  <span>Trips Calcualtor Project</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client:
                  </span>
                  <span>Freelance</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration:
                  </span>
                  <span>5 Days</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks:
                  </span>
                  <span>Google Sheets & Google Apps Script & Google Maps</span>
                </li>
              </ul>
            </div>
            <a href="https://script.google.com/macros/s/AKfycbyFHFWGrWZwKzoPpZV6JUpmeBCiepIy6PhUjqPloVai4OBeT_oMzvfXamKADr7m97w2/exec" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        {/* PORTFOLIO ITEM STARTS */}
        <SwiperSlide className="single-item swiper-slide">
          {/* ITEM MAIN CONTENT STARTS */}
          <div className="main-content">
            <Swiper
              {...handleSlider.portfolioItems}
              className="swiper swiper-portfolio-item"
            >
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/proposal-project.png" title="Proposal Project" alt="Proposal Project" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/add-proposal.png" title="Add Proposal" alt="Add Proposal" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/edit-proposal.png" title="Edit Proposal" alt="Edit Proposal" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/delete-proposal.png" title="Delete Proposal" alt="Delete Proposal" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/edit-project.png" title="Edit Project" alt="Edit Project" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/invoices-project.png" title="Invoices Project" alt="Invoices Project" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/edit-invoice.png" title="Edit Invoice" alt="Edit Invoice" />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <img src="assets/portfolio/descrepancies-project.png" title="Descrepancies Project" alt="Descrepancies Project" />
              </SwiperSlide>
              <div className="swiper-pagination bottom-projects" />
            </Swiper>
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>CRUD Project</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project:
                  </span>
                  <span>CRUD Proposal Project</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-user" /> Client:
                  </span>
                  <span>Freelance</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Duration:
                  </span>
                  <span>2 Months</span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Frameworks:
                  </span>
                  <span>Google Sheets & Google Apps Script</span>
                </li>
              </ul>
            </div>
            <a href="https://script.google.com/macros/s/AKfycbz1TPnpmOyqKEHWIFNE1ZFFE7upRUUkZjPqRBEWcJ36uhQye0CGhjqi13s-5S4aNZSm/exec" target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
        {/* PORTFOLIO ITEM ENDS */}
        <div className="nav-item next-item animated-btn">
          <span />
        </div>
        <div className="nav-item prev-item animated-btn">
          <span />
        </div>
      </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;