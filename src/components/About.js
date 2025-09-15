import SectionContainer from "../layout/SectionContainer";
import { UserIcon } from "@phosphor-icons/react";

const About = () => {
  return (
    <SectionContainer
      pageId={"about"}
      pageIcon={<UserIcon />}
      pageTitle={"About Me"}
    >
      <div className="about mb-70">
        <div>
          {/*Personal Intro*/}
          <p>
            I first encountered the famed glassmakers of Murano as an
            eleven-year-old girl on a family trip to Venice. From that moment,
            the seed was sown. As a young adult, I was keen to explore this
            medium but, due to the lack of available specialised education in
            glass in India, I began my training with a diploma in Industrial
            Design, specializing in Ceramics, from the National Institute of
            Design. Inspired and encouraged by an amazing professor I continued
            with my quest which first took me to Finnish Lapland and then
            London, where a serendipitous meeting with glassmaker Anthony Stern
            changed my life forever. I began as an apprentice in his studio and
            after a spellbinding year of interning with him, I moved on to The
            Glasshouse, a co-operative of 4 glassmakers based in Covent Garden,
            London. There I had the opportunity to further explore the medium -
            observing, learning and working with diverse artists and their
            individual styles and techniques.
          </p>
          <p>
            In 1987, I returned to Calcutta, armed with a file of photographs,
            technical drawings and detailed notes, determined to set up my own
            studio, which would be the first studio glass atelier in India. It
            took over two long years for my dream to become a reality. There
            were hurdles at every turn but eventually from the furnace to the
            annealing oven, the blowing irons to the workbench, from the cullet
            to the colour, every piece of equipment was constructed
            indigenously, and every scrap of raw material sourced locally. My
            first studio space was a rented tin shed in the heart of the city, a
            few kilometres from my home. Approximately 500 sq ft, it was at the
            end of an unpaved lane which also housed a couple of taxi repair
            garages. Over a decade later, I shifted my studio into a small house
            nearby, allowing me to continue to expand, develop and experiment
            with my art form.
          </p>
          <p>
            My work is inspired by my passion for both functional art as well as
            for the vessel form - a creative combination of form with function,
            craft with art. The vessel for me is a vehicle to bring to
            expression my ideas and feelings. It exists to hold or contain, both
            literally and metaphorically and is all encompassing in its
            generosity - it receives, it holds, it gives.
          </p>
          <p>
            Though various influences have played their part, my work is not
            derived from any particular personal, political or economic
            narrative. It is primarily based on form, colour and the interplay
            with its immediate environment and more instinctually, from the
            natural world around us.
          </p>
          <p>
            The spontaneity and impulsiveness of blowing glass suits my nature.
            To me, it is an interactive negotiation between the material and the
            maker, a compromise between what you want and what the glass
            dictates. My personal approach to making is purely organic - I work
            directly with the glass and in essence allow the ideas to flow as I
            blow! While I can control the line and colour of any given piece,
            the resulting form is ultimately a collaboration between my blowing
            skills and the forces of nature.
          </p>
          {/*Signature Image*/}
          {/* <div className="signature mt-20">
            <img src="img/signature-white.png" alt="" />
          </div> */}
        </div>
        {/*Personal Info*/}
      </div>
      {/* About Info Row End*/}
      {/*Services Row Start*/}
      {/* <div className="row services mb-30">
        <div className="col-md-12">
          <div className="subheading">
            <h3>Services</h3>
          </div>
        </div>
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
      </div> */}
      {/*Services Row End*/}
      {/*Clients Row Start*/}
      {/* <div className="row clients mb-70">
        <div className="col-md-12">
          <div className="subheading">
            <h3>Clients</h3>
          </div>
        </div>
        <Swiper {...clientSliderProps} className="">
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-01.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-02.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-03.png" alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-04.png" alt="" />
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-05.png" alt="" />
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-06.png" alt="" />
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-07.png" alt="" />
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-08.png" alt="" />
            </a>
          </SwiperSlide>
          
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-09.png" alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div> */}
      {/*Clients Row End*/}
      {/*Testimonials Row Start*/}
      {/* <div className="row testimonials mb-50">
        <div className="col-md-12">
          <div className="subheading">
            <h3>Testimonials</h3>
          </div>
          <Swiper {...testimonialSliderProps} className="">
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
      </div> */}
    </SectionContainer>
  );
};
export default About;
