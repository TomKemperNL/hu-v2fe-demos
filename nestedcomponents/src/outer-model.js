export default class OuterModel {
    message = "Hello World"
    innerModels = [];

    constructor(inners){
        this.innerModels = inners || [];
        
    }
}