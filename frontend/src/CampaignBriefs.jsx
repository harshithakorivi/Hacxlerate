import { useState } from "react";
import "./CampaignBriefs.css";

function CampaignBriefs() {
  const [title, setTitle] = useState("");
  const [brandName, setBrandName] = useState("");
  const [objective, setObjective] = useState("");
  const [contentType, setContentType] = useState("AI Video");
  const [visualStyle, setVisualStyle] = useState("Cinematic");
  const [aspectRatio, setAspectRatio] = useState("9:16");
  const [budget, setBudget] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const campaign = {
      title,
      brandName,
      objective,
      contentType,
      visualStyle,
      aspectRatio,
      budget,
    };

    console.log("Campaign created:", campaign);
    alert("Campaign brief created successfully!");
  }

  return (
    <div className="campaign-page">
      <h1>Create a Campaign</h1>
      <p>Share your creative brief with AI content creators.</p>

      <form onSubmit={handleSubmit} className="campaign-form">
        <label>Campaign Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. Summer Product Launch"
          required
        />

        <label>Brand Name</label>
        <input
          value={brandName}
          onChange={(e) => setBrandName(e.target.value)}
          placeholder="Enter brand name"
          required
        />

        <label>Campaign Objective</label>
        <textarea
          value={objective}
          onChange={(e) => setObjective(e.target.value)}
          placeholder="What do you want to achieve?"
          required
        />

        <label>Content Type</label>
        <select
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
        >
          <option>AI Video</option>
          <option>AI Image</option>
          <option>Social Media Post</option>
          <option>Advertisement</option>
          <option>AI Animation</option>
        </select>

        <label>Visual Style</label>
        <select
          value={visualStyle}
          onChange={(e) => setVisualStyle(e.target.value)}
        >
          <option>Cinematic</option>
          <option>Realistic</option>
          <option>Minimalist</option>
          <option>3D Animation</option>
          <option>Anime</option>
        </select>

        <label>Aspect Ratio</label>
        <select
          value={aspectRatio}
          onChange={(e) => setAspectRatio(e.target.value)}
        >
          <option>9:16</option>
          <option>16:9</option>
          <option>1:1</option>
          <option>4:5</option>
        </select>

        <label>Budget (₹)</label>
        <input
          type="number"
          min="1"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          placeholder="Enter campaign budget"
          required
        />

        <button type="submit">Create Campaign</button>
      </form>
    </div>
  );
}

export default CampaignBriefs;