import "./Contact.css";
import Card from "../../components/Card";
import Gmail from "../../assets/gmail.png";
import WhatsApp from "../../assets/whatsapp.png";
import LinkedIn from "../../assets/linkedIn.png";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        I'm always happy to hear from you! please don't hesitate to contact me
        using one of the following methods:
      </p>
      <div className="contact-container">
        <Card className="contact-icon">
          <a
            href="mailto:ravindrayadav5438@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Gmail} alt="gmail" />
          </a>
        </Card>
        <Card className="contact-icon">
          <a
            href="https://wa.me/919648005438?text=Hi"
            target="_blank"
            rel="noreferrer"
          >
            <img src={WhatsApp} alt="whatsapp" />
          </a>
        </Card>
        <Card className="contact-icon">
          <a
            href="https://www.linkedin.com/in/ravindra5438"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="linkedIn" />
          </a>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
