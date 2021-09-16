import { SimpleDataSource } from "src/app/datasource.model";
import { Product } from "src/app/product.model";

export class ProductRepository{
  private dataSource:SimpleDataSource;
  private products:Product[];
  constructor(){
    this.dataSource= new SimpleDataSource();
    this.products = new Array<Product>();
    this.dataSource.getProducts().forEach(p =>this.products.push(p));
  }
  getProducts():Product[]{
    return this.products;
  }
  getProductById(id:number){
    return this.products.find(p=>p.id === id);
  }
}
