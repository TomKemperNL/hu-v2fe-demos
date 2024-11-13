import InnerModel from "./inner-model";
import OuterModel from "./outer-model";

let outer = document.querySelector('#outer');

let model = new OuterModel([
    new InnerModel("Tom", 41),
    new InnerModel("Zoe", 11)
]);

model.message = "Dit zijn wij!"

outer.model = model;
outer.addEventListener('test-event', e => {
    console.log("outside", e);
})