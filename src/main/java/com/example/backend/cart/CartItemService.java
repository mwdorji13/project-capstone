package com.example.backend.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.product.Product;

@Service
class CartItemService {
    @Autowired
    private CartItemRepository cartItemRepository;

    public CartItem addItemToCart(Cart cart, Product product, int quantity) {
        CartItem cartItem = cartItemRepository.findByCartAndProduct(cart, product);

        if (cartItem != null) {
            cartItem.setQuantity(cartItem.getQuantity() + quantity);
        } else {
            cartItem = new CartItem();
            cartItem.setCart(cart);
            cartItem.setProduct(product);
            cartItem.setQuantity(quantity);
        }

        return cartItemRepository.save(cartItem);
    }

    public void removeItemFromCart(Cart cart, Product product) {
        cartItemRepository.deleteByCartAndProduct(cart, product);
    }

    public CartItem updateCartItemQuantity(CartItem cartItem, int quantity) {
        cartItem.setQuantity(quantity);
        return cartItemRepository.save(cartItem);
    }
}
