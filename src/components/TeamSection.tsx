const TeamSection = () => {
  const teamMembers = [
    {
      name: "Jovan Palomera",
      role: "Founder & Strategy Lead",
      description:
        "Jovan started this company after years in auto finance—where he saw too many good people walk into bad contracts.",
      image: "Jovan.jpeg"
    },
    {
      name: "Christian De La Rosa",
      role: "Director of Operations & Client Advisor",
      description:
        "From the first message to the final review, Christian makes sure every client gets clear, timely help.",
      image: "Christian.jpeg"
    },
    {
      name: "Maya Navarro",
      role: "Marketing Manager",
      description:
        "Maya drives the outreach—building awareness, creating content, and connecting with the people who need help most.",
      image: "Maya.png"
    },
    {
      name: "Teresa Ramos",
      role: "Partnerships & Business Development",
      description:
        "Teresa focuses on building relationships with credit unions, brokers, and trusted businesses.",
      image: "Teresa.png"
    },
    {
      name: "Nina",
      role: "Morale Officer",
      description:
        "Nina brings smiles, tail wags, and stress relief to the entire office crew.",
      image: "Nina.jpeg"
    }
  ];

  return (
    <section id="team" className="py-24 md:py-32 bg-auto-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the Team Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-auto-blue to-primary">
              Top Auto Advisors
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're a small but serious crew— each of us committed to protecting
            car buyers from bad deals and financial stress. Real experience.
            Real heart.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group bg-gradient-card border border-auto-border rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <img
  src={`/images/${member.image}`}
  alt={member.name}
  className="w-40 h-40 rounded-full object-cover mx-auto shadow-md group-hover:scale-105 transition-transform duration-300 mb-6"
/>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-auto-blue font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
