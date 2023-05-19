import React from "react";
import { ItemCartTypes } from "../products/typesItemCart";
import { Product } from "../products/typesProduct";
import { User } from "../products/typeUser";
import { useLocalStorage } from "./useLocalStorage";


const useFoodTruck = () => {
  const [textAddress, setTextAddress] = React.useState<User['address']>('');
  const [localUser, setLocalUser] = useLocalStorage('Food-Truck-V1', { user: '', address: '' });

  const [cart, setCart] = React.useState<ItemCartTypes[]>([]);
  const [selectedImage, setSelectedImage] =
    React.useState<Product["image"]>("");
  const [categoryBgState, setCategoryBgState] = React.useState('All')
  const deliveryFee = 40;

  React.useEffect(() => {
    setTextAddress(localUser.address)
  }, [textAddress, localUser, setLocalUser, setTextAddress])

  const parseCurrency = (value: number): string => {
    return value.toLocaleString("es-UY", {
      style: "currency",
      currency: "UYU",
    });
  };
  const [numItems, setNumItems] = React.useState<number>(10);

  const subTotal = cart.reduce(
    (total: number, e: ItemCartTypes) => total + e.total,
    0
  );
  const totalItemsCart = cart.reduce(
    (total: number, e: ItemCartTypes) => total + e.count,
    0
  );
  const [text, setText] = React.useState('');
  React.useEffect(() => {
    setText(cart
      .reduce(
        (message, product) =>
          message.concat(
            `* ${product.title} - ${parseCurrency(product.price)}\n`
          ),
        ""
      )
      .concat(
        `\nTotal: ${parseCurrency(
          cart.reduce((total, product) => total + product.price, 0)
        )}
        \nDireccion: ${textAddress}
        `
      ));
    console.log(text)
  }, [cart, textAddress]);
  const handleAddToCart = (product: Product, count?: number) => {
    //revisar
    const index = cart.findIndex((p: Product) => p.title === product.title)
    if (index !== -1) {
      const updatedCart = cart
      updatedCart[index].count += count || 1;
      updatedCart[index].total = updatedCart[index].count * product.price;
    } else {
      const newItem = {
        ...product,
        id: (Math.random() * 1000).toString(),
        count: count || 1,
        total: (count || 1) * product.price,
      };
      setCart((cart: any) => cart.concat(newItem));
    }
  };

  const onDelete = (id: ItemCartTypes["id"]) => {
    setCart((cart) => cart.filter((e) => e.id !== id));
  };

  return {
    cart,
    selectedImage,
    setSelectedImage,
    deliveryFee,
    subTotal,
    totalItemsCart,
    text,
    handleAddToCart,
    onDelete,
    parseCurrency,
    numItems,
    setNumItems,
    categoryBgState,
    setCategoryBgState,
    setTextAddress,
  };
};

export { useFoodTruck };
