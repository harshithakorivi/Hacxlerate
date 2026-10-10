
import { useState } from "react";
import "./BrowseCreators.css";

const creators = [
  {
    id: 1,
    name: "Aarav Studios",
    category: "AI Video Creator",
    skills: ["AI Video", "Cinematic", "Product Ads"],
    price: 5000,
    rating: 4.8,
    description: "Creates cinematic AI videos for brands and product launches.",
  },
  {
    id: 2,
    name: "PixelCraft AI",
    category: "AI Image Creator",
    skills: ["AI Images", "Realistic", "Social Media"],
    price: 2500,
    rating: 4.7,
    description: "Creates realistic AI images and creative social media visuals.",
  },
  {
    id: 3,
    name: "MotionMind",
    category: "AI Animation Creator",
    skills: ["3D Animation", "AI Video", "Animation"],
    price: 4000,
    rating: 4.9,
    description: "Designs engaging AI animations for advertisements and campaigns.",
  },
  {
    id: 4,
    name: "CreativeGen",
    category: "Social Media Creator",
    skills: ["Social Media", "AI Images", "Product Ads"],
    price: 2000,
    rating: 4.6,
    description: "Creates AI-powered creative content for social media campaigns.",
  },
];

function BrowseCreators() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCreators = creators.filter((creator) => {
    const matchesSearch = (
      creator.name +
      " " +
      creator.category +
      " " +
      creator.skills.join(" ") +
      " " +
      creator.description
    )
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      creator.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="browse-page">
      <div className="browse-header">
        <p className="browse-label">CREATOR MARKETPLACE</p>
        <h1>Discover AI Creators</h1>
        <p>
          Find creative talent for your next campaign.
        </p>
      </div>

      <div className="creator-filters">
        <input
          type="text"
          placeholder="Search creators or skills..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={(event) =>
            setSelectedCategory(event.target.value)
          }
        >
          <option value="All">All Creators</option>
          <option value="AI Video Creator">AI Video</option>
          <option value="AI Image Creator">AI Images</option>
          <option value="AI Animation Creator">AI Animation</option>
          <option value="Social Media Creator">Social Media</option>
        </select>
      </div>

      <p className="creator-count">
        {filteredCreators.length} creators found
      </p>

      <div className="creator-grid">
        {filteredCreators.map((creator) => (
          <article className="creator-card" key={creator.id}>
            <div className="creator-avatar">
              {creator.name.charAt(0)}
            </div>

            <span className="creator-category">
              {creator.category}
            </span>

            <h2>{creator.name}</h2>

            <p className="creator-description">
              {creator.description}
            </p>

            <div className="creator-skills">
              {creator.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>

            <div className="creator-details">
              <span>⭐ {creator.rating}</span>
              <strong>₹{creator.price.toLocaleString("en-IN")}</strong>
            </div>

            <button
              className="creator-button"
              onClick={() =>
                alert(
                  `You selected ${creator.name}. Application functionality will be added next.`
                )
              }
            >
              View Creator
            </button>
          </article>
        ))}
      </div>

      {filteredCreators.length === 0 && (
        <p className="no-creators">
          No creators found. Try another search.
        </p>
      )}
    </section>
  );
}

export default BrowseCreators;
