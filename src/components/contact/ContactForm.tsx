import { useForm } from "react-hook-form";
import InputField from "../resuable/form/InputFIeld";

type ContactFormValues = {
  name: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    console.log("Contact Data:", data);
    reset();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto">
      <h2 className="text-xl font-semibold text-brand mb-6">বার্তা পাঠান</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          label="নাম"
          name="name"
          placeholder="আপনার নাম লিখুন"
          register={register}
          error={errors.name}
          rules={{
            required: "নাম আবশ্যক",
          }}
        />

        <InputField
          label="ফোন"
          name="phone"
          type="tel"
          placeholder="আপনার ফোন নম্বর লিখুন"
          register={register}
          error={errors.phone}
          rules={{
            required: "ফোন নম্বর আবশ্যক",
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "সঠিক ফোন নম্বর দিন",
            },
          }}
        />

        <InputField
          label="বিষয়"
          name="subject"
          placeholder="বিষয় লিখুন"
          register={register}
          error={errors.subject}
          rules={{
            required: "বিষয় আবশ্যক",
          }}
        />

        {/* Message Field (Textarea version inline for now) */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-700">বার্তা</label>

          <textarea
            rows={4}
            placeholder="আপনার বার্তা লিখুন"
            {...register("message", {
              required: "বার্তা আবশ্যক",
              minLength: {
                value: 10,
                message: "কমপক্ষে ১০ অক্ষর লিখুন",
              },
            })}
            className={`px-4 py-2 border rounded-lg outline-none transition-all duration-200
            ${
              errors.message
                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-gray-300 focus:ring-2 focus:ring-brand/20"
            }`}
          />

          {errors.message && (
            <p className="text-sm text-red-500">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-brand text-white py-2 rounded-lg hover:opacity-90 transition disabled:opacity-60"
        >
          {isSubmitting ? "পাঠানো হচ্ছে..." : "পাঠান"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
