//? Component used in Gallery section of "Single Model" page

"use client";
import Link from "next/link";

// STYLES
import LightGallery from "lightgallery/react/Lightgallery.es5";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// LIGHTBOX IMPORTS
import lgZoom from "lightgallery/plugins/zoom";

const Lightbox = ({ images }) => {
  return (
    <LightGallery speed={500} plugins={[lgZoom]}>
      {images.map((image, index) => (
        <Link
          href={`/images/car_models${image}`}
          key={index}
          className="gallery_item_container"
        >
          <div
            key={index}
            className="gallery_item"
            style={{
              backgroundImage: `url(/images/car_models${image})`,
            }}
          ></div>
        </Link>
      ))}
    </LightGallery>
  );
};

export default Lightbox;
