import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import { db } from "../firebase";
import {
  getDoc,
  collection,
  orderBy,
  onSnapshot,
  query,
  getDocs,
  collectionGroup,
} from "firebase/firestore";

const Order = () => {
  const [{ Cart, user }] = useStateValue();
  // let getordercollection = collection(db, "users")
  const [yourOrders, setYourOrders] = useState([]);
  useEffect(() => {
    if (user) {
      let getordercollection = collectionGroup(
        getDocs(collection(db, "users")),
        "orders"
      );
      query(
        getordercollection,
        orderBy("created", "desc"),
        onSnapshot((snapshot) =>
          setYourOrders(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        )
      );
      // db.collection("users")
      //   .doc(user?.uid)
      //   .collection("orders")
      //   .orderBy("created", "desc")
      //   .onSnapshot((snapshot) =>
      //     setYourOrders(
      //       snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      //     )
      //   );
      // const getdata = async () =>{
      //  let getordercollection=collection(getDoc(collection(db ,"users")), "orders")
      // }
    } else {
      setYourOrders([]);
    }
  }, [user]);
  console.log("user orders", yourOrders);
  return (
    <>
      <h2>Review your order</h2>
    </>
  );
};

export default Order;
