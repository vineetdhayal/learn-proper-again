import { useState, useRef, useEffect } from "react";

const registerObserver = (ref: any, setImageShown: any) => {
  console.log('intersection');
  const observer = new IntersectionObserver((entries, observe) => {
    entries.forEach((entry: any) => {
      console.log(entry);
      console.log('image shown');
      if (entry.isIntersecting) {
        setImageShown(true);
        observe.disconnect();
        return;
      }
    });
  });
  observer.observe(ref);
};

const LazyImage = ({ src, alt }) => {
  console.log('rendered');
  const [imageShown, setImageShown] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    console.log('called');
    registerObserver(imageRef.current, setImageShown);

    return () => {
      if (imageRef.current) {
        const obs = new IntersectionObserver(() => { });
        obs.disconnect();
      }
    }
  }, []);

  if (imageShown) {
    return <img src={src} alt={alt} className="image" />;
  }

  return <span ref={imageRef} className="image"></span>;
};

export default LazyImage;
