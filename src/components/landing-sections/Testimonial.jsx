import React from 'react';

const Testimonial = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "JOAN STHUART ROUSSEL",
      rating: 5,
      text: "Cryptora Tech's blockchain development services exceeded my expectations, showcasing professionalism, expertise, and commitment from consultation to implementation.",
      avatar: "/images/TestimonialImages/TestimonialImg1.gif",
    },
    {
      id: 2,
      name: "Henry Leo",
      rating: 5,
      text: "Cryptora Tech excels with cutting-edge blockchain solutions, offering trend insights and innovative features, setting them apart in development excellence.",
      avatar: "/images/TestimonialImages/TestimonialImg1.gif",
    },
    {
      id: 3,
      name: "Weak Howard",
      rating: 5,
      text: "Cryptora Tech's team displayed outstanding technical prowess, delivering a secure, scalable blockchain solution that met all requirements, meeting deadlines without compromising quality.",
      avatar: "/images/TestimonialImages/TestimonialImg1.gif",
    },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'fill-current' : 'fill-gray-600'}`}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279L12 18.896l-7.414 3.867 1.48-8.279L.001 9.306l8.332-1.151L12 .587z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div
      className="relative w-full py-16 px-4 bg-cover bg-center"
      style={{ backgroundImage: "url('images/TestimonialImages/TestimonialBG.webp')" }}
    >
      <div className="absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-white">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          TESTIMONIALS
        </h2>
        <p className="text-center text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Our customers love us! Read what they have to say below. They are just some of those who have trusted our services. Project delivered, happy customer with Cryptora Tech.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-pre-bg bg-opacity-70 backdrop-blur-sm rounded-lg p-8 shadow-lg flex flex-col items-center text-center
              transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-opacity-90"
            >
              <p className="text-gray-200 text-lg mb-6">{testimonial.text}</p>
              <div className="flex items-center mt-auto">
                <div className="w-16 h-16 rounded-full bg-transparent flex items-center justify-center overflow-hidden border-2 border-white mr-4">
                  {testimonial.avatar ? (
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-white text-xl font-bold">{testimonial.name.charAt(0)}</span>
                  )}
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  <div className="flex items-center">
                    {renderStars(testimonial.rating)}
                    <span className="ml-2 text-gray-400">({testimonial.rating}/5)</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
