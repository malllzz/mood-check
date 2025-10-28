import React, { useState } from 'react';

// Array pilihan mood
const moodOptions = [
  { emoji: '😄', label: 'Sangat Senang' },
  { emoji: '😊', label: 'Senang' },
  { emoji: '😐', label: 'Biasa Saja' },
  { emoji: '😢', label: 'Sedih' },
  { emoji: '😠', label: 'Marah' },
];

// Card Rekomendasi
const RecommendationCard = ({ title, description, buttonText }) => (
  <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-md">
    <h3 className="font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600 my-2">{description}</p>
    <button className="w-full text-sm bg-blue-100 text-[#4D90FE] font-medium py-2 px-4 rounded-lg hover:bg-blue-200 transition-colors cursor-pointer">
      {buttonText}
    </button>
  </div>
);


function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [feelingText, setFeelingText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data Disimpan:', {
      mood: selectedMood?.label,
      notes: feelingText,
    });
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSelectedMood(null);
    setFeelingText('');
  };

  return (
    <div className="bg-[#F5F6FA] min-h-screen w-full flex items-center justify-center p-4 font-sans">
      
      <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 w-full max-w-md">
        
        {/* Tampilan Halaman Sukses (Setelah Submit) */}
        {isSubmitted ? (
          <div className="flex flex-col items-center text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h2 className="text-xl font-semibold text-gray-800">Terima kasih telah mengungkapkan!</h2>
            <p className="text-gray-600 mt-1 mb-6">Kami menghargai perasaanmu. Berikut beberapa hal yang mungkin bisa membantu:</p>
            
            {/* Placeholder Rekomendasi */}
            <div className="w-full space-y-4 mb-6">
              <RecommendationCard
                title="Bicara dengan AI Support"
                description="Dapatkan panduan cepat dan dukungan kapanpun kamu butuh."
                buttonText="Mulai Bicara"
              />
              <RecommendationCard
                title="Jadwalkan Sesi dengan Konselor"
                description="Bicara dengan profesional untuk dukungan lebih mendalam."
                buttonText="Cari Konselor"
              />
            </div>

            <button
              onClick={handleReset}
              className="text-sm text-gray-600 hover:text-[#4D90FE] transition-colors cursor-pointer"
            >
              Lakukan Check-in Lagi
            </button>
          </div>

        ) : (

          /* Tampilan Form (Sebelum Submit) */
          <form onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center">Mood Check-In</h1>
            <p className="text-gray-600 text-center mb-6">Bagaimana perasaanmu hari ini?</p>

            {/* Skala Mood Emoji */}
            <div className="flex justify-around items-center mb-6">
              {moodOptions.map((mood) => (
                <button
                  key={mood.label}
                  type="button"
                  onClick={() => setSelectedMood(mood)}
                  className={`text-4xl p-2 rounded-full transition-all duration-200 cursor-pointer ${
                    selectedMood?.label === mood.label
                      ? 'bg-blue-100 scale-110 ring-2 ring-[#4D90FE]'
                      : 'grayscale opacity-60 hover:opacity-100 hover:scale-105'
                  }`}
                  aria-label={mood.label}
                >
                  {mood.emoji}
                </button>
              ))}
            </div>

            {/* Input Teks Opsional */}
            <div className="mb-6">
              <label htmlFor="feeling-text" className="block text-sm font-medium text-gray-700 mb-2">
                Ceritakan lebih lanjut (opsional)
              </label>
              <textarea
                id="feeling-text"
                rows="3"
                value={feelingText}
                onChange={(e) => setFeelingText(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#4D90FE] focus:outline-none transition-colors"
                placeholder="Apa yang sedang kamu pikirkan?"
              ></textarea>
            </div>

            {/* Tombol Submit */}
            <button
              type="submit"
              disabled={!selectedMood}
              className={`w-full text-white font-bold py-3 px-4 rounded-lg transition-all ${
                !selectedMood
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#4D90FE] hover:bg-blue-600 cursor-pointer'
              }`}
            >
              Submit Perasaanmu
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default App;