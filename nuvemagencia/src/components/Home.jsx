import { useState } from 'react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('roundTrip');
  const [formData, setFormData] = useState({
    departureDate: '',
    returnDate: '',
    travelDate: '',
    adults: 1,
    children: 0
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Imagem compacta */}
        <div className="w-full md:w-2/5 lg:w-1/3">
          <img 
            src="/images/logo-aviao.png"
            alt="Viagem dos sonhos" 
            className="w-full h-auto max-w-[400px] mx-auto object-contain"
          />
        </div>

        {/* Formulário */}
        <div className="w-full md:w-3/5 lg:w-2/3">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center md:text-left">
              Realize a viagem dos seus sonhos, pagando pouco.
            </h2>
            
            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={() => setActiveTab('roundTrip')}
                className={`pb-2 px-4 text-sm ${
                  activeTab === 'roundTrip'
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                Ida e Volta
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('oneWay')}
                className={`pb-2 px-4 text-sm ${
                  activeTab === 'oneWay'
                    ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              >
                Só Ida
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Campos de Data */}
              {activeTab === 'roundTrip' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="date"
                      required
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      onChange={(e) => setFormData({...formData, departureDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <input
                      type="date"
                      required
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                      onChange={(e) => setFormData({...formData, returnDate: e.target.value})}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <input
                    type="date"
                    required
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    onChange={(e) => setFormData({...formData, travelDate: e.target.value})}
                  />
                </div>
              )}

              {/* Passageiros */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <select
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    value={formData.adults}
                    onChange={(e) => setFormData({...formData, adults: e.target.value})}
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>{num} Adulto{num !== 1 && 's'}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
                    value={formData.children}
                    onChange={(e) => setFormData({...formData, children: e.target.value})}
                  >
                    {[0, 1, 2, 3, 4].map((num) => (
                      <option key={num} value={num}>{num} Criança{num !== 1 && 's'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-6 rounded-md transition-colors"
              >
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;