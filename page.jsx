const stock = [
  { name: "BPC-157", status: "available" },
  { name: "TB-500", status: "low" },
  { name: "GHK-Cu", status: "enquire" },
  { name: "MT-2", status: "available" },
];

const getStatus = (status) => {
  if (status === "available") return "Available";
  if (status === "low") return "Low Stock";
  return "Enquire";
};

const getStatusClass = (status) => {
  if (status === "available") return "status-available";
  if (status === "low") return "status-low";
  return "status-enquire";
};

export default function HomePage() {
  return (
    <main className="page">
      <header className="nav">
        <div className="brand-wrap">
          <div className="brand-badge">PB</div>
          <div className="brand-name">
            PYROX <span>BIO</span>
          </div>
        </div>

        <a href="#contact" className="nav-link">
          Contact
        </a>
      </header>

      <section className="hero">
        <h1>
          Advanced peptides. <span>Direct enquiry.</span>
        </h1>

        <p>
          Clean supplier presentation. Minimal friction. Enquire directly for
          access and availability.
        </p>

        <a href="#contact" className="primary-button">
          Enquire Now
        </a>
      </section>

      <section className="stock-card">
        <div className="section-label">Current Stock</div>

        <div className="stock-list">
          {stock.map((item) => (
            <div key={item.name} className="stock-row">
              <div className="stock-name">{item.name}</div>
              <div className={`stock-status ${getStatusClass(item.status)}`}>
                {getStatus(item.status)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Direct communication only.</h2>

        <p>Reach out for availability, details, and access.</p>

        <div className="button-row">
          <a href="#" className="primary-button">
            Telegram
          </a>

          <a href="#" className="secondary-button">
            Direct Message
          </a>
        </div>
      </section>
    </main>
  );
}
