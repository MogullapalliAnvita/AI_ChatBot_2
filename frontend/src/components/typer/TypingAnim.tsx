import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
  return (
    <TypeAnimation
      sequence={[
        "Chat with DeciZen AI",
        1000,
        "3D-inspired, vivid UI 🤖",
        2000,
        "Your own customized chat studio 💻",
        1500,
      ]}
      speed={50}
      style={{
        fontSize: "clamp(26px, 4vw, 34px)",
        color: "white",
        display: "inline-block",
        textShadow: "0 10px 35px rgba(0,0,0,0.5)",
        letterSpacing: "0.05em",
      }}
      repeat={Infinity}
    />
  );
};

export default TypingAnim;