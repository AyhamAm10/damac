import { useEffect, useState } from "react";


type countProps = {
    targetValue: number
}


const Counter:React.FC<countProps> = ({ targetValue }) => {
    const [value, setValue] = useState<number>(0);
  
    useEffect(() => {
      let startValue = 0;
      const duration = 1000; 
      const increment = targetValue / (duration / 10); 
      const interval = setInterval(() => {
        startValue += increment;
        if (startValue >= targetValue) {
          setValue(targetValue); 
          clearInterval(interval);
        } else {
          setValue(Math.ceil(startValue)); 
        }
      }, 10); 
  
      return () => clearInterval(interval);
    }, [targetValue]);
  
    return <span>{value}</span>;
  };

export default Counter