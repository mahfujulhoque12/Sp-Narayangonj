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
        <p className="para-4">
          © ২০২৪ পুলিশ সুপার, নারায়ণগঞ্জ। সর্বস্বত্ব সংরক্ষিত।
        </p>
        <p className="para-4">বাংলাদেশ পুলিশ দ্বারা পরিচালিত</p>
      </div>
    </div>
  );
};

export default Footer;
