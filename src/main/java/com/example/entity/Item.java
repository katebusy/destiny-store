package com.example.entity;

import java.time.OffsetDateTime;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table("items")
@Data
@Builder
@AllArgsConstructor
public class Item {

  @Id
  private final UUID id;
  @Builder.Default
  private final OffsetDateTime createdAt = OffsetDateTime.now();
  @Builder.Default
  private final OffsetDateTime updatedAt = OffsetDateTime.now();

  private final String type;
  private final String name;
  private final String quoteText;
  private final String quoteAuthor;
  private final Double price;
  private final String material;
  private final String color;
}

