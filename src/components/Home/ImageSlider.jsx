import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import styles from "./ImageGallery.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const dataSource = [
  {
    original: "/tree-images/MoringaLeave1.jpg",
    description: "Mature trees store carbon and help fight global warming. Every tree planted is a step towards a cooler planet!"
  },
  {
    original: "/images/homeBackground.JPG",
    description:
      "Breathe Easy! Let's plant trees for cleaner air!"
  },
  {
    original: "/tree-images/african mahogany  side tree.jpeg",
    description: "100% Original Beef"
  }
  // {
  //   original: "/tree-images/neam leaves.jpg",
  //   description: "Mouthfull Of Happiness"
  // }
];

const ImageSlider = () => {
  const renderItem = (item) => (
    <div className={styles['image-gallery-slide']}>
      <img src={item.original} alt={item.description} />
      <div className={styles['image-overlay']}></div> {/* Add overlay */}
      <div className={styles['image-description']}>
        {item.description}
      </div>
      <button>learn more</button>
    </div>
  );

  return (
    <div className={styles['image-gallery']}>
      <ImageGallery
        items={dataSource}
        autoPlay
        showFullscreenButton={true}
        showThumbnails={false} // Remove thumbnails if you don't want them
        renderItem={renderItem} // Use custom renderItem to display the description
      />
    </div>

  );
};

export default ImageSlider;
