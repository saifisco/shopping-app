import { useState } from "react";
import { Rating } from "primereact/rating";

export default function Star() {
  const [value, setValue] = useState(null);

  return (
    <div>
      <Rating
        className="flex text-[yellow] cursor-pointer"
        value={value}
        onChange={(e) => setValue(e.value)}
        stars={5}
        cancel={false}
      />
    </div>
  );
}
