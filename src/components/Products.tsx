"use client";

import { useState, useEffect } from 'react';
import { getProducts } from "@/helpers";
import React from 'react';
import Container from "./Container";
import ProductsData from "./ProductsData"
import { Productss } from "../../types";

const Products = () => {
    const [products, setProducts] = useState<Productss[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProducts();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    }, []);


    return (
        <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
            {
                products?.map((item: Productss) => (
                    <ProductsData item={item} key={item._id} />
                ))
            }
        </Container>
    );

};


export default Products;
