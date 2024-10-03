type StarProps = {
  marked: boolean;
  starId: number;
  size?: string;
};

const Star = ({ marked, starId, size = "large" }: StarProps) => {
  return (
    <span
      data-star-id={starId}
      className={size=="large" ? "text-3xl cursor-pointer" : ""}
      role="button"
    >
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

Star.displayName = "Star";
export default Star;
