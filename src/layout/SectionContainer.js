const PageHeading = ({ pageIcon, pageTitle }) => {
  return (
    <div className="page-heading">
      <span className="icon">
        <i className={pageIcon} />
      </span>
      <h2>{pageTitle}</h2>
    </div>
  );
};

const SectionContainer = ({ children, pageTitle, pageIcon, pageId, map }) => {
  return (
    <section className={`${pageId}-section pt-page  `} id={pageId}>
      <div className="section-container">
        {/*Page Heading*/}
        <PageHeading pageIcon={pageIcon} pageTitle={pageTitle} />
        {children}
      </div>
      {map && (
        <div className="google">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3686.1115335095633!2d-99.88990078708842!3d39.02357111669505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1673767198655!5m2!1sen!2sbd"
            width="100%"
            height={200}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </section>
  );
};
export default SectionContainer;
