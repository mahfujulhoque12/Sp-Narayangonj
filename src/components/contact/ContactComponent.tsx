import ContactPart from "./ContactPart";

const ContactComponent = () => {
  return (
    <div>
      {" "}
      <div className="bg-brand  py-20">
        <div className="wrapper">
          <h1 className=" head-3">যোগাযোগ করুন</h1>
          <p className="para-2 mt-3">
            যেকোনো প্রয়োজনে আমাদের সাথে যোগাযোগ করুন। আমরা আপনার সেবায় সর্বদা
            প্রস্তুত।
          </p>
        </div>
      </div>
      <ContactPart />
    </div>
  );
};

export default ContactComponent;
