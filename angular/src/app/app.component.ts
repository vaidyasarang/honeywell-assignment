import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  cart:boolean;
  category:boolean;
  display:boolean;
  home:boolean=true;
  productDisplay:any=[];
  categories:any=[{
    name:"fruits",
    products: ["banana", "apple"],
    newProduct: ""
  },{
    name:"stationary",
    products: ["pen", "rubber"],
    newProduct: ""
  }]

  cartValue:any=[];

  onSelect(category){
    this.productDisplay.length=0;
       console.log(category);
    let productDisplayTemp:any;
    productDisplayTemp=this.categories.filter(element=> element.name==category);
   this.productDisplay=productDisplayTemp;
   console.log(JSON.stringify(productDisplayTemp.products));
    this.display=true;
  }

  openCart(value){
    this.cart=value;
    this.display=false;
    this.category=false;
    this.home=false;
  }

  openHome(){
        this.home=true;
        this.cart=false;
          this.category=false;

  }
  addCategory(value){
    this.cart=false;
    this.display=false;
    this.category=true;
    this.home=false;
  }

  addCategory1(cat){
  console.log(cat);
  let category:any={
    name:cat,
    products: [],
    newProduct: ""
  }
  this.categories.push(category);
      alert("Category added successfully");

  }

  addToCart(product){
    this.cartValue.push(product);
    alert("Product added to cart successfully");

  }

  addProduct(product){
    console.log(product);
    for(let obj of this.categories){
      if(obj.name==product.name){
        if(product.newProduct!=""){
        obj.products.push(product.newProduct);
        }
      }
    }
    alert("Product added successfully");
  }

}
