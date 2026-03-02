const Map = () => {
  return (
    <div className="wrapper mb-15 ">
      <h2 className="head-4   text-brand! text-start! mb-5">
        নারায়ণগঞ্জ পুলিশ কার্যালয় মানচিত্র
      </h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2237705563366!2d90.49443197511131!3d23.63215597875124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b11aaf014795%3A0x22b379e0fedaa26!2sOffice%20of%20the%20Superintendent%20of%20Police%2CNarayanganj!5e0!3m2!1sen!2sbd!4v1772470307817!5m2!1sen!2sbd"
        loading="lazy"
        className="w-full h-[400px] rounded-xl shadow-md"
      ></iframe>
    </div>
  );
};

export default Map;
