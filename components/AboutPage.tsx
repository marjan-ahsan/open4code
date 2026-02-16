import React from 'react';
import Footer from './Footer';
import { TECH_STACK } from '../constants';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaGithub } from 'react-icons/fa';
import HeroSection from './HeroSection';

const AboutPage: React.FC = () => {
  const missionRef = useScrollAnimation();
  const openSourceRef = useScrollAnimation(200);
  const techStackRef = useScrollAnimation(400);

  return (
    <div className="bg-bg text-text-primary pt-20">

      <HeroSection
        title="About Open4Code"
        subtitle="Democratizing education by creating the world's most engaging, intuitive, and effective learning platform for developers."
      />

      <div className="container mx-auto px-6 py-16 space-y-24">
        {/* Mission Section */}
        <section ref={missionRef} className="opacity-0 translate-y-5 transition-all duration-700 ease-out">
          <h2 className="font-heading text-3xl font-bold text-center mb-3">Our Mission</h2>
          <p className="text-center text-text-secondary mb-10 max-w-2xl mx-auto text-sm leading-relaxed">At Open4Code, we believe that education is a fundamental right, not a privilege. Our mission is to break down the barriers to learning technology by providing a free, world-class platform that is accessible to everyone, everywhere.</p>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h3 className="font-heading text-lg font-bold mb-2 text-primary">Interactive First</h3>
              <p className="text-sm text-text-secondary leading-relaxed">We prioritize hands-on, visual learning over passive reading. Our interactive demos, live code editors, and project-based curriculum ensure that you learn by doing.</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-surface">
              <h3 className="font-heading text-lg font-bold mb-2 text-accent">Community Driven</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Open4Code is more than just a platform; it's a community. We are built on open-source principles and encourage learners and developers to contribute, share knowledge, and grow together.</p>
            </div>
          </div>
        </section>

        {/* Open Source Section */}
        <section ref={openSourceRef} className="opacity-0 translate-y-5 transition-all duration-700 ease-out text-center">
          <h2 className="font-heading text-3xl font-bold mb-3">Built with Open Source</h2>
          <p className="text-text-secondary mb-8 max-w-2xl mx-auto text-sm leading-relaxed">Open4Code is proudly open-source. This means our code is publicly available for anyone to view, use, and contribute to. We stand on the shoulders of giants and believe in giving back to the community that powers modern technology.</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-surface border border-border text-text-primary text-sm font-semibold rounded-lg hover:border-text-tertiary transition-colors"
          >
            <FaGithub /> View on GitHub
          </a>
        </section>

        {/* Tech Stack Section */}
        <section ref={techStackRef} className="opacity-0 translate-y-5 transition-all duration-700 ease-out text-center">
          <h2 className="font-heading text-3xl font-bold mb-3">Our Tech Stack</h2>
          <p className="text-text-secondary mb-10 max-w-2xl mx-auto text-sm">The technologies powering the Open4Code platform.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {TECH_STACK.map(tech => (
              <div key={tech.name} className="flex items-center gap-2.5 px-4 py-2.5 bg-surface border border-border rounded-lg">
                <span style={{ color: tech.color }} className="text-lg"><tech.Icon /></span>
                <span className="text-sm font-medium text-text-primary">{tech.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;