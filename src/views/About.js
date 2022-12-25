import React from "react"

import Navbar from "../components/Navbars/AuthNavbar.js";
import Footer from "../components/Footers/Footer.js";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function About(){


    return(<>
    <Navbar transparent />
    <main>
    <div className="relative pt-16 pb-16 flex content-center items-center justify-center" style={{minHeight:"45vh"}}>
        <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
        <h1 className="font-semibold text-4xl">
                        About
                  </h1>
                  </div>
                  </div>
                  </div>
        </div>
    </div>
    <section className="pt-5 pb-48">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                        <img alt="..."
                   src={`${SERVER_URL}/images/coins.jpg`}
                    className="shadow-lg mx-auto max-w-12-em"/>
                        <div className="pt-2 text-center">
                        First
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                        <img alt="..."
                   src={`${SERVER_URL}/images/coins.jpg`}
                    className="shadow-lg mx-auto max-w-12-em"/>
                        <div className="pt-2 text-center">
                        First
                        </div>
                    </div>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-4/12 lg:mb-0 mb-12 px-4">
                    <div className="px-6">
                        <img alt="..."
                   src={`${SERVER_URL}/images/coins.jpg`}
                    className="shadow-lg mx-auto max-w-12-em"/>
                        <div className="pt-2 text-center">
                        First
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    </section>
    </main>
    <Footer/>
    </>)
}