import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import data from "../../assets/data/testData";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any[] = data;
  brandNames:any[] = [];
  allBrandNames:any[] = [];
  productTypes:any[] = [];
  selectedBrandName:string;
  selectedProductType:string;
  selectedType:string;
  displayedColumns: string[] = ['ModelNumber', 'ModelName'];
  dataSource = new MatTableDataSource<any>();

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedBrandName = this.route.snapshot.queryParamMap.get('BrandName');
    this.selectedProductType = this.route.snapshot.queryParamMap.get('ProductType');
    if(this.selectedBrandName && this.selectedProductType){
      this.filterProducts(this.selectedBrandName, this.selectedProductType);
    }
    if(this.selectedProductType){
      this.filterProducts(this.selectedBrandName, this.selectedProductType);
    }
    this.getBrandNames(this.products);
    this.getProductTypes(this.products);
  }

  getBrandNames(products){
    products.forEach(product => {
      this.brandNames.push(product.BrandName)
    });
  }
  getProductTypes(products){
    products.forEach(product => {
      product.BrandProducts.forEach(type => {
        if(this.allBrandNames.indexOf(type.ProductType) < 0){
          this.allBrandNames.push(type.ProductType)
        }
      });
    });
  }

  getTypeNames(products){
    products.forEach(product => {
      if(this.productTypes.indexOf(product.ProductType) < 0 ){
        this.productTypes.push(product.ProductType)
      }
    });
  }

  onBrandSelect(){
    let products = this.products.filter( p => p.BrandName === this.selectedBrandName );
    this.getTypeNames(products[0].BrandProducts);
  }

  onTypeSelect(){
    this.router.navigate(['/products'],{queryParams:{BrandName:this.selectedBrandName, ProductType:this.selectedProductType}})
    this.filterProducts(this.selectedBrandName, this.selectedProductType);    
    this.selectedType = null;
  }
  onOnlyTypeSelect(type){
    this.router.navigate(['/products'],{queryParams:{ProductType:type}})
    this.filterProducts(undefined, type);
    this.selectedBrandName =null;
    this.selectedProductType =null;
  }

  filterProducts(brandName,productType){
    let productsByBrand = [];

    this.products.forEach( product => {
      if(brandName && product.BrandName === brandName){
        productsByBrand = productsByBrand.concat(product.BrandProducts)
      }else if(!brandName){
        productsByBrand = productsByBrand.concat(product.BrandProducts)
      }
    })
    let productsByType = productsByBrand.filter( product => product.ProductType === productType);
    this.dataSource = new MatTableDataSource<any>(productsByType)

  }

}
