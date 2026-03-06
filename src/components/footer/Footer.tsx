import { Link } from "react-router";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="bg-brand">
      <div className="wrapper">
        <FooterTop />
        <FooterBottom />
      </div>
      <hr className="text-gray-500" />
      <div className="flex flex-col sm:flex-row justify-between items-center py-6 wrapper">
        <p className="para-6">
          © ২০২৪ পুলিশ সুপার, নারায়ণগঞ্জ। সর্বস্বত্ব সংরক্ষিত।
        </p>
        <p className="para-6">
          Developed by{" "}
          <Link
            target="_blank"
            className="text-yellow-500"
            to={"https://pariciti.com/"}
          >
            Porichiti
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
