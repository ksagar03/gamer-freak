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
  doc,
} from "firebase/firestore";

const Order = () => {
  const [{ Cart, user }] = useStateValue();
  // let getordercollection = collection(db, "users")
  const [yourOrders, setYourOrders] = useState([]);
  useEffect(() => {
    const tofetchdata = async () => {
      if (user) {
        // let getordercollection = (
        //   getDocs(collection(db, "users")),
        //   "orders"
        // );
        const usercollecion = collection(db, "users");
        const userDocs = doc(usercollecion, user?.uid);
        try {
          const fetchdata = await getDocs(userDocs, "orders");
          query(
            fetchdata,
            orderBy("created", "desc"),
            onSnapshot(fetchdata, (snapshot) =>
              setYourOrders(
                snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
              )
            )
          );
        } catch (error) {
          console.log(error);
        }

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
    };
    tofetchdata();
  }, [user]);
  console.log("user orders", yourOrders);
  return (
    <>
      <h2>Review your order</h2>
    </>
  );
};

export default Order;
