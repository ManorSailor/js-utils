import { useEffect, useState } from 'react';

export default function ColorHooks() {
  const [color, setColor] = useState('black');

  useEffect(() => {
    const toggleClr = () =>
      setColor((color) => (color === 'black' ? 'red' : 'black'));

    document.addEventListener('click', toggleClr);

    return () => {
      document.removeEventListener('click', toggleClr);
    };
  }, [color]);

  return (
    <div>
      <div
        id="myDiv"
        style={{
          color: 'white',
          width: '100px',
          height: '100px',
          position: 'absolute',
          left: '50%',
          top: '50%',
          backgroundColor: color,
        }}
      >
        This div can change color. Click on me!
      </div>
    </div>
  );
}
