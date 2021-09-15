import { Product } from "./product.model";

export class SimpleDataSource{
  private products:Product[];
  constructor(){
    this.products = new Array<Product>(
      new Product(1,"Samsung S5","İyi Telefon","1.jpg",1000),
      new Product(2,"Samsung S6","İyi Telefon","2.jpg",1300),
      new Product(3,"Samsung S7","İyi Telefon","3.jpg",1600),
      new Product(4,"IPhone 7","İyi Telefon","4.jpg",1900),
      new Product(5,"IPhone 8","İyi Telefon","5.jpg",2100)
    );
  }
  getProducts():Product[]{
    return this.products;
  }
}
