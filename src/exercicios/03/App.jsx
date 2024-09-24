import React, { useState } from "react";
import styles from "./App.module.css";

export default function App() {
  const [imageCount, setImageCount] = useState(5);

  const addImage = () => {
    setImageCount(imageCount + 1);
  };

  const removeImage = () => {
    if (imageCount > 0) {
      setImageCount(imageCount - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <button onClick={addImage}>+</button>
        <span>{imageCount}</span>
        <button onClick={removeImage}>-</button>
      </div>
      <div className={styles.gallery}>
        {Array.from({ length: imageCount }).map((_, index) => (
          <div key={index} className={styles.imagePlaceholder}>
            100 x 100
          </div>
        ))}
      </div>
    </div>
  );
}
