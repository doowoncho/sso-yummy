import { MenuItems } from "../components/MenuItems";

export default function Menu() {
  const menuItems = MenuItems;
  return (
        <section id="menu" className="w-full py-16 px-4 sm:px-6 md:px-12 lg:px-14 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
          Our Menu
        </h2>

        {/* Categories side-by-side on large screens */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-16">
          {menuItems.map((category) => (
            <div key={category.id}>
              <h3 className="text-3xl md:text-3xl font-semibold mb-10 text-gray-800 text-center lg:text-left">
                {category.category}
              </h3>

              <div className="space-y-10">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row items-start md:items-center gap-6"
                  >
                    {/* Image on the left */}
                 {item.image && (
                  <div className="w-full md:w-1/3 h-44 md:h-30 overflow-hidden rounded-lg">
                    <img
                      src={item.image.startsWith('http')
                        ? item.image
                        : `/assets/menu/${item.image}`}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Text on the right */}
                    <div className="flex-1">
                      <div className="flex items-baseline mb-1 min-w-100">
                        <h4 className="text-xl font-semibold text-gray-900 whitespace-nowrap">
                          {item.name}
                        </h4>

                        {/* dotted line filler */}
                        <div className="flex-grow mx-3 border-b border-dotted border-gray-400" />

                        <span className="text-lg font-semibold text-red-600 whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>

                      <p className="text-gray-700 text-left leading-relaxed break-words">
                        {item.description}
                      </p>
                    </div>
                  </div>

                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
