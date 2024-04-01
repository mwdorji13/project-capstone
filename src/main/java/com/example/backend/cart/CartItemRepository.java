package com.example.backend.cart;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.product.Product;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    CartItem findByCartAndProduct(Cart cart, Product product);

    void deleteByCartAndProduct(Cart cart, Product product);
}
