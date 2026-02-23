const OfficeProdan = () => {
  return (
    <div className="wrapper mt-10 flex flex-col md:flex-row gap-5">
      {/* Left Side Static Image */}
      <div className="w-full md:w-[30%] shadow-sm border border-gray-200 rounded-xl">
        <img
          src="/home/sp.jpg"
          alt="Static"
          className="w-full  h-[280px] md:h-[430px]"
        />
        <div className="  bg-brand/10 py-3.5 rounded-b-xl">
          <h2 className=" head-1 text-center">মোহাম্মদ মিজানুর রহমান মুন্সী</h2>
          <h3 className="head-2 text-center">পুলিশ সুপার, নারায়ণগঞ্জ</h3>
          <p className="para-1 text-black! text-center">০১৩২০০৯০৩০০</p>
        </div>
      </div>

      {/* Right Side Slider */}
      <div className="w-full md:w-[70%] shadow-sm border border-gray-200 rounded-xl p-5">
        <p className="para-1 text-black! leading-6">
          As a professional law enforcing agency our objective is to prevent and
          control crime, detection of crime and to the apprehend the criminals
          before the learned court. With the advancement of ICT, modus operandi
          and criminal behaviors are being evolved. So police need to update and
          upgrade with it. Modern policing is community based and pro people
          oriented. Bangladesh police is long being working to transform itself
          from a so called ‘police force’ to a “police service”. For this regard
          “digital policing” would be helpful to serve the people. This new
          approach would surely reduce the crime rates which will make
          Bangladesh a better and safer place. Aligning with the Bangladesh
          Government policy of the vision 2021 and 2041, we are progressively
          marching ahead to provide cost effective and sustainable ICT based
          police services to the community and trying to win the trust and
          confidence of the people. I hope this website would be able to
          facilitate the people to interact with the ICT based activity of the
          police in Sirajgonj District. I also believe that this website would
          be able to implement the vision 2021 and the dream of digital
          Bangladesh.
        </p>
        <p className="para-1 text-black! mt-2 leading-6">
          একটি পেশাদারী আইন প্রয়োগের সংস্থা হিসাবে আমাদের উদ্দেশ্য হল অপরাধ
          প্রতিরোধ করা এবং নিয়ন্ত্রণ করা, অপরাধ সনাক্তকরণ এবং অপরাধীদের সনাক্ত
          করা আদালতের আগে । আইসিটি-এর অগ্রগতির সঙ্গে সঙ্গে দুর্নীতিমূলক ও
          অপরাধমূলক আচরণ বিকশিত হচ্ছে । তাই পুলিশকে এর সঙ্গে আপডেট ও আপগ্রেড
          করতে হবে । আধুনিক পুলিশেরা হল কমিউনিটি বেসড এবং প্রো-পিপলস ওরিয়েন্টেড
          । বাংলাদেশ পুলিশ দীর্ঘদিন ধরে একটি তথাকথিত ' পুলিশ ফোর্স ' থেকে নিজেকে
          ' পুলিশ সার্ভিস '-এ রূপান্তরিত করার কাজ করছে । এই বিষয়ে "ডিজিটাল
          পুলিশিং" জনগণের সেবা করতে সহায়ক হবে । এই নতুন পদ্ধতি অবশ্যই অপরাধের
          হার কমাবে যা বাংলাদেশকে আরো ভালো ও নিরাপদ স্থানে পরিণত করবে । ভিশন
          ২০২১ এবং ২০৪১ বাংলাদেশ সরকার নীতি দিয়ে সাজায়, আমরা উত্তরোত্তর মিছিল
          করে সমাজকে খরচ কার্যকর ও টেকসই আইসিটি ভিত্তিক পুলিশ সেবা প্রদান এবং
          জনগণের আস্থা ও আস্থা জয়ের চেষ্টা করছি । আমি আশা করি এই ওয়েবসাইটটি
          সিরাজগঞ্জ জেলা পুলিশের আইসিটি ভিত্তিক কার্যকলাপের সাথে যোগাযোগ করার
          জন্য জনগণকে সহজতর করতে সক্ষম হবে । আমিও বিশ্বাস করি, এই ওয়েবসাইটটি
          ভিশন ২০২১ বাস্তবায়ন করতে পারবে এবং ডিজিটাল বাংলাদেশের স্বপ্ন ।
        </p>
      </div>
    </div>
  );
};

export default OfficeProdan;
