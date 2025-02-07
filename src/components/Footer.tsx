import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/searchBar";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D0D0D] flex flex-col items-center pt-12">
      {/* Main Footer Content */}
      <div className="w-full px-4 md:w-[1169px] flex flex-col md:flex-row items-center justify-center">
        <h2 className="text-[24px] md:text-[32px] leading-[30px] md:leading-[40px] text-[#FF9F0D] text-center">
          Still finding for delicious taste?
          <p className="text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#FFFFFF] mt-2">
            Order Now... Hurry!
          </p>
        </h2>

      </div>

      <div className="h-[1px] w-full md:w-[1169px] mt-6 mb-10"><SearchBar /></div>

      {/* Contact Details Section */}
      <div className="w-full px-4 md:w-[1320px] mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-2 border-white rounded">
        {/* Contact Details */}
        <div id="shop-details">
          <h3 className="text-[20px] leading-[28px] text-[#FFFFFF] font-bold pt-4">
            Shop & Contact Details.
          </h3>
          <address className="text-[16px] leading-[24px] text-[#FFFFFF] mt-4 ">
            <span>Phone: </span>0313-8069868 <br />
            <span>WhatsApp: </span>0313-8069868 <br />
            <span>Email: </span>muhammadkashif628@gmail.com <br />
            <span>Address: </span>Saddar Near Renbow Center, Karachi.
          </address>
          <div className="flex mt-6 pb-4">
            <Image
              src="/images/logo.jpeg"
              alt="pizza logo"
              width={77.23}
              height={70.79}
            />
            <div className="ml-4 text-[#FFFFFF]">
              <p className="text-[18px] leading-[26px]">Opening Hours</p>
              <p className="text-[14px] leading-[22px]">
                Mon - Sat (11:00 AM to 2:00 AM)
              </p>
              <p className="text-[14px] leading-[22px]">Sunday - Open</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="mt-6 md:mt-0 pt-4">
          <h3 className="text-[20px] leading-[28px] text-[#FFFFFF] font-bold">
            Linked Pages.
          </h3>
          <div className="flex flex-col space-y-4 mt-4">
          <Link
              href="/about"
              className="text-[16px] leading-[24px] text-[#FFFFFF]"
            >
              About
            </Link>
            <Link
              href="/chefs"
              className="text-[16px] leading-[24px] text-[#FFFFFF]"
            >
              Our-Chef
            </Link>
            <Link
              href="/food"
              className="text-[16px] leading-[24px] text-[#FFFFFF]"
            >
              Menu
            </Link>
            <Link
              href="Team"
              className="text-[16px] leading-[24px] text-[#FFFFFF]"
            >
              Team
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-6 md:mt-0 pt-4">
          <h3 className="text-[20px] leading-[28px] text-[#FFFFFF] font-bold">
            Help ?
          </h3>
          <div className="flex flex-col space-y-4 mt-4">
          <Link
              href="/FAQ"
              className="text-[16px] leading-[24px] text-[#FFFFFF]"
            >
              FAQ
            </Link>
            <Link
              href="Terms&Condition"
              className="text-[16px] leading-[24px] text-[#FFFFFF]"
            >
              Terms & Condition
            </Link>
            <Link
              href="Reporting"
              className="text-[16px] leading-[24px] text-[#FFFFFF]"
            >
              Reporting
            </Link>
            <Link
              href="Documentation"
              className="text-[16px] leading-[24px] text-[#FFFFFF]"
            >
              Documentation
            </Link>
            <Link
              href="SupportPolicy"
              className="text-[16px] leading-[24px] text-[#FFFFFF]"
            >
              Support Policy
            </Link>
            <Link
              href="Privacy"
              className="text-[16px] leading-[24px] text-[#FFFFFF]"
            >
              Privacy
            </Link>
          </div>
        </div>

        {/* Recent Post */}
        <div className="pt-4">
          <h3 className="text-[20px] leading-[28px] text-[#FFFFFF] font-bold">
            Recent Post
          </h3>
          {/* Post 1 */}
          <div className="flex mt-4">
            <Image
              src="/images/unsplash1.png"
              alt="unsplash1"
              width={60}
              height={60}
            />
            <div className="ml-4">
              <p className="text-[16px] leading-[24px] text-white">
                Is fastfood good for your body?
              </p>
              <p className="text-[14px] leading-[22px] text-gray-400">
                February 28, 2022
              </p>
            </div>
          </div>
          {/* Post 2 */}
          <div className="flex mt-4">
            <Image
              src="/images/unsplash2.png"
              alt="unsplash2"
              width={60}
              height={60}
            />
            <div className="ml-4">
              <p className="text-[16px] leading-[24px] text-white">
                Change your food habit with organic food
              </p>
              <p className="text-[14px] leading-[22px] text-gray-400">
                February 28, 2022
              </p>
            </div>
          </div>
          {/* Post 3 */}
          <div className="flex mt-4">
            <Image
              src="/images/unsplash3.png"
              alt="unsplash3"
              width={60}
              height={60}
            />
            <div className="ml-4">
              <p className="text-[16px] leading-[24px] text-white">
                Do you like fastfood for your life?
              </p>
              <p className="text-[14px] leading-[22px] text-gray-400">
                February 28, 2022
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-white py-4 mt-12 w-full text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} GulKashi-Food-Hub. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
