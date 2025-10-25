import art from "../assets/art.png"
import building from "../assets/ssoyummy.jpg"

export default function About() {
  return (
    <div className="pt-20 px-4 py-16 min-h-screen mt-3">
      <div className="max-w-6xl mx-auto">

            <picture>
              <source media="" srcSet={building} />
              <img 
                alt="Korean Street Food Art"
                className="mx-auto object-cover rounded-xl mb-8"
              />
            </picture>

        <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">For over 10 years</h1>
        <p className="text-center text-lg text-gray-600 mb-16">We've been giving authentic korean street food flavours to Calgary</p>
        {/* Owners Section */}
        <div className="bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Meet the Owners</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Owner 2 */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center overflow-hidden">
                <div className="text-6xl">👩‍🍳</div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Heather</h3>
              <p className="text-blue-600 font-medium mb-4">Co-Owner & Head Chef</p>
              <p className="text-gray-600 leading-relaxed">
                A devoted mother of three, Heather has always had a natural knack for cooking authentic Korean dishes. Her passion for sharing the flavors of her heritage with her family inspired her to bring those same beloved recipes to the Calgary community. Every dish is prepared with the same love and care she puts into feeding her own children.
            </p>
          </div>

          {/* Owner 2 - Sungmoo */}
          <div className="text-center">
            <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center overflow-hidden">
              <div className="text-6xl">👨‍🍳</div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Sungmoo</h3>
            <p className="text-blue-600 font-medium mb-4">Co-Founder & Operations</p>
            <p className="text-gray-600 leading-relaxed">
              Sungmoo had the vision to bring his family to Calgary, drawn by the city's abundant sunny days and welcoming community. His unwavering support for Heather's culinary dreams made this restaurant possible. Together, they're building a family legacy and sharing the warmth of Korean street food culture with their new home.
              </p>
            </div>
          </div>

        {/* Our Story Section */}
        <div className="bg-white rounded-2xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">History</h2>
          <div className="max-w-3xl">
            <picture>
              <source media="(min-width: 500px)" srcSet={art} />
              <img 
                alt="Korean Street Food Art"
                className="w-full h-full object-cover rounded-xl mb-8"
              />
            </picture>

            <p className="text-gray-700 leading-relaxed text-lg mb-6">
              Boonshik (분식) refers to a category of Korean street food that is both affordable and delicious. Boonshik has become synonymous with the bustling, vibrant energy of Korean street markets. Vendors who specialize in Boonshik are often found in popular areas such as Myeongdong, Insadong, or around university campuses.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              These small, casual eateries often operate from food carts or small shops, and they offer a social experience where customers can stand or sit together, enjoying affordable yet flavorful dishes.
            </p>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}