// src/components/FeatureCard.jsx
const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="feature-card">
      <span className="icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;   // 🔥 Esto soluciona el error
