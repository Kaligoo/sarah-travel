'use client';

import { useState, useEffect } from 'react';

interface Answers {
  travelType: string;
  destination: string;
  duration: string;
  budget: string;
  groupSize: string;
  when: string;
}

const questionMap: Record<number, keyof Answers> = {
  1: 'travelType',
  2: 'destination',
  3: 'duration',
  4: 'budget',
  5: 'groupSize',
  6: 'when'
};

const labels: Record<keyof Answers, string> = {
  travelType: 'Travel Style',
  destination: 'Destination Type',
  duration: 'Trip Length',
  budget: 'Budget',
  groupSize: 'Travel Party',
  when: 'Timeframe'
};

const answerLabels: Record<string, string> = {
  'adventure': 'Adventure & Outdoor Activities',
  'luxury': 'Luxury & Relaxation',
  'cultural': 'Cultural Immersion',
  'family': 'Family-Friendly',
  'romantic': 'Romantic Getaway',
  'beach': 'Beach & Islands',
  'mountains': 'Mountains & Nature',
  'city': 'Cities & Urban',
  'countryside': 'Countryside & Villages',
  'mixed': 'Mix of Everything',
  'weekend': 'Weekend (2-3 days)',
  'week': 'One Week (5-7 days)',
  'twoweeks': 'Two Weeks (10-14 days)',
  'extended': 'Extended (15+ days)',
  'budget': 'Under $2,000',
  'moderate': '$2,000 - $5,000',
  'premium': '$5,000 - $10,000',
  'luxuryBudget': '$10,000+',
  'solo': 'Solo Traveler',
  'couple': 'Couple (2 people)',
  'small': 'Small Group (3-4 people)',
  'large': 'Large Group (5+ people)',
  'soon': 'Within 1 month',
  'months': '1-3 months',
  'halfyear': '3-6 months',
  'flexible': 'Flexible / Planning ahead'
};

