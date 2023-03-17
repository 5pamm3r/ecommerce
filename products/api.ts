import axios from "axios";
import { Product } from "./typesProduct";
import Papa from "papaparse";

export default {
  list: (): Promise<Product[]> => {
    return axios
      .get(`${process.env.API_URL}`, {
        responseType: "blob",
      })
      .then(
        (response) =>
          new Promise<Product[]>((resolve, reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => {
                const products = results.data as Product[];
                return resolve(
                  products.map((product) => ({
                    ...product,
                    price: Number(product.price),
                  }))
                );
              },
              error: (error) => reject(error.message),
            });
          })
      );
  },
};
