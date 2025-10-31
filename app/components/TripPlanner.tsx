'use client';

import { useState } from 'react';

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

interface TripPlannerProps {
  visible: boolean;
  onClose: () => void;
}

export default function TripPlanner({ visible, onClose }: TripPlannerProps) {
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
      onClose();
    }, 2000);
  };

  const progress = currentQuestion <= 6 ? (currentQuestion / 6) * 100 : 100;

  return (
    <>
      {/* Backdrop */}
      {visible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[999] transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Questionnaire Panel */}
      <div className={`fixed top-0 h-screen w-[380px] bg-white shadow-2xl transition-all duration-400 z-[1000] flex flex-col ${visible ? 'left-0' : '-left-[400px]'} max-md:w-full max-md:${visible ? 'left-0' : '-left-full'}`}>
        <div className="bg-dark text-white p-8 relative border-b border-gray-700">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:text-secondary transition-all"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <p className="elegant-text text-secondary mb-3">Bespoke Journey</p>
          <h3 className="text-3xl font-serif font-light mb-2">Plan Your Experience</h3>
          <p className="text-sm font-light opacity-80 tracking-wide">Tell us about your ideal journey</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {/* Progress bar */}
          <div className="bg-gray-200 h-0.5 overflow-hidden mb-5">
            <div
              className="bg-secondary h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="elegant-text text-gray-500 text-center mt-2">
            {currentQuestion <= 6 ? `Step ${currentQuestion} of 6` : 'Complete'}
          </div>

          {/* Question 1: Travel Type */}
          {currentQuestion === 1 && (
            <div className="animate-slideIn">
              <h4 className="text-2xl font-serif font-light text-gray-900 mb-5">What type of travel experience are you seeking?</h4>
              <p className="text-sm text-gray-600 font-light mb-6">Choose the option that best matches your ideal trip</p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  { value: 'adventure', label: 'Adventure & Outdoor Activities' },
                  { value: 'luxury', label: 'Luxury & Relaxation' },
                  { value: 'cultural', label: 'Cultural Immersion' },
                  { value: 'family', label: 'Family-Friendly' },
                  { value: 'romantic', label: 'Romantic Getaway' }
                ].map(option => (
                  <button
                    key={option.value}
                    className={`border ${selectedOption[1] === option.value ? 'border-black bg-black text-white' : 'border-gray-300 bg-white'} p-4 cursor-pointer transition-all duration-300 text-left hover:border-black font-light`}
                    onClick={() => selectOption(1, option.value)}
                  >
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  className="btn-luxury flex-[2] disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h4 className="text-2xl font-serif font-light text-gray-900 mb-5">Where would you like to go?</h4>
              <p className="text-sm text-gray-600 font-light mb-6">Select your preferred destination type</p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  { value: 'beach', label: 'Beach & Islands' },
                  { value: 'mountains', label: 'Mountains & Nature' },
                  { value: 'city', label: 'Cities & Urban' },
                  { value: 'countryside', label: 'Countryside & Villages' },
                  { value: 'mixed', label: 'Mix of Everything' }
                ].map(option => (
                  <button
                    key={option.value}
                    className={`border ${selectedOption[2] === option.value ? 'border-black bg-black text-white' : 'border-gray-300 bg-white'} p-4 cursor-pointer transition-all duration-300 text-left hover:border-black font-light`}
                    onClick={() => selectOption(2, option.value)}
                  >
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  className="btn-luxury-outline flex-1"
                  onClick={() => goToQuestion(1)}
                >
                  Back
                </button>
                <button
                  className="btn-luxury flex-[2] disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h4 className="text-2xl font-serif font-light text-gray-900 mb-5">How long will you be traveling?</h4>
              <p className="text-sm text-gray-600 font-light mb-6">Choose your preferred trip length</p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  { value: 'weekend', label: 'Weekend (2-3 days)' },
                  { value: 'week', label: 'One Week (5-7 days)' },
                  { value: 'twoweeks', label: 'Two Weeks (10-14 days)' },
                  { value: 'extended', label: 'Extended (15+ days)' }
                ].map(option => (
                  <button
                    key={option.value}
                    className={`border ${selectedOption[3] === option.value ? 'border-black bg-black text-white' : 'border-gray-300 bg-white'} p-4 cursor-pointer transition-all duration-300 text-left hover:border-black font-light`}
                    onClick={() => selectOption(3, option.value)}
                  >
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  className="btn-luxury-outline flex-1"
                  onClick={() => goToQuestion(2)}
                >
                  Back
                </button>
                <button
                  className="btn-luxury flex-[2] disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h4 className="text-2xl font-serif font-light text-gray-900 mb-5">What&apos;s your budget per person?</h4>
              <p className="text-sm text-gray-600 font-light mb-6">Select your comfortable spending range</p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  { value: 'budget', label: 'Under $2,000' },
                  { value: 'moderate', label: '$2,000 - $5,000' },
                  { value: 'premium', label: '$5,000 - $10,000' },
                  { value: 'luxuryBudget', label: '$10,000+' }
                ].map(option => (
                  <button
                    key={option.value}
                    className={`border ${selectedOption[4] === option.value ? 'border-black bg-black text-white' : 'border-gray-300 bg-white'} p-4 cursor-pointer transition-all duration-300 text-left hover:border-black font-light`}
                    onClick={() => selectOption(4, option.value)}
                  >
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  className="btn-luxury-outline flex-1"
                  onClick={() => goToQuestion(3)}
                >
                  Back
                </button>
                <button
                  className="btn-luxury flex-[2] disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h4 className="text-2xl font-serif font-light text-gray-900 mb-5">How many people are traveling?</h4>
              <p className="text-sm text-gray-600 font-light mb-6">Select your travel party size</p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  { value: 'solo', label: 'Solo Traveler' },
                  { value: 'couple', label: 'Couple (2 people)' },
                  { value: 'small', label: 'Small Group (3-4 people)' },
                  { value: 'large', label: 'Large Group (5+ people)' }
                ].map(option => (
                  <button
                    key={option.value}
                    className={`border ${selectedOption[5] === option.value ? 'border-black bg-black text-white' : 'border-gray-300 bg-white'} p-4 cursor-pointer transition-all duration-300 text-left hover:border-black font-light`}
                    onClick={() => selectOption(5, option.value)}
                  >
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  className="btn-luxury-outline flex-1"
                  onClick={() => goToQuestion(4)}
                >
                  Back
                </button>
                <button
                  className="btn-luxury flex-[2] disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h4 className="text-2xl font-serif font-light text-gray-900 mb-5">When are you planning to travel?</h4>
              <p className="text-sm text-gray-600 font-light mb-6">Choose your preferred timeframe</p>
              <div className="grid grid-cols-1 gap-3 mb-6">
                {[
                  { value: 'soon', label: 'Within 1 month' },
                  { value: 'months', label: '1-3 months' },
                  { value: 'halfyear', label: '3-6 months' },
                  { value: 'flexible', label: 'Flexible / Planning ahead' }
                ].map(option => (
                  <button
                    key={option.value}
                    className={`border ${selectedOption[6] === option.value ? 'border-black bg-black text-white' : 'border-gray-300 bg-white'} p-4 cursor-pointer transition-all duration-300 text-left hover:border-black font-light`}
                    onClick={() => selectOption(6, option.value)}
                  >
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  className="btn-luxury-outline flex-1"
                  onClick={() => goToQuestion(5)}
                >
                  Back
                </button>
                <button
                  className="btn-luxury flex-[2] disabled:opacity-50 disabled:cursor-not-allowed"
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
              <h3 className="text-3xl font-serif font-light text-gray-900 mb-4">Perfect! We Have Everything</h3>
              <p className="text-gray-600 font-light mb-6">Thank you for sharing your travel preferences. Here&apos;s a summary of your ideal journey:</p>

              <div className="bg-light p-5 text-left my-5 border border-gray-200">
                {Object.entries(answers).map(([key, value]) => {
                  if (!value) return null;
                  return (
                    <div key={key} className="mb-4 pb-4 border-b border-gray-200 last:mb-0 last:pb-0 last:border-0">
                      <div className="elegant-text text-gray-500 mb-1">{labels[key as keyof Answers]}</div>
                      <div className="text-base text-gray-900 font-light">{answerLabels[value] || value}</div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-6 text-gray-600 font-light text-sm">Our luxury travel consultants will review your preferences and contact you within 24 hours with a personalized itinerary proposal.</p>

              <button
                className="btn-luxury w-full mt-5"
                onClick={submitForm}
              >
                Submit Preferences
              </button>
              <button
                className="btn-luxury-outline w-full mt-2.5"
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
