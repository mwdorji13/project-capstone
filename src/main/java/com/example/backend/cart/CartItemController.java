package com.example.backend.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart/items")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    @PostMapping("/add")
    public ResponseEntity<CartItem> addItemToCart(@RequestBody CartItem cartItem) {
        CartItem addedCartItem = cartItemService.addItemToCart(cartItem.getCart(), cartItem.getProduct(), cartItem.getQuantity());
        return ResponseEntity.ok(addedCartItem);
    }

    @DeleteMapping("/remove")
    public ResponseEntity<Void> removeItemFromCart(@RequestBody CartItem cartItem) {
        cartItemService.removeItemFromCart(cartItem.getCart(), cartItem.getProduct());
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/update")
    public ResponseEntity<CartItem> updateCartItemQuantity(@RequestBody CartItem cartItem) {
        CartItem updatedCartItem = cartItemService.updateCartItemQuantity(cartItem, cartItem.getQuantity());
        return ResponseEntity.ok(updatedCartItem);
    }
}
