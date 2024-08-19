const AboutSection = () => {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-primary-dark mb-8">
          About DonaTrak
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12">
          DonaTrak connects donors with causes, making giving simple and
          impactful.
        </p>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-secondary-dark mb-4">
              Mission
            </h3>
            <p className="text-gray-500 text-lg">
              To connect and empower communities.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-secondary-dark mb-4">
              Vision
            </h3>
            <p className="text-gray-500 text-lg">
              A world where every contribution matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