export default function TripPlanner() {
  const [visible, setVisible] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Answers>({
    travelType: '',
    destination: '',
    duration: '',
    budget: '',
    groupSize: '',
    when: ''
  });
  const [selectedOption, setSelectedOption] = useState<Record<number, string>>({});

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectOption = (questionNum: number, value: string) => {
    const answerKey = questionMap[questionNum];
    setAnswers(prev => ({ ...prev, [answerKey]: value }));
    setSelectedOption(prev => ({ ...prev, [questionNum]: value }));
  };

  const goToQuestion = (num: number) => {
    setCurrentQuestion(num);
  };

  const showCompletion = () => {
    setCurrentQuestion(7); // 7 = completion screen
  };

  const submitForm = () => {
    console.log('Trip preferences submitted:', answers);
    alert('Thank you! Your preferences have been submitted. Our travel experts will contact you within 24 hours.');
    // Reset
    setTimeout(() => {
      setCurrentQuestion(1);
      setAnswers({
        travelType: '',
        destination: '',
        duration: '',
        budget: '',
        groupSize: '',
        when: ''
      });
      setSelectedOption({});
    }, 2000);
  };

  const scrollToShow = () => {
    window.scrollTo({ top: 500, behavior: 'smooth' });
  };

  const progress = currentQuestion <= 6 ? (currentQuestion / 6) * 100 : 100;

  return (
    <>
      {/* Scroll indicator button */}
      <div
        className={`fixed left-5 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-600 to-purple-600 text-white px-5 py-4 rounded-xl cursor-pointer transition-all duration-300 z-[999] shadow-lg hover:scale-105 ${visible ? 'opacity-0 pointer-events-none' : ''}`}
        onClick={scrollToShow}
      >
        <strong>✈️ Plan Your Trip</strong>
      </div>

      {/* Questionnaire Panel */}
      <div className={`fixed top-0 h-screen w-[380px] bg-white shadow-2xl transition-all duration-400 z-[1000] flex flex-col ${visible ? 'left-0' : '-left-[400px]'} max-md:w-full max-md:${visible ? 'left-0' : '-left-full'}`}>
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8">
          <h3 className="text-2xl mb-2.5">Custom Trip Planner</h3>
          <p className="text-[0.95rem] opacity-95">Let&apos;s design your perfect journey together</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Progress bar */}
          <div className="bg-gray-200 h-1.5 rounded-full overflow-hidden mb-5">
            <div
              className="bg-gradient-to-r from-blue-600 to-purple-600 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-sm text-gray-600 text-center mt-2">
            {currentQuestion <= 6 ? `Question ${currentQuestion} of 6` : 'Complete!'}
          </div>

          {/* Question 1: Travel Type */}
          {currentQuestion === 1 && (
            <div className="animate-slideIn">
              <h4 className="text-xl text-gray-800 mb-5 font-semibold">What type of travel experience are you seeking?</h4>
              <p className="text-sm text-gray-600 mb-6">Choose the option that best matches your ideal trip</p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  { value: 'adventure', icon: '🏔️', label: 'Adventure & Outdoor Activities' },
                  { value: 'luxury', icon: '✨', label: 'Luxury & Relaxation' },
                  { value: 'cultural', icon: '🏛️', label: 'Cultural Immersion' },
                  { value: 'family', icon: '👨‍👩‍👧‍👦', label: 'Family-Friendly' },
                  { value: 'romantic', icon: '💕', label: 'Romantic Getaway' }
                ].map(option => (
                  <button
                    key={option.value}
                    className={`bg-gray-50 border-2 ${selectedOption[1] === option.value ? 'border-blue-600 bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'border-gray-200'} p-4 rounded-xl cursor-pointer transition-all duration-200 text-left flex items-center gap-3 hover:border-blue-600 hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-lg`}
                    onClick={() => selectOption(1, option.value)}
                  >
                    <span className="text-2xl w-7 text-center">{option.icon}</span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  className="flex-[2] py-3.5 px-6 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={!selectedOption[1]}
                  onClick={() => goToQuestion(2)}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Question 2: Destination Preference */}
          {currentQuestion === 2 && (
            <div className="animate-slideIn">
              <h4 className="text-xl text-gray-800 mb-5 font-semibold">Where would you like to go?</h4>
              <p className="text-sm text-gray-600 mb-6">Select your preferred destination type</p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  { value: 'beach', icon: '🏖️', label: 'Beach & Islands' },
                  { value: 'mountains', icon: '⛰️', label: 'Mountains & Nature' },
                  { value: 'city', icon: '🌆', label: 'Cities & Urban' },
                  { value: 'countryside', icon: '🌾', label: 'Countryside & Villages' },
                  { value: 'mixed', icon: '🗺️', label: 'Mix of Everything' }
                ].map(option => (
                  <button
                    key={option.value}
                    className={`bg-gray-50 border-2 ${selectedOption[2] === option.value ? 'border-blue-600 bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'border-gray-200'} p-4 rounded-xl cursor-pointer transition-all duration-200 text-left flex items-center gap-3 hover:border-blue-600 hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-lg`}
                    onClick={() => selectOption(2, option.value)}
                  >
                    <span className="text-2xl w-7 text-center">{option.icon}</span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  className="flex-1 py-3.5 px-6 rounded-lg bg-gray-200 text-gray-700 font-semibold transition-all duration-200 hover:bg-gray-300"
                  onClick={() => goToQuestion(1)}
                >
                  Back
                </button>
                <button
                  className="flex-[2] py-3.5 px-6 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={!selectedOption[2]}
                  onClick={() => goToQuestion(3)}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Question 3: Duration */}
          {currentQuestion === 3 && (
            <div className="animate-slideIn">
              <h4 className="text-xl text-gray-800 mb-5 font-semibold">How long will you be traveling?</h4>
              <p className="text-sm text-gray-600 mb-6">Choose your preferred trip length</p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  { value: 'weekend', icon: '📅', label: 'Weekend (2-3 days)' },
                  { value: 'week', icon: '🗓️', label: 'One Week (5-7 days)' },
                  { value: 'twoweeks', icon: '📆', label: 'Two Weeks (10-14 days)' },
                  { value: 'extended', icon: '🌍', label: 'Extended (15+ days)' }
                ].map(option => (
                  <button
                    key={option.value}
                    className={`bg-gray-50 border-2 ${selectedOption[3] === option.value ? 'border-blue-600 bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'border-gray-200'} p-4 rounded-xl cursor-pointer transition-all duration-200 text-left flex items-center gap-3 hover:border-blue-600 hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-lg`}
                    onClick={() => selectOption(3, option.value)}
                  >
                    <span className="text-2xl w-7 text-center">{option.icon}</span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  className="flex-1 py-3.5 px-6 rounded-lg bg-gray-200 text-gray-700 font-semibold transition-all duration-200 hover:bg-gray-300"
                  onClick={() => goToQuestion(2)}
                >
                  Back
                </button>
                <button
                  className="flex-[2] py-3.5 px-6 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={!selectedOption[3]}
                  onClick={() => goToQuestion(4)}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Question 4: Budget */}
          {currentQuestion === 4 && (
            <div className="animate-slideIn">
              <h4 className="text-xl text-gray-800 mb-5 font-semibold">What&apos;s your budget per person?</h4>
              <p className="text-sm text-gray-600 mb-6">Select your comfortable spending range</p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  { value: 'budget', icon: '💰', label: 'Under $2,000' },
                  { value: 'moderate', icon: '💵', label: '$2,000 - $5,000' },
                  { value: 'premium', icon: '💎', label: '$5,000 - $10,000' },
                  { value: 'luxuryBudget', icon: '👑', label: '$10,000+' }
                ].map(option => (
                  <button
                    key={option.value}
                    className={`bg-gray-50 border-2 ${selectedOption[4] === option.value ? 'border-blue-600 bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'border-gray-200'} p-4 rounded-xl cursor-pointer transition-all duration-200 text-left flex items-center gap-3 hover:border-blue-600 hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-lg`}
                    onClick={() => selectOption(4, option.value)}
                  >
                    <span className="text-2xl w-7 text-center">{option.icon}</span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  className="flex-1 py-3.5 px-6 rounded-lg bg-gray-200 text-gray-700 font-semibold transition-all duration-200 hover:bg-gray-300"
                  onClick={() => goToQuestion(3)}
                >
                  Back
                </button>
                <button
                  className="flex-[2] py-3.5 px-6 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={!selectedOption[4]}
                  onClick={() => goToQuestion(5)}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Question 5: Group Size */}
          {currentQuestion === 5 && (
            <div className="animate-slideIn">
              <h4 className="text-xl text-gray-800 mb-5 font-semibold">How many people are traveling?</h4>
              <p className="text-sm text-gray-600 mb-6">Select your travel party size</p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  { value: 'solo', icon: '🧳', label: 'Solo Traveler' },
                  { value: 'couple', icon: '💑', label: 'Couple (2 people)' },
                  { value: 'small', icon: '👥', label: 'Small Group (3-4 people)' },
                  { value: 'large', icon: '👨‍👩‍👧‍👦', label: 'Large Group (5+ people)' }
                ].map(option => (
                  <button
                    key={option.value}
                    className={`bg-gray-50 border-2 ${selectedOption[5] === option.value ? 'border-blue-600 bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'border-gray-200'} p-4 rounded-xl cursor-pointer transition-all duration-200 text-left flex items-center gap-3 hover:border-blue-600 hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-lg`}
                    onClick={() => selectOption(5, option.value)}
                  >
                    <span className="text-2xl w-7 text-center">{option.icon}</span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  className="flex-1 py-3.5 px-6 rounded-lg bg-gray-200 text-gray-700 font-semibold transition-all duration-200 hover:bg-gray-300"
                  onClick={() => goToQuestion(4)}
                >
                  Back
                </button>
                <button
                  className="flex-[2] py-3.5 px-6 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={!selectedOption[5]}
                  onClick={() => goToQuestion(6)}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Question 6: When */}
          {currentQuestion === 6 && (
            <div className="animate-slideIn">
              <h4 className="text-xl text-gray-800 mb-5 font-semibold">When are you planning to travel?</h4>
              <p className="text-sm text-gray-600 mb-6">Choose your preferred timeframe</p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  { value: 'soon', icon: '⚡', label: 'Within 1 month' },
                  { value: 'months', icon: '📅', label: '1-3 months' },
                  { value: 'halfyear', icon: '🗓️', label: '3-6 months' },
                  { value: 'flexible', icon: '🌟', label: 'Flexible / Planning ahead' }
                ].map(option => (
                  <button
                    key={option.value}
                    className={`bg-gray-50 border-2 ${selectedOption[6] === option.value ? 'border-blue-600 bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'border-gray-200'} p-4 rounded-xl cursor-pointer transition-all duration-200 text-left flex items-center gap-3 hover:border-blue-600 hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-lg`}
                    onClick={() => selectOption(6, option.value)}
                  >
                    <span className="text-2xl w-7 text-center">{option.icon}</span>
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  className="flex-1 py-3.5 px-6 rounded-lg bg-gray-200 text-gray-700 font-semibold transition-all duration-200 hover:bg-gray-300"
                  onClick={() => goToQuestion(5)}
                >
                  Back
                </button>
                <button
                  className="flex-[2] py-3.5 px-6 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  disabled={!selectedOption[6]}
                  onClick={showCompletion}
                >
                  Complete
                </button>
              </div>
            </div>
          )}

          {/* Completion Screen */}
          {currentQuestion === 7 && (
            <div className="text-center p-10">
              <div className="text-6xl mb-5">✅</div>
              <h3 className="text-2xl text-gray-800 mb-4">Perfect! We&apos;ve Got Everything</h3>
              <p className="text-gray-600 mb-6">Thank you for sharing your travel preferences. Here&apos;s a summary of your ideal trip:</p>

              <div className="bg-gray-50 rounded-xl p-5 text-left my-5">
                {Object.entries(answers).map(([key, value]) => {
                  if (!value) return null;
                  return (
                    <div key={key} className="mb-4 pb-4 border-b border-gray-200 last:mb-0 last:pb-0 last:border-0">
                      <div className="text-sm text-gray-600 mb-1">{labels[key as keyof Answers]}</div>
                      <div className="text-base text-gray-800 font-semibold">{answerLabels[value] || value}</div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 text-gray-600">Our travel experts will review your preferences and contact you within 24 hours with a personalized itinerary proposal.</p>

              <button
                className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg mt-5"
                onClick={submitForm}
              >
                Send My Preferences
              </button>
              <button
                className="w-full py-3.5 px-6 rounded-lg bg-gray-200 text-gray-700 font-semibold transition-all duration-200 hover:bg-gray-300 mt-2.5"
                onClick={() => goToQuestion(1)}
              >
                Start Over
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
