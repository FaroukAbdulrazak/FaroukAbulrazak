const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Farouk Abdulrazak</span>
        <ul>
          <li>
            <a href="https://github.com/FaroukAbdulrazak" target="_blank">
              <i className="fa-brands fa-github" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/faroukabdulrazak" target="_blank">
              <i className="fa-brands fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/farouk_abdulrazak" target="_blank">
              <i className="fa-brands fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/Farouk.Abdulrazak" target="_blank">
              <i className="fa-brands fa-facebook" />
            </a>
          </li>
          <li>
            <a href="mailto:faroukabdulrazzak@gmail.com">
              <i className="fa fa-envelope" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Copyright;
