import './slider';
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
   'use strict';

   let modalState = {};
   let deadline = '2021-09-30';

   changeModalState(modalState);
   modals();
   tabs({
      headerSelector: '.glazing_slider',
      tabSelector: '.glazing_block',
      contentSelector: '.glazing_content',
      activeClassSelector: 'active',
   });
   tabs({
      headerSelector: '.decoration_slider',
      tabSelector: '.no_click',
      contentSelector: '.decoration_content > div > div',
      activeClass: 'after_click',
   });
   tabs({
      headerSelector: '.balcon_icons',
      tabSelector: '.balcon_icons_img',
      contentSelector: '.big_img > img',
      activeClass: 'do_image_more',
      display: 'inline-block',
   });
   forms(modalState);
   timer('.container1', deadline);
   slider();
});