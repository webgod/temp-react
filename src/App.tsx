import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="/" className="logo">Morning Bites</a>
        <ul className="nav-links">
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <section className="hero-section">
        <h1 className="blog-title">The Perfect Morning Ritual</h1>
        <p className="blog-subtitle">Discovering the sublime pairing of Corned Beef Hash and Coffee</p>
        <img 
          src="https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="A delicious plate of corned beef hash next to a steaming cup of coffee"
          className="featured-image"
        />
        <div className="content-section">
          <p>
            There's something magical about the combination of crispy, savory corned beef hash and a perfectly brewed cup of coffee in the morning. The rich, tender meat mixed with crispy potatoes creates a harmony of textures that dance on your palate, while the aromatic coffee provides the perfect counterpoint.
          </p>
          <p>
            This classic American breakfast dish, elevated to an art form, has become my morning ritual. The sizzle of the hash on the griddle, the rising steam from freshly ground coffee beans – these are the sensory experiences that make mornings worth savoring.
          </p>
          <a href="#" className="read-more">Read Full Article</a>
        </div>
      </section>
    </div>
  );
}

export default App;
