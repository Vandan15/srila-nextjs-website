import { EnvelopeIcon } from "@phosphor-icons/react";
import SectionContainer from "../layout/SectionContainer";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setSuccess(false);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwnqgBr1O9qpbT0jhnQqZZZ0rOpX5Wem4q_CXtFvItvDGq8r5fiQeGbg3EGUa7D4yIY/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify({ ...formData }),
        }
      );

      if (response.ok) {
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionContainer
      pageId="contact"
      pageIcon={<EnvelopeIcon/>}
      pageTitle={"Contact Me"}
      // map
    >
      <div className="row mb-70">
        <div className="col-lg-8  offset-lg-2">
          <div className="subheading">
            <h3>Get In Touch with Me</h3>
          </div>
          {/*Form Start*/}
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="row">
              {/*Name Field*/}
              <div className="col-md-6 mb-30">
                <label htmlFor="cf-name" className="field-label mb-0">Name *</label>
                <span className="input">
                  <input
                    className={`input__field cf-validate ${errors.name ? 'error' : ''}`}
                    type="text"
                    id="cf-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={loading || success}
                    placeholder="Enter your name"
                    required
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </span>
              </div>
              {/*Email Field*/}
              <div className="col-md-6 mb-30">
                <label htmlFor="cf-email" className="field-label mb-0">Email *</label>
                <span className="input">
                  <input
                    className={`input__field cf-validate ${errors.email ? 'error' : ''}`}
                    type="email"
                    id="cf-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={loading || success}
                    placeholder="Enter your email"
                    required
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </span>
              </div>
              {/*Subject Field*/}
              <div className="col-md-12 mb-30">
                <label htmlFor="cf-subject" className="field-label mb-0">Subject *</label>
                <span className="input">
                  <input
                    className={`input__field cf-validate ${errors.subject ? 'error' : ''}`}
                    type="text"
                    id="cf-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={loading || success}
                    placeholder="Enter subject"
                    required
                  />
                  {errors.subject && <span className="error-message">{errors.subject}</span>}
                </span>
              </div>
              {/*Message Box*/}
              <div className="col-md-12 mb-30">
                <label htmlFor="cf-message" className="field-label mb-0">Message *</label>
                <span className="input">
                  <textarea
                    className={`input__field cf-validate ${errors.message ? 'error' : ''}`}
                    id="cf-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={loading || success}
                    placeholder="Enter your message"
                    required
                  />
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </span>
              </div>
              {/* <div className="alert-container col-md-12">
                {success && (
                  <div className="alert alert-success">
                    Your message has been sent successfully.
                  </div>
                )}
              </div> */}
              {/*Submit Button*/}
              <div className="col-md-12 text-center">
                <button 
                  id="cf-submit" 
                  className="btn-main"
                  type="submit"
                  disabled={loading || success}
                >
                  {loading ? "Sending..." : success ? "Thank You for your message!" : "Send Message"}
                </button>
              </div>
            </div>
          </form>
          {/*Form End*/}
        </div>
      </div>
      {/*Contact Info Row Start*/}
      {/*<div className="row contact-info mb-70">
        <div className="col-md-4 info-item">
          <span className="icon">
            <i className="fas fa-paper-plane" />
          </span>
          <h5>
            <a href="mailto:example@example.com">example@example.com</a>
          </h5>
        </div>
        <div className="col-md-4 info-item">
          <span className="icon">
            <i className="fas fa-map-marker-alt" />
          </span>
          <h5>123 Lorem Ipsum, USA</h5>
        </div>
        <div className="col-md-4 info-item">
          <span className="icon">
            <i className="fas fa-phone" />
          </span>
          <h5>(+1) 123 456 7890</h5>
        </div>
      </div>*/}

      {/*Google Map End*/}
    </SectionContainer>
  );
};
export default Contact;
