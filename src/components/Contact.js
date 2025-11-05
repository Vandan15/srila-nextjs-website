import { EnvelopeIcon } from "@phosphor-icons/react";
import SectionContainer from "../layout/SectionContainer";
import { useState } from "react";
import {
  EnvelopeSimpleIcon,
  HouseIcon,
  MapPinAreaIcon,
  UserIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const contactFormEndpoint =
    process.env.NEXT_PUBLIC_CONTACT_FORM_API_ENDPOINT || "";

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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate() || !contactFormEndpoint) return;

    setLoading(true);
    setSuccess(false);
    try {
      const response = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({ ...formData }),
      });

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
      pageIcon={<EnvelopeIcon />}
      pageTitle={"Contact Me"}
    >
      <div className="row mb-70 gx-5 gy-5 align-items-stretch">
        <div className="subheading">
          <h4>Let's connect.</h4>
          <p>
            Ready to commission a custom piece, add to your collection, or
            discuss exhibition opportunities?
          </p>
        </div>
        <div className="col-lg-5 col-12 order-2 order-lg-1">
          <div className="row g-3">
            <div className="col-12 col-md-12">
              <div className="contact-card-custom">
                <span className="icon">
                  <HouseIcon size={32} />
                </span>
                <div>
                  <h5>Physical Address</h5>
                  <Link
                    href="https://maps.app.goo.gl/SQ3a51TiEy5CBFNg7"
                    target="_blank"
                  >
                    4C Bondel Road, Kolkata 700019
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="contact-card-custom">
                <span className="icon">
                  <MapPinAreaIcon size={32} />
                </span>
                <div>
                  <h5>Postal Address</h5>
                  <Link
                    href="https://maps.app.goo.gl/WHS2vzGfdWBqMk1U6"
                    target="_blank"
                  >
                    3A Lovelock Street, Kolkata 700019
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12">
              <div className="contact-card-custom">
                <span className="icon">
                  <EnvelopeSimpleIcon size={32} />
                </span>
                <div>
                  <h5>Email</h5>
                  <p>
                    <a href="mailto:srila.glass@gmail.com" target="_blank">
                      srila.glass@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="col-lg-7 col-12 order-1 order-lg-2">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="contact-form-custom"
          >
            <div className="row">
              {/*Name Field*/}
              <div className="col-12 mb-3">
                <label htmlFor="cf-name" className="field-label mb-2">
                  Name *
                </label>
                <span className="input">
                  <input
                    className={`input__field cf-validate ${
                      errors.name ? "error" : ""
                    }`}
                    type="text"
                    id="cf-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={loading || success}
                    placeholder="Enter your name"
                    required
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </span>
              </div>
              {/*Email Field*/}
              <div className="col-12 mb-3">
                <label htmlFor="cf-email" className="field-label mb-2">
                  Email *
                </label>
                <span className="input">
                  <input
                    className={`input__field cf-validate ${
                      errors.email ? "error" : ""
                    }`}
                    type="email"
                    id="cf-email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={loading || success}
                    placeholder="Enter your email"
                    required
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </span>
              </div>
              {/*Subject Field*/}
              <div className="col-12 mb-3">
                <label htmlFor="cf-subject" className="field-label mb-2">
                  Subject *
                </label>
                <span className="input">
                  <input
                    className={`input__field cf-validate ${
                      errors.subject ? "error" : ""
                    }`}
                    type="text"
                    id="cf-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={loading || success}
                    placeholder="Enter subject"
                    required
                  />
                  {errors.subject && (
                    <span className="error-message">{errors.subject}</span>
                  )}
                </span>
              </div>
              {/*Message Box*/}
              <div className="col-12 mb-3">
                <label htmlFor="cf-message" className="field-label mb-2">
                  Message *
                </label>
                <span className="input">
                  <textarea
                    className={`input__field cf-validate ${
                      errors.message ? "error" : ""
                    }`}
                    id="cf-message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={loading || success}
                    placeholder="Enter your message"
                    required
                  />
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </span>
              </div>
              {/*Submit Button*/}
              <div className="col-12 text-center">
                <button
                  id="cf-submit"
                  className="btn-main w-100"
                  type="submit"
                  disabled={loading || success}
                >
                  {loading
                    ? "Sending..."
                    : success
                    ? "Thank You for your message!"
                    : "Send Message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/*Google Map End*/}
    </SectionContainer>
  );
};
export default Contact;
