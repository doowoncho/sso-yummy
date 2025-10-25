
export default function Hours() {
  const schedule = [
    { day: "Monday", hours: "Closed", isOpen: false },
    { day: "Tuesday", hours: "11:30 AM - 8 PM", isOpen: true },
    { day: "Wednesday", hours: "11:30 AM - 8 PM", isOpen: true },
    { day: "Thursday", hours: "11:30 AM - 8 PM", isOpen: true },
    { day: "Friday", hours: "11:30 AM - 8:30 PM", isOpen: true },
    { day: "Saturday", hours: "11:30 AM - 8:30 PM", isOpen: true },
    { day: "Sunday", hours: "12 PM - 7:30 PM", isOpen: true }
  ];

  // Get current day
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section className="w-full py-16 px-4 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
          Opening Hours
        </h2>
        <p className="text-center text-gray-600">
          128 2 Ave SE Unit 117, Calgary, AB T2G 5J5
        </p>
        <p className="text-center text-gray-600 mb-7">
          (403) 455-6564
        </p>

        <div className="bg-gray-50 rounded-lg overflow-hidden">
          {schedule.map((item, index) => (
            <div
              key={index}
              className={`flex justify-between items-center px-6 py-4 border-b border-gray-200 last:border-b-0 ${
                item.day === currentDay ? 'bg-red-50 border-l-4 border-l-red-500' : ''
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`text-lg font-semibold ${
                  item.day === currentDay ? 'text-red-600' : 'text-gray-800'
                }`}>
                  {item.day}
                </span>
                {item.day === currentDay && (
                  <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">
                    Today
                  </span>
                )}
              </div>
              
              <span className={`text-lg font-medium ${
                item.isOpen ? 'text-gray-700' : 'text-red-500'
              }`}>
                {item.hours}
              </span>
            </div>
          ))}
        </div>

        
{/* 
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {schedule.map((item, index) => (
    <div
      key={index}
      className={`text-center p-6 rounded-lg shadow-md ${
        item.day === currentDay 
          ? 'bg-red-500 text-white' 
          : 'bg-white'
      } ${!item.isOpen ? 'opacity-60' : ''}`}
    >
      <h3 className={`text-lg font-bold mb-2 ${
        item.day === currentDay ? 'text-white' : 'text-gray-800'
      }`}>
        {item.day}
      </h3>
      <p className={`text-sm ${
        item.day === currentDay ? 'text-white' : 'text-gray-600'
      }`}>
        {item.hours}
      </p>
    </div>
  ))}
</div> */}


        {/* <div className="mt-8 text-center">
          <p className="text-gray-600">
            <span className="font-semibold">Note:</span> Kitchen closes 30 minutes before closing time
          </p>
        </div> */}
      </div>
    </section>
  );
}