// src/App.tsx

import { MyComponentProps } from './Types';
import { Person } from './Types';

const MyComponent: React.FC = () => {
  
  const stringValue: string = 'Hello';
  const numberValue: number = 42;
  const booleanValue: boolean = true;


  const myFunction = (param1: string, param2: number): boolean => {
    return param1.length === param2;
  };

  return (
    <div>
      <p>{stringValue}</p>
      <p>{numberValue}</p>
      <p>{booleanValue ? 'True' : 'False'}</p>

      {/* Call the function */}
      <p>{myFunction('abc', 3)}</p>
    </div>
  );
};

export default MyComponent;
