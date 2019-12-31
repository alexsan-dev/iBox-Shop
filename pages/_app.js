import React from "react";
import App from "next/app";
import Splash from '../components/Splash';
import Layout from '../layouts/Layout';
import { AnimatePresence } from 'framer-motion';
//import { darkMode } from '../utils/functions';
import { useDB } from '../utils/hooks';
import '../assets/icons/material-icons.css';
import '../styles/ibox-wavy.css';
import '../assets/icons/style.css';

export default class extends App {
   componentDidMount() {
      const splash = document.getElementById("splash");

      window.onload = () => {
         setTimeout(() => {
            splash.style.opacity = 0;
            setTimeout(() => splash.style.display = "none", 300);
         }, 1500);
      }

      useDB();
      // COLORTHEME
      // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) darkMode(document);
   }

   render() {
      const { Component, pageProps, router } = this.props;
      return (
         <>
            <Splash />
            <Layout>
               <AnimatePresence exitBeforeEnter>
                  <Component {...pageProps} key={router.route} />
               </AnimatePresence>
            </Layout>
         </>
      )
   }
}
