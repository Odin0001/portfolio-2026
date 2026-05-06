import FloatingLines from "./FloatingLines.tsx";

const Gradient2 = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        zIndex: -10,
      }}
    >
      <FloatingLines
        enabledWaves={["top", "middle", "bottom"]}
        // Array - specify line count per wave; Number - same count for all waves
        lineCount={5}
        // Array - specify line distance per wave; Number - same distance for all waves
        lineDistance={5}
        bendRadius={5}
        bendStrength={-0.5}
        interactive={true}
        parallax={true}
        linesGradient={[
          "#083630", // dark teal
          "#0a4a42", // teal variant
          "#347FC4", // blue
          "#F58F29", // orange
        ]}
      />
      <div className="absolute bottom-0 left-0 h-28 w-full  bg-gradient-to-t from-bg-dark to-transparent" />
    </div>
  );
};

export default Gradient2;
