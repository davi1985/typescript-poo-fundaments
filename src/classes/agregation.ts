export class Cart {
  private readonly _products: Product[] = [];

  add(...products: Product[]): void {
    for (const product of products) {
      this._products.push(product);
    }
  }

  itemsQuantity(): number {
    return this._products.length;
  }

  totalAmount(): number {
    return this._products.reduce(
      (amount, product) => amount + product.price,
      0
    );
  }

  public get products(): void {
    for (const product of this._products) {
      console.log("Product:", product.name, " Price:", product.price);
    }

    return;
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

// example
const product1 = new Product("T-Shirt", 49.9);
const product2 = new Product("Mouse", 29.9);
const product3 = new Product("Phone", 69.9);

const cart = new Cart();

cart.add(product1, product2, product3);

console.log(cart.products);

console.log("Products quantity:", cart.itemsQuantity());
console.log("Cart total:", cart.totalAmount().toFixed(2));
