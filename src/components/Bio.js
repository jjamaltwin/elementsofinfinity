import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Bio() {
  return (
    <div className="biowrap">

      <Header />
    <div className="bio">
      <h1>
        About The Author 
      </h1>
      <p className="bio-top">
        Aminah is an inspirational speaker who gives others motivation to be a
        better individual for all of humanity. She has mentored women who have
        come to her for advice about personal love relationships, careers, and
        life itself. She has always had a passion for helping others, which is
        why she first had to help herself.
      </p>
      <p>
        Over the past years Aminah has made a drastic change to her life. In
        2016 she started using products to help her lose weight from her second
        child, which she believes helped her get in a better mindset. She was
        supported and surrounded by a force of positive energy. Aminah became
        more aware of her journey by; eating healthy, exercising, and watching
        who her energy increased or decreased around which helped her stay
        surrounded with only genuine likeminded people.
      </p>

      <p className="bio-bottom">
        Addicted to bettering and healing herself through meditation, yoga,
        positive affirmations, and rituals. She studies metaphysics and uses the
        law of attraction to manifest what she wants in all aspects of life. A
        new car, winning the lottery, love, and developing a new personality as
        well as her career. Aminah currently resides in Iowa. She thrives off
        the energy of the sun. She loves nature and animals. Her goal is to help
        raise vibrations of love on the planet. Giving thanks to the Holy
        Trinity. Gratitude and love are the highest frequencies you can emit.
        It's a superpower, and she knows exactly how to use it!
      </p>
    </div>
      <Footer />

    </div>
  

  );
}

export default Bio;
