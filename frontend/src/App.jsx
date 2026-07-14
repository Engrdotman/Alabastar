import { useMemo, useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Lenovo ThinkPad X1 Carbon',
    category: 'Laptops',
    price: 899000,
    image:
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=900&q=80',
    description:
      'A slim business laptop with reliable performance, excellent keyboard feel, and all-day portability.',
  },
  {
    id: 2,
    name: 'HP EliteBook Pro',
    category: 'Laptops',
    price: 735000,
    image:
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=80',
    description:
      'Premium everyday power for students, professionals, and remote work setups.',
  },
  {
    id: 3,
    name: 'Dell UltraSharp Monitor',
    category: 'Accessories',
    price: 285000,
    image:
      'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=900&q=80',
    description:
      'A crisp external display for better productivity, design work, gaming, and clean desk setups.',
  },
  {
    id: 4,
    name: 'Mechanical Gaming Keyboard',
    category: 'Gaming',
    price: 68000,
    image:
      'https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=900&q=80',
    description:
      'Fast, tactile keys with durable switches for gaming, typing, and daily computer use.',
  },
  {
    id: 5,
    name: 'Wireless Precision Mouse',
    category: 'Accessories',
    price: 42000,
    image:
      'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80',
    description:
      'Comfortable wireless control with smooth tracking for laptops, desktops, and travel bags.',
  },
  {
    id: 6,
    name: '1TB Portable SSD',
    category: 'Storage',
    price: 118000,
    image:
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=900&q=80',
    description:
      'Fast external storage for backups, media files, project work, and everyday file transfer.',
  },
  {
    id: 7,
    name: 'USB-C Multiport Hub',
    category: 'Accessories',
    price: 55000,
    image:
      'https://images.unsplash.com/photo-1563770660941-10a63607739f?auto=format&fit=crop&w=900&q=80',
    description:
      'Expand your laptop with HDMI, USB, memory card, and charging ports in one compact hub.',
  },
  {
    id: 8,
    name: 'Gaming Laptop Cooling Stand',
    category: 'Gaming',
    price: 74000,
    image:
      'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?auto=format&fit=crop&w=900&q=80',
    description:
      'Keep your laptop cooler and your setup more comfortable during long gaming or work sessions.',
  },
];

const categories = [
  {
    name: 'Laptops',
    image:
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Accessories',
    image:
      'https://images.unsplash.com/photo-1629429407756-740d8cb1d7f3?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Gaming',
    image:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Storage',
    image:
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=80',
  },
];
const benefits = ['Genuine Products', 'Affordable Prices', 'Fast Delivery', 'Customer Support'];
const media = {
  heroImage:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  videoPoster:
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  setupVideo:
    'https://videos.pexels.com/video-files/853919/853919-hd_1920_1080_25fps.mp4',
};

const currency = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
  maximumFractionDigits: 0,
});

