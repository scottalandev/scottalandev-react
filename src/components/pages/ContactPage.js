import { PageHead } from "../modules/displayModules";
import { contactHead } from "../siteData/siteData";
import "./pages.css";

function ContactPage() {
  return (
    <div className="container">
      <PageHead title={contactHead.title} text={contactHead.text} />
    </div>
  );
}

export default ContactPage;
