import { useState } from "react";
import CampaignBriefs from "./CampaignBriefs";
import BrowseCreators from "./BrowseCreators";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("campaign");

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          padding: "20px",
          background: "#111827",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setActivePage("campaign")}
          style={{
            padding: "12px 18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background: activePage === "campaign" ? "#6366f1" : "#374151",
            color: "white",
          }}
        >
          Create Campaign
        </button>

        <button
          onClick={() => setActivePage("creators")}
          style={{
            padding: "12px 18px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            background: activePage === "creators" ? "#6366f1" : "#374151",
            color: "white",
          }}
        >
          Browse Creators
        </button>
      </nav>

      {activePage === "campaign" ? (
        <CampaignBriefs />
      ) : (
        <BrowseCreators />
      )}
    </div>
  );
}

export default App;