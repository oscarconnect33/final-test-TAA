const TeamSection = () => {
  const teamMembers = [
    {
      name: "Jovan Palomera",
      role: "Founder & Strategy Lead",
      description: "Jovan started this company after years in auto finance—where he saw too many good people walk into bad contracts.",
      image: "JP"
    },
    {
      name: "Christian De La Rosa", 
      role: "Director of Operations & Client Advisor",
      description: "From the first message to the final review, Christian makes sure every client gets clear, timely help.",
      image: "CR"
    },
    {
      name: "Maya Navarro",
      role: "Marketing Manager", 
      description: "Maya drives the outreach—building awareness, creating content, and connecting with the people who need help most.",
      image: "MN"
    },
    {
      name: "Teresa Ramos",
      role: "Partnerships & Business Development",
      description: "Teresa focuses on building relationships with credit unions, brokers, and trusted businesses.",
      image: "TR"
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
            We're a small but serious crew— each of us committed to protecting car buyers from bad deals and financial stress. Real experience. Real heart.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group bg-gradient-card border border-auto-border rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-r from-auto-blue to-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-glow group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
              </div>

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

        {/* Team Morale Section */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-card border border-auto-border rounded-2xl p-8 shadow-card inline-block">
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-glow animate-float">
                🐶
              </div>
              <div className="text-left">
                <h4 className="text-xl font-bold text-foreground">Nina</h4>
                <p className="text-auto-blue font-semibold">Morale Officer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;