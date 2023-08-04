import React, { useState, useEffect, useMemo } from "react";

const TypingAnimation = () => {
  const phrases = useMemo(
    () => [
      "Hello, World!",
      "I'm a tinkerer",
      "",
      ""
    ],
    []
  );

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const typeText = () => {
      setIsTyping(true);
      if (charIndex < phrases[phraseIndex].length) {
        setDisplayedText((prevText) => prevText + phrases[phraseIndex][charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsTyping(false);
      }
    };

    const eraseText = () => {
      setIsTyping(false);
      if (charIndex > 0) {
        setDisplayedText((prevText) => prevText.slice(0, -1));
        setCharIndex((prevIndex) => prevIndex - 1);
      } else {
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsTyping(true) 
      }
    };

    if (isTyping) {
      const typingInterval = setInterval(typeText, 100);
      return () => clearInterval(typingInterval); 
    } else {
      const erasingInterval = setInterval(eraseText, 50); 
      return () => clearInterval(erasingInterval); 
    }
  }, [phraseIndex, charIndex, phrases, isTyping]);

  useEffect(() => {
    setIsTyping(true);
  }, []);

  return <div className="text-animation" >{displayedText}</div>;
};

export default TypingAnimation;