function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [cart, setCart] = useState([]);
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const searchText = `${product.name} ${product.category}`.toLowerCase();
      return searchText.includes(query.trim().toLowerCase());
    });
  }, [query]);

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  function openPage(page) {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function viewProduct(product) {
    setSelectedProduct(product);
    openPage('details');
  }

  function addToCart(product) {
    setCart((items) => {
      const existingItem = items.find((item) => item.id === product.id);

      if (existingItem) {
        return items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...items, { ...product, quantity: 1 }];
    });
  }

  function updateQuantity(productId, amount) {
    setCart((items) =>
      items
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + amount) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <button className="brand" type="button" onClick={() => openPage('home')}>
            <span className="brand-mark">A</span>
            Alaba Star
          </button>

          <div className="nav-links">
            {['home', 'shop', 'contact'].map((page) => (
              <button
                className={activePage === page ? 'active' : ''}
                key={page}
                type="button"
                onClick={() => openPage(page)}
              >
                {page}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <label className="search-box" aria-label="Search products">
              <span>Search</span>
              <input
                type="search"
                placeholder="Search products"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onFocus={() => setActivePage('shop')}
              />
            </label>
            <button className="icon-button" type="button" onClick={() => openPage('cart')}>
              Cart
              <span>{cart.reduce((total, item) => total + item.quantity, 0)}</span>
            </button>
          </div>
        </nav>
      </header>

      <main>
        {activePage === 'home' && (
          <>
            <section className="hero-section">
              <div className="hero-copy">
                <p className="eyebrow">Laptops, accessories, and gadgets</p>
                <h1>Quality Laptops & Accessories</h1>
                <p>
                  Shop genuine laptops, accessories, and computer gadgets at affordable
                  prices.
                </p>
                <button className="primary-button" type="button" onClick={() => openPage('shop')}>
                  Shop Now
                </button>
              </div>
              <div className="hero-media" aria-label="Modern laptop setup">
                <img
                  src={media.heroImage}
                  alt="Laptop and accessories on a clean workspace"
                />
              </div>
            </section>

            <FeaturedProducts
              products={products}
              onAddToCart={addToCart}
              onViewProduct={viewProduct}
            />

            <section className="media-section">
              <div className="media-copy">
                <p className="eyebrow">Setup Preview</p>
                <h2>Everything for a cleaner, faster workspace.</h2>
                <p>
                  Use this video block for a store tour, laptop showcase, customer setup,
                  or promo clip when you are ready to replace the placeholder.
                </p>
              </div>
              <div className="video-frame">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={media.videoPoster}
                  aria-label="Laptop workspace preview video"
                >
                  <source src={media.setupVideo} type="video/mp4" />
                </video>
              </div>
            </section>

            <Categories onSelectCategory={(category) => {
              setQuery(category.name);
              openPage('shop');
            }}
            />

            <section className="why-section">
              <div>
                <p className="eyebrow">Why Choose Us</p>
                <h2>Reliable tech shopping, kept simple.</h2>
              </div>
              <div className="benefit-grid">
                {benefits.map((benefit, index) => (
                  <article className="benefit-card" key={benefit}>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{benefit}</h3>
                    <p>
                      We focus on practical products, clear pricing, and dependable service.
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}

        {activePage === 'shop' && (
          <section className="page-section">
            <div className="section-heading">
              <p className="eyebrow">Shop</p>
              <h1>Browse Products</h1>
              <p>Find laptops, accessories, gaming gear, and storage products.</p>
            </div>
            <ProductGrid
              products={filteredProducts}
              onAddToCart={addToCart}
              onViewProduct={viewProduct}
            />
          </section>
        )}

        {activePage === 'details' && (
          <section className="details-section">
            <div className="details-image">
              <img src={selectedProduct.image} alt={selectedProduct.name} />
            </div>
            <div className="details-copy">
              <p className="eyebrow">{selectedProduct.category}</p>
              <h1>{selectedProduct.name}</h1>
              <strong>{currency.format(selectedProduct.price)}</strong>
              <p>{selectedProduct.description}</p>
              <div className="details-actions">
                <button
                  className="primary-button"
                  type="button"
                  onClick={() => addToCart(selectedProduct)}
                >
                  Add to Cart
                </button>
                <button className="secondary-button" type="button" onClick={() => openPage('shop')}>
                  Back to Shop
                </button>
              </div>
            </div>
          </section>
        )}

        {activePage === 'cart' && (
          <section className="page-section">
            <div className="section-heading">
              <p className="eyebrow">Cart</p>
              <h1>Your Cart</h1>
              <p>Review selected products before checkout.</p>
            </div>

            <div className="cart-layout">
              <div className="cart-list">
                {cart.length === 0 ? (
                  <div className="empty-state">
                    <h2>Your cart is empty</h2>
                    <p>Add a laptop or accessory to get started.</p>
                    <button className="primary-button" type="button" onClick={() => openPage('shop')}>
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <article className="cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <h3>{item.name}</h3>
                        <p>{currency.format(item.price)}</p>
                      </div>
                      <div className="quantity-control">
                        <button type="button" onClick={() => updateQuantity(item.id, -1)}>
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => updateQuantity(item.id, 1)}>
                          +
                        </button>
                      </div>
                    </article>
                  ))
                )}
              </div>

              <aside className="cart-summary">
                <h2>Order Summary</h2>
                <div>
                  <span>Subtotal</span>
                  <strong>{currency.format(cartTotal)}</strong>
                </div>
                <div>
                  <span>Delivery</span>
                  <strong>Calculated later</strong>
                </div>
                <button className="primary-button" type="button">
                  Checkout
                </button>
              </aside>
            </div>
          </section>
        )}

        {activePage === 'contact' && (
          <section className="contact-section">
            <div>
              <p className="eyebrow">Contact</p>
              <h1>Let us help you find the right tech.</h1>
              <p>
                Talk to Alaba Star about laptops, accessories, bulk orders, delivery,
                and product availability.
              </p>
              <div className="contact-details">
                <span>Phone: +234 800 000 0000</span>
                <span>Email: hello@alabastar.com</span>
                <span>Location: Lagos, Nigeria</span>
              </div>
            </div>

            <form className="contact-form">
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@example.com" />
              </label>
              <label>
                Message
                <textarea rows="5" placeholder="Tell us what you need" />
              </label>
              <button className="primary-button" type="button">
                Send Message
              </button>
            </form>
          </section>
        )}
      </main>

      <footer className="site-footer">
        <div>
          <h2>Alaba Star</h2>
          <p>Clean, affordable technology for work, school, gaming, and everyday life.</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>+234 800 000 0000</p>
          <p>hello@alabastar.com</p>
        </div>
        <div>
          <h3>Social</h3>
          <div className="social-links">
            <a href="/" aria-label="Instagram">IG</a>
            <a href="/" aria-label="Facebook">FB</a>
            <a href="/" aria-label="X">X</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeaturedProducts({ products: featuredProducts, onAddToCart, onViewProduct }) {
  return (
    <section className="featured-section">
      <div className="section-heading">
        <p className="eyebrow">Featured Products</p>
        <h2>Popular picks for better setups</h2>
      </div>
      <ProductGrid
        products={featuredProducts}
        onAddToCart={onAddToCart}
        onViewProduct={onViewProduct}
      />
    </section>
  );
}

function ProductGrid({ products: gridProducts, onAddToCart, onViewProduct }) {
  if (gridProducts.length === 0) {
    return (
      <div className="empty-state">
        <h2>No products found</h2>
        <p>Try searching for laptops, accessories, gaming, or storage.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {gridProducts.map((product) => (
        <article className="product-card" key={product.id}>
          <button className="product-image" type="button" onClick={() => onViewProduct(product)}>
            <img src={product.image} alt={product.name} />
          </button>
          <div className="product-card-body">
            <span>{product.category}</span>
            <button className="product-name" type="button" onClick={() => onViewProduct(product)}>
              {product.name}
            </button>
            <strong>{currency.format(product.price)}</strong>
            <button className="card-button" type="button" onClick={() => onAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

function Categories({ onSelectCategory }) {
  return (
    <section className="category-section">
      <div className="section-heading">
        <p className="eyebrow">Categories</p>
        <h2>Shop by what you need</h2>
      </div>
      <div className="category-grid">
        {categories.map((category) => (
          <button
            className="category-card"
            key={category.name}
            type="button"
            onClick={() => onSelectCategory(category)}
          >
            <img src={category.image} alt={`${category.name} category`} />
            <span>{category.name.slice(0, 2).toUpperCase()}</span>
            <h3>{category.name}</h3>
          </button>
        ))}
      </div>
    </section>
  );
}

export default App;
