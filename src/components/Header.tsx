"use client";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { BsBookmarks } from "react-icons/bs"
import FormattedPrice from "./FormattedPrice";
import { IoIosSearch } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect, } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateProps, Productss } from "../../types";
import { addUser, deleteUser } from "@/redux/shoppingSlice";


const Header = () => {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { productData, orderData } = useSelector((state: StateProps) => state?.shopping);
  console.log(orderData);

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    } else {
      dispatch(deleteUser());
    }
  }, [session, dispatch]);  



  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData.map((item: Productss) => {
      amt += item.price * item.quantity
      return
    })
    setTotalAmt(amt);
  }, [productData]);

  return (
    <div className="bg-bodyColor h-20">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-star">
        <Logo />
        {/* Search Field */}
        <div className="w-full bg-white hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
          <IoIosSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search for products"
            className="placeholder:text-sm flex-1 outline-none"
          />
        </div>
        {/* Login Register*/}
        {!session && (
          <div onClick={() => signIn()} className="headerDiv cursor-pointer">
            <LuUser2 />
            <p className="text-sm font-semibold">Login/Register</p>
          </div>
        )}
        {/* Cart button */}
        <Link href= {"/cart"}>
          <div className="bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
            <BsCart className="text-xl" />
            <p className="text-sm font-semibold"><FormattedPrice amount={totalAmt ? totalAmt : 0} /></p>
            <span className="bg-white text-orange-600 rounded-full text-xs font-semibold absolute -right-2 -top-1 w-5 h-5 flex item-center justify-center shadow-black">
              {productData ? productData?.length : 0}
            </span>
          </div>
        </Link>
        {/* user image */}
        {session && (
          <img
            src={session?.user?.image as string}
            alt="user Image"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
        )}
        {/* Order button */}
        {
          orderData?.order?.length > 0 && session && (
            <Link href={"/order"} className="headerDiv px-2 gap-x-1 cursor-pointer">
              <BsBookmarks className="text-2xl" />
              <p className="text-sm font-semibold">Orders</p>
            </Link>
          )
        }
        {/* Logout button */}
        {session && (
          <div
            onClick={() => signOut()}
            className="headerDiv px-2 gap-x-1 cursor-pointer"
          >
            <FiLogOut className="text-2xl" />
            <p className="text-sm font-semibold">Logout</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Header;
