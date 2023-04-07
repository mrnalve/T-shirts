/*
 1. create context and export
 2. Create a provider and pass a value
 3. use useContext to receive a value
*/

import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
  const [money, setMoney] = useState(0);
  return (
    <div className="grandpa">
      <h3>Grandpa</h3>
      <p>has money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="Diamond">
          <section className="flex">
            <Father></Father>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
