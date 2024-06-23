import { useScrollProgress } from "../../hooks/use-scroll";

export const ScrollProgressBar = () => {
  const scrollProgress = useScrollProgress();
  console.log(scrollProgress);

  return (
    <div>
      <div
        style={{
          width: `${scrollProgress}%`,
          height: "9px",
          backgroundColor: "green",
        }}
      />
    </div>
  );
};
