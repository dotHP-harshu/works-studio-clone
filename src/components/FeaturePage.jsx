import React from "react";
import FeatureCard from "./FeatureCard";

function FeaturePage() {
  return (
    <div>
      <div className=" w-full grid min-lg:grid-cols-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1 gap-3 px-4 overflow-hidden">
        {/* First  row  */}
        <div>
          <FeatureCard
            imgSrc={"images/img-1-1.webp"}
            heading1={"apartus"}
            heading2={"'subject' film series"}
          />
        </div>
        <div>
          <FeatureCard
            imgSrc={"images/img-1-2.jpg"}
            videoSrc={"videos/vid-1-2.mp4"}
            heading1={"minral health"}
            heading2={"branding & identity"}
          />
        </div>
        <div className="max-lg:col-span-1 col-span-2">
          <FeatureCard
            imgSrc={"images/img-1-3.jpg"}
            videoSrc={"videos/vid-1-3.mp4"}
            heading1={"virgin music"}
            heading2={"branding & identity"}
          />
        </div>
        {/* First  row  */}
        {/* Second row */}
        <div className="max-lg:col-span-1 col-span-2">
          <FeatureCard
            imgSrc={"images/img-2-1.webp"}
            heading1={"fear of god"}
            heading2={"essential identity"}
          />
        </div>
        <div className="max-lg:col-start-auto col-start-4">
          <FeatureCard
            imgSrc={"images/img-2-2.webp"}
            heading1={"nikeskims"}
            heading2={"confidential"}
          />
        </div>
        {/* Second row */}
        {/* Third row */}
        <div>
          <FeatureCard
            imgSrc={"images/img-3-1.webp"}
            heading1={"the frost house"}
            heading2={"branding & identity"}
          />
        </div>
        <div>
          <FeatureCard
            imgSrc={"images/img-3-2.webp"}
            videoSrc={"videos/vid-3-2.mp4"}
            heading1={"ethors"}
            heading2={"branding & identity"}
          />
        </div>
        <div className="max-lg:col-span-1 col-span-2">
          <FeatureCard
            imgSrc={"images/img-3-3.webp"}
            heading1={"converse"}
            heading2={"heritage campaign"}
          />
        </div>
        {/* Third row */}
        {/* fourth row */}
        <div className="max-lg:col-span-1 col-span-2">
          <FeatureCard
            imgSrc={"images/img-4-1.webp"}
            heading1={"minral health"}
            heading2={"e-commerce website"}
          />
        </div>
        <div className="max-lg:col-start-auto col-start-4">
          <FeatureCard
            imgSrc={"images/img-4-2.webp"}
            heading1={"converse"}
            heading2={"global campaign"}
          />
        </div>
        {/* fourth row */}
        {/* fifth row */}
        <div>
          <FeatureCard
            imgSrc={"images/img-5-1.webp"}
            videoSrc={"videos/vid-5-1.mp4"}
            heading1={"american eagle "}
            heading2={"live your life"}
          />
        </div>
        <div>
          <FeatureCard
            imgSrc={"images/img-5-2.webp"}
            heading1={"converse"}
            heading2={"nextStudio design tool"}
          />
        </div>
        <div className="max-lg:col-span-1 col-span-2">
          <FeatureCard
            imgSrc={"images/img-5-3.webp"}
            heading1={"skky paterners"}
            heading2={"branding & identity"}
          />
        </div>
        {/* fifth row */}
        {/* sixth row  */}
        <div className="max-lg:col-start-auto col-start-2">
          <FeatureCard
            imgSrc={"images/img-6-1.webp"}
            videoSrc={"videos/vid-6-1.mp4"}
            heading1={"nike chicago"}
            heading2={"confidential"}
          />
        </div>
        <div className="max-lg:col-span-1 col-span-2">
          <FeatureCard
            imgSrc={"images/img-6-2.webp"}
            videoSrc={"videos/vid-6-2.mp4"}
            heading1={"u.s.soccer"}
            heading2={"onlyForward campaign"}
          />
        </div>
        {/* sixth row  */}
      </div>
    </div>
  );
}

export default FeaturePage;
