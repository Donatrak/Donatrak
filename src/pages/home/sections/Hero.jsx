import HeroImage from "../../../assets/images/Hero.jpg";
const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: `url('${HeroImage}')`,
      }}
    >
      {/* Overlay for darker background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Empower Change</h1>
        <p className="text-lg md:text-2xl mb-8">
          Welcome to DonaTrak! Join us to support impactful causes and make a
          difference today.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="/register"
            className="bg-secondary-DEFAULT text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-secondary-dark"
          >
            Get Started
          </a>
          <a
            href="/campaigns"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-primary"
          >
            Explore Campaigns
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
