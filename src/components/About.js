import { Swiper, SwiperSlide } from "swiper/react";
import SectionContainer from "../layout/SectionContainer";
import { clientSliderProps, testimonialSliderProps } from "../sliderProps";
const About = () => {
  return (
    <SectionContainer
      pageId={"about"}
      pageIcon={"lnr lnr-user"}
      pageTitle={"About Me."}
    >
      <div className="row about mb-70">
        <div className="col-lg-8">
          {/*Personal Intro*/}
          <h3 className="mb-20">UI/UX Designer &amp; Developer</h3>
          <p>
            Dolor reprehenderit aut repudiandae maiores recusandae. Consequatur
            dolor nisi labore commodi ipsa? Excepturi velit laboriosam at
            voluptatibus cupiditate est vel. Dolorem praesentium itaque fugiat
            placeat quas consequatur? Obcaecati natus rerum
          </p>
          <p>
            Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod quis
            unde aliquid excepturi laudantium? Illo architecto aliquam velit
            illo magnam neque perferendis sint Incidunt eius ipsa inventore
            labore eos velit. Minus hic magni reiciendis necessitatibus ex
            Quidem officia deleniti accusamus obcaecati dolores. Porro culpa
            quibusdam impedit porro praesentium excepturi. Alias ab consequatur?
          </p>
          {/*Signature Image*/}
          <div className="signature mt-20">
            <img src="img/signature-white.png" alt="" />
          </div>
        </div>
        {/*Personal Info*/}
        <div className="col-lg-4">
          <div className="about-info">
            <h3 className="mb-20">Personal Information</h3>
            <ul>
              <li>
                <span className="title">Name</span>
                <span className="value">Philip Watson</span>
              </li>
              <li>
                <span className="title">Age</span>
                <span className="value">26 Years</span>
              </li>
              <li>
                <span className="title">Residence</span>
                <span className="value">New York, USA</span>
              </li>
              <li>
                <span className="title">Address</span>
                <span className="value">123 Lorem Ipsum</span>
              </li>
              <li>
                <span className="title">Email</span>
                <span className="value">example@example.com</span>
              </li>
              <li>
                <span className="title">Phone</span>
                <span className="value">(+1) 123 456 7890</span>
              </li>
              <li>
                <span className="title">Freelance</span>
                <span className="value">Available</span>
              </li>
            </ul>
            <div className="resume-button mt-30">
              <a className="btn-main" href="#">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About Info Row End*/}
      {/*Services Row Start*/}
      <div className="row services mb-30">
        <div className="col-md-12">
          <div className="subheading">
            <h3>Services</h3>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-laptop" />
            </div>
            <h4>Web Development</h4>
            <p>
              Amet aspernatur delectus maxime ducimus similique Ratione
              asperiores corporis provident aut libero.
            </p>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-eye" />
            </div>
            <h4>Web Design</h4>
            <p>
              Amet aspernatur delectus maxime ducimus similique Ratione
              asperiores corporis provident aut libero.
            </p>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-laptop-phone" />
            </div>
            <h4>Responsive Design</h4>
            <p>
              Amet aspernatur delectus maxime ducimus similique Ratione
              asperiores corporis provident aut libero.
            </p>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-camera" />
            </div>
            <h4>Photography</h4>
            <p>
              Amet aspernatur delectus maxime ducimus similique Ratione
              asperiores corporis provident aut libero.
            </p>
          </div>
        </div>
      </div>
      {/*Services Row End*/}
      {/*Clients Row Start*/}
      <div className="row clients mb-70">
        <div className="col-md-12">
          <div className="subheading">
            <h3>Clients</h3>
          </div>
        </div>
        <Swiper {...clientSliderProps} className="">
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-01.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-02.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-03.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-04.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-05.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-06.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-07.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-08.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-09.png" alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*Clients Row End*/}
      {/*Testimonials Row Start*/}
      <div className="row testimonials mb-50">
        <div className="col-md-12">
          <div className="subheading">
            <h3>Testimonials</h3>
          </div>
          <Swiper {...testimonialSliderProps} className="">
            {/*Testimonail Item*/}
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-content">
                <p>
                  Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum
                  deserunt suscipit eos fugit. Consectetur dolorum temporibus
                  facilis impedit exercitationem dignissimos.
                </p>
              </div>
              <div className="testimonial-meta">
                <img src="img/testimonials/author-1.jpg" alt="" />
                <div className="meta-info">
                  <h4>Kate Fox</h4>
                  <p>Digital Marketing Executive</p>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonail Item*/}
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-content">
                <p>
                  Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum
                  deserunt suscipit eos fugit. Consectetur dolorum temporibus
                  facilis impedit exercitationem dignissimos.
                </p>
              </div>
              <div className="testimonial-meta">
                <img src="img/testimonials/author-2.jpg" alt="" />
                <div className="meta-info">
                  <h4>Emma Jones</h4>
                  <p>Creative Director</p>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonail Item*/}
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-content">
                <p>
                  Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum
                  deserunt suscipit eos fugit. Consectetur dolorum temporibus
                  facilis impedit exercitationem dignissimos.
                </p>
              </div>
              <div className="testimonial-meta">
                <img src="img/testimonials/author-3.jpg" alt="" />
                <div className="meta-info">
                  <h4>Jack Smith</h4>
                  <p>Marketing Director</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/*Testimonials Row End*/}
      </div>
    </SectionContainer>
  );
};
export default About;
