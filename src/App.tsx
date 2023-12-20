import { Person } from './Types';

const MyComponent: React.FC = () => {
  
  const stringValue: string = 'Hello';
  const numberValue: number = 42;
  const booleanValue: boolean = true;
  const personObject: Person = {
    name: 'John Doe',
    age: 25,};

  const myFunction = (param1: string, param2: number): boolean => {
    return param1.length === param2;
  };
  const logPersonInfo = (person: Person): void => {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  };
  
  logPersonInfo(personObject);

  return (
    <div>
      <p>{stringValue}</p>
      <p>{numberValue}</p>
      <p>{booleanValue ? 'True' : 'False'}</p>

     
      <p>{myFunction('abc', 3)}</p>
    </div>
  );
};

export default MyComponent;
