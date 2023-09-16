import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export let WishContext = createContext(0);

export default function WishContextProvider(props) {
  let [wishData, setWishData] = useState([]);
  let [changing, setchanging] = useState(false);
  let headers = { token: localStorage.getItem("userInfo") };

  let wishing = async (elem, productID) => {
    let element = elem.target;
    if (elem.target.children[0]) {
      element = elem.target.children[0];
    }
    if (element.classList.contains("fa-regular")) {
      element.classList.replace("fa-regular", "fa-solid");
      element.classList.add("fa-beat");
      await postWish(productID);
    } else {
      element.classList.replace("fa-solid", "fa-regular");
      element.classList.remove("fa-beat");
      deleteWish(productID);
    }
  };

  let getWishinglist = async () => {
    let { data } = await axios
      .get("https://route-ecommerce.onrender.com/api/v1/wishlist", {
        headers,
      })
      .catch((err) => {})
      .then((res) => res);
    setWishData(data?.data);
    console.log("from wish");
  };

  let postWish = async (id) => {
    setchanging(true);
    let { data } = await axios
      .post(
        "https://route-ecommerce.onrender.com/api/v1/wishlist",
        {
          productId: id,
        },
        { headers }
      )
      .catch((err) => {})
      .then((res) => res);
    setWishData(data.data);
    setchanging(false);
  };

  let deleteWish = async (id) => {
    setchanging(true);
    let { data } = await axios
      .delete("https://route-ecommerce.onrender.com/api/v1/wishlist/" + id, {
        headers,
      })
      .catch((err) => {})
      .then((res) => res);

    setWishData(data.data);
    setchanging(false);
  };

  useEffect(() => {
    getWishinglist();
  }, []);

  useEffect(() => {
    getWishinglist();
  }, [changing]);
  return (
    <WishContext.Provider value={{ wishing, wishData, changing, getWishinglist }}>
      {props.children}
    </WishContext.Provider>
  );
}