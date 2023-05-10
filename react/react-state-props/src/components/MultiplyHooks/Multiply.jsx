import { useState, useEffect, useRef } from 'react';

export default function MultiplyHooks({ multiplicand }) {
  const timer = useRef();
  const [multiplier, setMultiplier] = useState(1);

  if (multiplier >= 10) {
    clearInterval(timer.id);
  }

  useEffect(() => {
    const increaseMultiplier = () =>
      setMultiplier((multiplier) => multiplier + 1);

    clearInterval(timer.id);
    setMultiplier(1);
    timer.id = setInterval(increaseMultiplier, 1000);

    return () => clearInterval(timer.id);
  }, [multiplicand]);

  return (
    <div>
      {multiplicand} * {multiplier} = {multiplicand * multiplier}
    </div>
  );
}
