
import React from 'react';
import { FaArrowRight, FaStar, FaRegStar } from 'react-icons/fa';
import AnimatedCounter from './AnimatedCounter';
import ComparisonGrid from './ComparisonChart';
import { FEATURES, REVIEWS } from '../constants';
import Footer from './Footer';
import TechCube from './TechCube';
import TypedHeading from './TypedHeading';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Feature } from '../types';

interface LandingPageProps {
  onStartLearning: () => void;
}

// Initial-based avatar
const InitialAvatar: React.FC<{ name: string }> = ({ name }) => {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2);
  const colors = [
    'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400',
    'bg-sky-100 text-sky-600 dark:bg-sky-900/30 dark:text-sky-400',
    'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
    'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
    'bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400',
    'bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
  ];
  const colorIndex = name.length % colors.length;

  return (
    <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold ${colors[colorIndex]}`}>
      {initials}
    </div>
  );
};

const StarRating: React.FC<{ count: number }> = ({ count }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map(i => (
      <span key={i} className={`text-xs ${i <= count ? 'text-amber-400' : 'text-zinc-300 dark:text-zinc-700'}`}>
        {i <= count ? <FaStar /> : <FaRegStar />}
      </span>
    ))}
  </div>
);

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
  return (
    <div className="group p-6 rounded-xl border border-border bg-surface hover:border-primary/30 transition-all duration-300">
      <div className="w-10 h-10 rounded-lg bg-primary-muted flex items-center justify-center mb-4">
        <span className="text-primary text-lg"><feature.Icon /></span>
      </div>
      <h3 className="font-heading text-base font-bold mb-2 text-text-primary">{feature.title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
    </div>
  );
};

const LandingPage: React.FC<LandingPageProps> = ({ onStartLearning }) => {
  const statsRef = useScrollAnimation();
  const featuresContainerRef = useScrollAnimation();
  const comparisonRef = useScrollAnimation();

  return (
    <div className="bg-bg text-text-primary font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-start md:items-center justify-center relative overflow-hidden p-4 pt-28 md:pt-32 noise">
        <div className="z-10 container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <TypedHeading />
            <p className="mt-6 max-w-lg text-base md:text-lg text-text-secondary leading-relaxed">
              A free, open-source platform with interactive visualizations, project-based learning, and a curriculum designed for the future.
            </p>
            <button
              onClick={onStartLearning}
              className="mt-8 px-7 py-3 bg-primary hover:bg-primary-hover text-white font-semibold rounded-lg text-sm transition-all duration-200 flex items-center gap-2 group"
            >
              Start Learning
              <span className="transition-transform duration-200 group-hover:translate-x-0.5"><FaArrowRight /></span>
            </button>
          </div>
          <div className="flex justify-center items-center mt-10 md:mt-0">
            <TechCube />
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section ref={statsRef} className="py-12 border-y border-border opacity-0 translate-y-5 transition-all duration-700 ease-out">
        <div className="container mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div className="text-center">
              <h3 className="font-heading text-3xl font-bold text-text-primary"><AnimatedCounter target={650000} /></h3>
              <p className="text-sm text-text-secondary mt-1">Students enrolled</p>
            </div>
            <div className="hidden sm:block w-px h-10 bg-border"></div>
            <div className="text-center">
              <h3 className="font-heading text-3xl font-bold text-text-primary"><AnimatedCounter target={300000} /></h3>
              <p className="text-sm text-text-secondary mt-1">Active monthly learners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div ref={featuresContainerRef} className="container mx-auto px-6 opacity-0 translate-y-5 transition-all duration-700 ease-out">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3 text-text-primary">Why Open4Code is Different</h2>
            <p className="text-text-secondary max-w-lg mx-auto text-sm">We've reimagined coding education to be more engaging, effective, and accessible to everyone.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FEATURES.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 border-y border-border">
        <div className="container mx-auto px-6 mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold mb-3 text-text-primary">Loved by Learners</h2>
          <p className="text-text-secondary max-w-lg mx-auto text-sm">Join hundreds of thousands of developers building their future with Open4Code.</p>
        </div>
        <div className="relative w-full flex flex-col gap-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
          {/* Row 1 */}
          <div className="flex animate-marquee">
            {[...REVIEWS.slice(0, 6), ...REVIEWS.slice(0, 6)].map((review, index) => (
              <div key={`r1-${index}`} className="flex-shrink-0 w-72 mx-2 p-5 bg-surface border border-border rounded-xl flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <InitialAvatar name={review.name} />
                  <div>
                    <h4 className="font-semibold text-sm text-text-primary">{review.name}</h4>
                    <p className="text-xs text-text-tertiary">{review.location}</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary flex-grow leading-relaxed">{review.review}</p>
                <div className="mt-3">
                  <StarRating count={review.stars} />
                </div>
              </div>
            ))}
          </div>
          {/* Row 2 */}
          <div className="flex animate-marquee-reverse">
            {[...REVIEWS.slice(6), ...REVIEWS.slice(6)].map((review, index) => (
              <div key={`r2-${index}`} className="flex-shrink-0 w-72 mx-2 p-5 bg-surface border border-border rounded-xl flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <InitialAvatar name={review.name} />
                  <div>
                    <h4 className="font-semibold text-sm text-text-primary">{review.name}</h4>
                    <p className="text-xs text-text-tertiary">{review.location}</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary flex-grow leading-relaxed">{review.review}</p>
                <div className="mt-3">
                  <StarRating count={review.stars} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section ref={comparisonRef} className="py-20 opacity-0 translate-y-5 transition-all duration-700 ease-out">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3 text-text-primary">An Unfair Advantage</h2>
            <p className="text-text-secondary max-w-lg mx-auto text-sm">See how Open4Code stacks up against the old way of learning.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ComparisonGrid />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
