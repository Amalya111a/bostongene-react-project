import { useState } from "react";
import { skinConditions } from "../../services/apiConditions";

const highlightMatch = (text: string, query: string) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.split(regex).map((part, i) =>
    regex.test(part) ? (
      <mark key={i} style={{ backgroundColor: "yellow" }}>
        {part}
      </mark>
    ) : (
      part
    )
  );
};

const Conditions: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredResults = query.length > 0
    ? skinConditions.filter((cond) =>
        cond.name.toLowerCase().includes(query.toLowerCase()) ||
        cond.symptoms.toLowerCase().includes(query.toLowerCase()) ||
        cond.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>🩺 Skin Disease Finder</h2>

      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search term"
          style={{ padding: "8px", width: "300px" }}
        />
      </div>

      {filteredResults.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredResults.map((result) => (
            <div
              key={result.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "15px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
              }}
            >
              <h3>{highlightMatch(result.name, query)}</h3>
              <p>
                <strong>Description:</strong> {highlightMatch(result.description, query)}
              </p>
              <p>
                <strong>Symptoms:</strong> {highlightMatch(result.symptoms, query)}
              </p>
              <p>
                <strong>Treatment:</strong> {result.treatment}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  overflowX: "auto",
                  padding: "10px 0",
                }}
              >
                {result.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    style={{
                      width: "100%",
                      maxWidth: "300px",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : query ? (
        <p style={{ textAlign: "center", color: "gray", marginTop: "20px" }}>
          No results found.
        </p>
      ) : null}

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="Enlarged"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "8px",
              boxShadow: "0 0 10px #000",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Conditions;
