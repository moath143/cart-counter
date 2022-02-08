import React, { useState, useCallback } from "react";
import CounterItem from "../../components/counterItem";
import { initialData } from "../../lib/helpers/initData";
import "./CartCounter.css";

// Array

const numberOfCounter = [1, 2, 3];

const CartCounteter = () => {
  const [counterItem, setCounterItem] = useState(initialData);

  const increment = useCallback(
    (id) => {
      setCounterItem((counterItem) => {
        const incrementData = {
          ...counterItem,
          total:
            counterItem.item[id].count < 1
              ? counterItem.total + 1
              : counterItem.total,
          item: {
            ...counterItem.item,
            [id]: {
              ...counterItem.item.id,
              count: counterItem.item[id].count + 1,
            },
          },
        };
        return incrementData;
      });
    },
    [counterItem]
  );
  const decrement = useCallback(
    (id) => {
      setCounterItem((countItem) => {
        const decrementData = {
          ...countItem,
          total:
            counterItem.item[id].count === 1
              ? counterItem.total - 1
              : counterItem.total,
          item: {
            ...counterItem.item,
            [id]: {
              ...counterItem.item.id,
              count: counterItem.item[id].count - 1,
            },
          },
        };
        return decrementData;
      });
    },
    [counterItem]
  );
  const resetCounter = useCallback(() => {
    setCounterItem(() => {
      const resetData = {
        ...counterItem,

        total: 0,
        item: {
          ...counterItem.item,
          1: {
            count: 0,
          },
          2: {
            count: 0,
          },
          3: {
            count: 0,
          },
        },
      };
      return resetData;
    });
  }, [counterItem]);

  return (
    <div className="counter-app">
      <header>
        <h1>total: {counterItem.total}</h1>
        <button className="reset" onClick={resetCounter}>
          reset
        </button>
      </header>
      {numberOfCounter &&
        numberOfCounter.map((number) => {
          return (
            <CounterItem
              increment={increment}
              decrement={decrement}
              resetCounter={resetCounter}
              counterItem={counterItem.item[number].count}
              key={number}
              id={number}
            />
          );
        })}
    </div>
  );
};

export default CartCounteter;
