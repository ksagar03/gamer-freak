import React, { useEffect, useState } from "react";
import { useStateValue } from "./StateProvider";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  getDoc,
  collection,
  orderBy,
  onSnapshot,
  query,
  getDocs,
  doc,
  collectionGroup,
} from "firebase/firestore";
import Ordersview from "./Ordersview";
import Navbar from "./Navbar";

const Order = () => {
  const navgate = useNavigate();
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
        const tofetch = collection(userDocs, "orders");
        console.log(tofetch);
        // const q=  query(tofetch, orderBy("created", "desc") )
        try {
          const fetchdata = await getDocs(tofetch, orderBy("created", "desc"));
          console.log(fetchdata);
          // query(
          //   fetchdata,
          //   orderBy("created", "desc"),
          // onSnapshot(fetchdata, (snapshot) =>
          //     setYourOrders(
          //       snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          //     )
          //   )
          // );

          setYourOrders(
            fetchdata.docs.map((values) => ({
              id: values.id,
              data: values.data(),
            }))
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
  // console.log("user orders", yourOrders);
  return (
    <div className="container-fluid">
      {/* <Navbar/> */}
      <h1 className="mt-5">
        {user
          ? ` ${user?.displayName} Your Orders`
          :"Please login to view your order"}
      </h1>
      <hr />
      {user && yourOrders.map((order) => <Ordersview order={order} />)}
    </div>
  );
};

export default Order;
