import React from "react";
import { ItemCartTypes } from "../products/typesItemCart";
import { Product } from "../products/typesProduct";
import { useLocalStorage } from "./useLocalStorage";


const useFoodTruck = () => {
  const [username, setUsername] = React.useState("");
  const [storedValue, setStoredValue] = useLocalStorage('Food-Truck-V1', [])

  const [address, setAddress] = React.useState<string>('')
  const [cart, setCart] = React.useState<ItemCartTypes[]>([]);
  const [selectedImage, setSelectedImage] =
    React.useState<Product["image"]>("");
  const [inputAddressEditedValue, setInputAddressEditedValue] =
    React.useState<string>('');
  const [categoryBgState, setCategoryBgState] = React.useState('All')
  const deliveryFee = 40;

  React.useEffect(() => {
    setAddress(storedValue)
  }, [storedValue])
  React.useEffect(() => {
    setInputAddressEditedValue(storedValue)
  }, [])


  const parseCurrency = (value: number): string => {
    return value.toLocaleString("es-UY", {
      style: "currency",
      currency: "UYU",
    });
  };
  const [numItems, setNumItems] = React.useState<number>(10);
  const viewMore = () => {
    setNumItems(numItems + 10);
  };

  const subTotal = cart.reduce(
    (total: number, e: ItemCartTypes) => total + e.total,
    0
  );
  const totalItemsCart = cart.reduce(
    (total: number, e: ItemCartTypes) => total + e.count,
    0
  );

  const text = React.useMemo(() => {
    return cart
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
        \nDireccion: ${address}
        `
      );
  }, [cart, address]);
  const handleAddToCart = (product: Product, count?: number) => {
    const newItem = {
      ...product,
      id: (Math.random() * 1000).toString(),
      count: count || 1,
      total: (count || 1) * product.price,
    };
    setCart((cart: any) => cart.concat(newItem));
  };

  const onDelete = (id: ItemCartTypes["id"]) => {
    setCart((cart) => cart.filter((e) => e.id !== id));
  };

  return {
    cart,
    selectedImage,
    setSelectedImage,
    inputAddressEditedValue,
    setInputAddressEditedValue,
    deliveryFee,
    viewMore,
    subTotal,
    totalItemsCart,
    text,
    handleAddToCart,
    onDelete,
    parseCurrency,
    numItems,
    username,
    setUsername,
    address,
    setAddress,
    storedValue,
    setStoredValue,
    categoryBgState,
    setCategoryBgState,
  };
};

export { useFoodTruck };
