package com.example.controller;

import com.example.entity.Item;
import com.example.repository.ItemsRepository;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class ItemsController {

  private static final String ITEMS = "/api/v1/items";
  private static final String ITEM_BY_ID = ITEMS + "/{id}";

  private final ItemsRepository itemsRepository;

  @GetMapping(ITEM_BY_ID)
  public ResponseEntity<Item> getItemById(@PathVariable(value = "id") UUID id) {
    var item = itemsRepository.findById(id)
        .orElseThrow(() -> new IllegalArgumentException("Item not found by id=" + id));
    return ResponseEntity.ok(item);
  }

  @GetMapping(ITEMS)
  public ResponseEntity<Iterable<Item>> getAllItems() {
    return ResponseEntity.ok(itemsRepository.findAll());
  }
}
