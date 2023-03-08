import axios from "axios";
import { Product } from "./types";
import Papa from 'papaparse';

export default {
  list: (): Promise<Product[]> => {
    return axios
      .get('https://docs.google.com/spreadsheets/d/e/2PACX-1vSX2iMhFOugeKDZsRTz_a-SQxkcbuso6idmURO5oIE6NeYngzJN969zmX_KoxN_ObVUV5bpYRmR2luE/pub?output=csv',
        {
          responseType: 'blob'
        }
      )
      .then((response) => new Promise<Product[]>((resolve, reject) => {
        Papa.parse(response.data, {
          header: true,
          complete: results => {
            const products = results.data as Product[];
            return resolve(
              products.map(product => ({
                ...product,
                price: Number(product.price)
              }))
            );
          },
          error: error => reject(error.message)
        })
      })
      )
  }
}