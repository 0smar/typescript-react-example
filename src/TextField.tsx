import React, { useState, useRef } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok?: boolean; //Optional props are marked with the ? at the end.
  i?: number;
  fn?: (test: string) => string;
  person: Person
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<Props> = ({text}) => {
  // We use <> to define the types of the state so is explicit declared instead of inferred. useState<number | null | undefined> but it can take objects or interfaces as well.

  const [count, setCount] = useState<TextNode>({text: 'Test'});

  // useRef need to know the type of the element it refers to.
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input type="text" value={text} ref={inputRef}/>
    </div>
  )
};