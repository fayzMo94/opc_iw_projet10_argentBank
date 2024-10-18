import React from "react";
import "./Home.css";
import { Banner } from "../../components/Banner/Banner";
import { FeatureItemCard } from "../../components/FeatureItemCard/FeatureItemCard";
import  featureItemData  from "../../data/featureItemData.json";

const Home = () => {
  return (
    <main>
      <Banner />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featureItemData.map((item, index) => (
          <FeatureItemCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
};

export default Home;
