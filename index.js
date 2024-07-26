import { laptops } from "./src/JS/db.js";
import { filterGoods } from "./src/JS/filter.js";
import { renderGoods } from "./src/JS/renderGoods.js";
import { renderSelect } from "./src/JS/renderSelect.js";




document.addEventListener("DOMContentLoaded", ()=>{
    renderGoods(laptops);


    const uniqueProcessors = new Set();
    const uniqueRam = new Set();
    const uniqueSorage = new Set();
    const uniqueDisplay = new Set();
    const uniqueGraphics = new Set();


    laptops.forEach(
       ( {  specs: { processor, ram, storage, display, graphics } }) => {
        uniqueProcessors.add(processor);
        uniqueRam.add(ram);
        uniqueSorage.add(storage);
        uniqueDisplay.add(display);
        uniqueGraphics.add(graphics);
    }
);


    renderSelect(Array.from (uniqueProcessors),
         document.getElementById("processorFilter"));

         renderSelect(Array.from (uniqueRam),
         document.getElementById("ramFilter"));


         renderSelect(Array.from (uniqueSorage),
         document.getElementById("storageFilter"));

         renderSelect(Array.from (uniqueDisplay),
         document.getElementById("displayFilter"));


         renderSelect(Array.from (uniqueGraphics),
         document.getElementById("graphicsFilter"));


         document.querySelectorAll("select").forEach(link => {
             link.addEventListener("change", () => {
                 filterGoods(laptops);
             });
         });


            document.getElementById("priceFilter").addEventListener("input", () => {
                document.getElementById("priceValue").textContent = document.getElementById("priceFilter").value;
                filterGoods(laptops);
            });


            
 });

