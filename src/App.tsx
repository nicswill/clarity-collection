import React from 'react';
import { Heart, Star, ShoppingBag, ExternalLink, Menu, X, ChevronDown, Shield, RotateCcw, Award, Truck } from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [favorites, setFavorites] = React.useState<Set<number>>(new Set());

  const toggleFavorite = (productId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  const handleProductClick = (url: string) => {
    window.open(url, '_blank');
  };

  const products = {
    writeTheVision: [
      {
        id: 1,
        name: "Write the Vision, Sis - Sweatshirt",
        price: "$45.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-premium-sweatshirt-team-royal-front-2-68a754fe324fe-300x300.jpg",
        description: "Cozy and bold—reminding every Sis to dream big, write it down, and walk it out.",
        url: "https://clearvisionleader.com/product/write-the-vision-sis-unisex-premium-sweatshirt/",
        colors: ['#1e40af', '#dc2626', '#059669']
      },
      {
        id: 2,
        name: "Write the Vision Bro - Sweatshirt",
        price: "$45.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-premium-sweatshirt-team-red-front-68a752e6ad581-300x300.jpg",
        description: "Soft strength for brothers of purpose—wear your vision and lead with faith.",
        url: "https://clearvisionleader.com/product/unisex-premium-sweatshirt-2/",
        colors: ['#dc2626', '#1e40af', '#374151']
      },
      {
        id: 3,
        name: "Write the Vision, Bro - Hoodie",
        price: "$49.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-premium-mid-weight-hoodie-navy-front-68a7518e70882-300x300.jpg",
        description: "Stay warm and motivated—this hoodie calls men to clarity and action.",
        url: "https://clearvisionleader.com/product/unisex-premium-mid-weight-hoodie/",
        colors: ['#1e3a8a', '#374151', '#000000']
      },
      {
        id: 4,
        name: "Write the Vision, Sis - Hoodie",
        price: "$49.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-premium-mid-weight-hoodie-navy-front-68a750a1f0010-300x300.jpg",
        description: "Empowering comfort—because every Sis deserves to wear her vision with confidence.",
        url: "https://clearvisionleader.com/product/write-the-vision-sis-unisex-premium-mid-weight-hoodie/",
        colors: ['#1e3a8a', '#7c3aed', '#ec4899']
      },
      {
        id: 5,
        name: "Write the Vision, Sis - Tee",
        price: "$24.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-staple-t-shirt-black-right-front-68a74e3a6ba1d-300x300.jpg",
        description: "Lightweight and bold—a daily reminder to put your God-given vision on paper.",
        url: "https://clearvisionleader.com/product/write-the-vision-sis-unisex-t-shirt/",
        colors: ['#000000', '#ffffff', '#6b7280']
      },
      {
        id: 6,
        name: "Write the Vision, Bro - Tee",
        price: "$24.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-staple-t-shirt-black-left-front-68a74b66a6685-300x300.jpg",
        description: "Simple, strong, and sharp—a tee for men who lead with vision.",
        url: "https://clearvisionleader.com/product/write-the-vision-bro-uisex-t-shirt/",
        colors: ['#000000', '#ffffff', '#374151']
      }
    ],
    clarity: [
      {
        id: 7,
        name: "Clarity - Style with Vision - Hoodie",
        price: "$49.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-premium-mid-weight-hoodie-black-front-68a747d1e02be-300x300.jpg",
        description: "Style meets purpose—wear clarity wherever you go.",
        url: "https://clearvisionleader.com/product/clarity-style-with-vision-unisex-premium-mid-weight-hoodie/",
        colors: ['#000000', '#374151', '#1e3a8a']
      },
      {
        id: 8,
        name: "Clarity is the Turning Point - Hoodie",
        price: "$49.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-premium-mid-weight-hoodie-black-front-68a68ea3de8dc-300x300.jpg",
        description: "Mark your breakthrough moment in style and comfort.",
        url: "https://clearvisionleader.com/product/clarity-is-the-turning-pointunisex-premium-mid-weight-hoodie/",
        colors: ['#000000', '#6b7280', '#1e40af']
      },
      {
        id: 9,
        name: "Clarity is the Turning Point - Tee",
        price: "$24.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-staple-t-shirt-black-front-2-68a68af0ef2a7-300x300.jpg",
        description: "Bold typography for bold change—clarity is where transformation begins.",
        url: "https://clearvisionleader.com/product/clarity-is-the-turning-point-unisex-t-shirt/",
        colors: ['#000000', '#ffffff', '#6b7280']
      },
      {
        id: 10,
        name: "Clarity - Style with Vision - Tee",
        price: "$24.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-staple-t-shirt-black-front-68a68812d5615-300x300.jpg",
        description: "Everyday comfort with a bold declaration: Style with Vision.",
        url: "https://clearvisionleader.com/product/clarity-style-with-vision-unisex-t-shirt/",
        colors: ['#000000', '#ffffff', '#374151']
      },
      {
        id: 11,
        name: "Clarity - Style with Vision - Sweatshirt",
        price: "$45.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-premium-sweatshirt-team-royal-front-68a680744db94-300x300.jpg",
        description: "Elevated style and lasting comfort—made for leaders who live with vision.",
        url: "https://clearvisionleader.com/product/clarity-collection-sweatshirt-style-with-vision-unisex-premium-sweatshirt/",
        colors: ['#1e40af', '#000000', '#6b7280']
      },
      {
        id: 12,
        name: "Clarity with Yellow i - Oversized Tee",
        price: "$29.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-oversized-garment-dyed-t-shirt-washed-black-left-front-68a54a53e94fa-300x300.jpg",
        description: "Big, bold, and confident—the yellow 'i' stands for individuality and focus.",
        url: "https://clearvisionleader.com/product/clarity-with-yellow-i-unisex-oversized-t-shirt/",
        colors: ['#374151', '#000000', '#6b7280']
      },
      {
        id: 13,
        name: "Clarity with Yellow i - Oversized Heavyweight Hoodie",
        price: "$54.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-oversized-heavyweight-hoodie-athletic-heather-front-68a5483e3eab9-300x300.jpg",
        description: "Make a statement in oversized comfort—clarity highlighted with a pop of gold.",
        url: "https://clearvisionleader.com/product/clarity-with-yellow-i-oversized-heavyweight-hoodie/",
        colors: ['#9ca3af', '#000000', '#374151']
      },
      {
        id: 14,
        name: "Clarity Heavyweight Sweatshirt",
        price: "$45.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-oversized-heavyweight-sweatshirt-black-front-68a7712c7d45a-300x300.jpg",
        description: "Classic heavyweight style with a message that never fades: Clarity first.",
        url: "https://clearvisionleader.com/product/clarity-heavyweight-sweatshirt/",
        colors: ['#000000', '#374151', '#6b7280']
      },
      {
        id: 15,
        name: "Clarity with Yellow i - Premium Sweatshirt",
        price: "$45.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-premium-sweatshirt-black-front-68a54308bf685-300x300.jpg",
        description: "A polished premium sweatshirt with purpose in every stitch.",
        url: "https://clearvisionleader.com/product/clarity-with-yellow-i-premium-sweatshirt/",
        colors: ['#000000', '#374151', '#6b7280']
      },
      {
        id: 16,
        name: "Clarity with Yellow i - V-Neck Tee",
        price: "$24.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-v-neck-tee-navy-front-68a540b5ea095-300x300.jpg",
        description: "Casual yet bold—a v-neck that makes vision personal.",
        url: "https://clearvisionleader.com/product/clarity-with-yellow-i-short-sleeve-v-neck-t-shirt/",
        colors: ['#1e3a8a', '#000000', '#6b7280']
      },
      {
        id: 17,
        name: "Clarity with Red i - Sweatshirt",
        price: "$45.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-premium-sweatshirt-black-front-68a53cf08a00d-300x300.jpg",
        description: "Crisp black-and-white design with a red 'i' that pops with purpose.",
        url: "https://clearvisionleader.com/product/unisex-premium-sweatshirt/",
        colors: ['#000000', '#ffffff', '#dc2626']
      },
      {
        id: 18,
        name: "Clarity with Red i - V-Neck Tee",
        price: "$24.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-v-neck-tee-black-front-68a53bd00b480-300x300.jpg",
        description: "A clean v-neck tee with a bold red highlight—clarity you can wear anywhere.",
        url: "https://clearvisionleader.com/product/clarity-with-red-i-short-sleeve-v-neck-t-shirt/",
        colors: ['#000000', '#ffffff', '#dc2626']
      }
    ],
    peaceOverPetty: [
      {
        id: 19,
        name: "Peace Over Petty - No Drama - Hoodie",
        price: "$49.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/cotton-heritage-m2580-i-unisex-premium-pullover-hoodie-forest-green-front-68a7e9593685b.jpg",
        description: "Faith over fuss, calm over conflict—No drama, just Jesus and peace.",
        url: "https://clearvisionleader.com/product/peace-over-petty-no-drama-just-jesus-and-peace-unisex-hoodie/",
        colors: ['#059669', '#7c2d12', '#1e3a8a']
      },
      {
        id: 20,
        name: "Peace Over Petty - White Hoodie",
        price: "$49.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/07/unisex-eco-raglan-hoodie-white-front-688adc8d87827-300x300.jpg",
        description: "Stay cool, stay calm—choose peace over petty in clean white comfort.",
        url: "https://clearvisionleader.com/product/peace-over-petty-hoodie-white-john-1633/",
        colors: ['#ffffff', '#000000', '#6b7280']
      },
      {
        id: 21,
        name: "Peace Over Petty - Black Tee",
        price: "$24.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/07/unisex-staple-t-shirt-black-front-688ad84b0a96d-300x300.jpg",
        description: "Bold black, bold message—peace always wins over petty.",
        url: "https://clearvisionleader.com/product/peace-over-petty-tee-black-john-1633/",
        colors: ['#000000', '#ffffff', '#6b7280']
      },
      {
        id: 22,
        name: "Peace Over Petty - White Tee",
        price: "$24.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-staple-t-shirt-white-front-68a77540dabde-300x300.jpg",
        description: "Lightweight everyday tee with a statement that speaks louder than words.",
        url: "https://clearvisionleader.com/product/peace-over-petty-tee-white-john-1633/",
        colors: ['#ffffff', '#000000', '#6b7280']
      },
      {
        id: 23,
        name: "Peace Over Petty - A Lifestyle - Hoodie",
        price: "$49.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/cotton-heritage-m2580-i-unisex-premium-pullover-hoodie-maroon-front-68a7e58d44964.jpg",
        description: "Choose calm over chaos and confidence over conflict—Peace Over Petty is more than style, it's a statement.",
        url: "https://clearvisionleader.com/product/peace-over-petty-a-lifestyle-not-just-a-look-unisex-hoodie/",
        colors: ['#7c2d12', '#000000', '#1e3a8a']
      }
    ],
    mindfulLiving: [
      {
        id: 24,
        name: "Don't Push. Pause. - Tee",
        price: "$24.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-staple-t-shirt-black-left-front-68a552b716257-300x300.jpg",
        description: "Minimal, powerful, unforgettable—a wearable reminder to pause and reset.",
        url: "https://clearvisionleader.com/product/clarity-collection-tee-dont-push-pause-unisex-t-shirt/",
        colors: ['#000000', '#ffffff', '#6b7280']
      },
      {
        id: 25,
        name: "Don't Push. Pause. - Oversized Hoodie",
        price: "$54.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/08/unisex-oversized-heavyweight-hoodie-black-front-68a54f3548e3c-300x300.jpg",
        description: "Streetwear meets wisdom—oversized comfort with a message of strength in stillness.",
        url: "https://clearvisionleader.com/product/dont-push-pause-oversized-heavyweight-hoodie/",
        colors: ['#000000', '#6b7280', '#374151']
      },
      {
        id: 26,
        name: "Get Clarity - Black Hoodie",
        price: "$49.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/07/unisex-premium-hoodie-black-front-688282f858130-300x300.jpg",
        description: "Sharp, sleek, and purposeful—this hoodie calls you to clarity in every step.",
        url: "https://clearvisionleader.com/product/get-clarity-tee-hoodie/",
        colors: ['#000000', '#374151', '#1e3a8a']
      },
      {
        id: 27,
        name: "Get Clarity Tee - Bold Vision. Clear Purpose.",
        price: "$24.99",
        image: "https://clearvisionleader.com/wp-content/uploads/2025/07/unisex-staple-t-shirt-black-front-2-68828238ced0e-300x300.jpg",
        description: "Crisp design, powerful message—a tee that keeps your focus sharp and your purpose clear.",
        url: "https://clearvisionleader.com/product/get-clarity-tee-bold-vision-clear-purpose/",
        colors: ['#000000', '#ffffff', '#6b7280']
      }
    ]
  };

  const ProductCard = ({ product }: { product: any }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
          onClick={() => handleProductClick(product.url)}
        />
        <button 
          className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>
      
      <div className="p-6">
        <h3 
          className="text-lg font-semibold text-gray-900 mb-2 cursor-pointer hover:text-red-600 transition-colors duration-200"
          onClick={() => handleProductClick(product.url)}
        >
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-2">(127 reviews)</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-gray-900">{product.price}</span>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500">Colors:</span>
            <div className="flex space-x-1">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border-2 border-gray-200"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500 mb-4">Multiple colors available</p>

        <div className="flex space-x-2">
          <button
            onClick={() => handleProductClick(product.url)}
            className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Shop Now</span>
          </button>
          <button
            onClick={() => handleProductClick(product.url)}
            className="px-4 py-2 border border-yellow-500 text-yellow-600 rounded-lg hover:bg-yellow-50 transition-colors duration-200 flex items-center justify-center"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-red-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a 
              href="https://clearvisionleader.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-4 hover:opacity-80 hover:scale-105 transition-all duration-300 drop-shadow-lg"
            >
              <img 
                src="/logo.png" 
                alt="The Clarity Collection Logo" 
                className="w-28 h-28 object-contain filter drop-shadow-md"
              />
              <div>
                <h1 className="text-2xl font-black text-gray-900 tracking-tight">The Clarity Collection</h1>
                <p className="text-base font-medium text-red-600">Faith-driven apparel</p>
              </div>
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="#collections" className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors px-4 py-2 rounded-lg hover:bg-red-50">Collections</a>
              <a href="https://clearvisionleader.com/about-us/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors px-4 py-2 rounded-lg hover:bg-red-50">About</a>
              <a href="https://clearvisionleader.com/contact-us/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors px-4 py-2 rounded-lg hover:bg-red-50">Contact</a>
            </nav>
            <button
              className="md:hidden p-2 text-gray-700 hover:text-red-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-red-200 py-4">
              <nav className="flex flex-col space-y-2">
                <a href="#collections" className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors px-4 py-2 rounded-lg hover:bg-red-50">Collections</a>
                <a href="https://clearvisionleader.com/about-us/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors px-4 py-2 rounded-lg hover:bg-red-50">About</a>
                <a href="https://clearvisionleader.com/contact-us/" target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-gray-700 hover:text-red-600 transition-colors px-4 py-2 rounded-lg hover:bg-red-50">Contact</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Wear the Word.<br />
            <span className="text-red-600">Style with Vision.</span><br />
            Live with Purpose.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Faith-driven apparel for believers who want to wear what they believe and live with vision. 
            Shop The Clarity Collection - where Scripture meets style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#collections" 
              className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Shop the Collection
            </a>
            <a 
              href="https://clearvisionleader.com/about-us/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              Our Story
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300">
                <Truck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders over $50</p>
            </div>
            <div className="text-center group">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure checkout</p>
            </div>
            <div className="text-center group">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300">
                <RotateCcw className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
            <div className="text-center group">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors duration-300">
                <Award className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">Faith-driven craftsmanship</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Write the Vision Collection */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
                Write the Vision Collection
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-600 rounded-full"></div>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empowering both Sis and Bro to dream big, write it down, and walk it out with purpose and faith.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {products.writeTheVision.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Clarity Collection */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
                Clarity Collection
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow-500 rounded-full"></div>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Style meets purpose. Wear clarity wherever you go and mark your breakthrough moments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {products.clarity.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Peace Over Petty Collection */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
                Peace Over Petty Collection
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500 rounded-full"></div>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose calm over chaos, faith over fuss. Peace Over Petty is more than style—it's a lifestyle.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {products.peaceOverPetty.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

          {/* Mindful Living Collection */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 relative">
                Mindful Living Collection
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-purple-500 rounded-full"></div>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wearable reminders to pause, reset, and live with intention. Streetwear meets wisdom.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {products.mindfulLiving.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-4">Stay Connected</h2>
          <p className="text-xl text-red-100 mb-8">
            Get the latest updates on new collections and faith-inspired content
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <a 
                href="https://clearvisionleader.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 mb-4 hover:opacity-80 transition-opacity duration-200"
              >
                <img 
                  src="/logo.png" 
                  alt="The Clarity Collection Logo" 
                  className="w-20 h-20 object-contain filter drop-shadow-sm"
                />
                <div>
                  <h3 className="text-xl font-black">The Clarity Collection</h3>
                  <p className="text-red-400 font-medium">Faith-driven apparel</p>
                </div>
              </a>
              <p className="text-gray-400 mb-4">
                Wear the Word. Style with Vision. Live with Purpose.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Instagram</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Facebook</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                  <span className="sr-only">Twitter</span>
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Collections</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Write the Vision</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Clarity</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Peace Over Petty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mindful Living</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://clearvisionleader.com/contact-us/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 The Clarity Collection™ by Clear Vision Leadership, LLC. All designs, trademarks, and original concepts are protected. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
