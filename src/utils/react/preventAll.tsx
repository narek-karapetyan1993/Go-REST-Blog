import React from "react";

export function preventAll<T extends (event: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(event: E) => {
    event.preventDefault();
    event.stopPropagation();
    fn(event);
  };
}
