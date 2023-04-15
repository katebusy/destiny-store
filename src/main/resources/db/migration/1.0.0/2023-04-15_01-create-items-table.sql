create extension if not exists "uuid-ossp";

create table items
(
    id           uuid primary key                  default uuid_generate_v4(),
    created_at   timestamp with time zone not null default now(),
    updated_at   timestamp with time zone not null default now(),
    type         text,
    name         text,
    quote_text   text,
    quote_author text,
    price        numeric(12, 2),
    material     text,
    color        text
);

insert into items (type, name, quote_text, quote_author, price, material, color)
VALUES ('Футболка', 'Hunter', 'Грань между Светом и Тьмой очень тонка. Ты знаешь, на какой ты стороне?',
        'Ульдрен Сов', 1200.00, 'хлопок 60%, полиэстр 40%', 'Белый'),
       ('Футболка', 'Titan', 'Этот охотник раскатал губу. Надеюсь, у него есть запасная.',
        'Лорд Шакс', 1200.00, 'хлопок 60%, полиэстр 40%', 'Белый'),
       ('Футболка', 'Warlock', 'Свет - это твое величайшее оружие, Страж!',
        'Икора Рей', 1200.00, 'хлопок 60%, полиэстр 40%', 'Белый'),
       ('Футболка', 'Titan', 'Если мы нападём все вместе, то можем разом вернуть наш дом — или погибнем с честью.',
        'Командор Завала', 1200.00, 'хлопок 60%, полиэстр 40%', 'Белый'),
       ('Футболка', 'Warlock', 'Тьма сгущается, друзья мои! И мы — единственная надежда Земли!',
        'Икора Рей', 1200.00, 'хлопок 60%, полиэстр 40%', 'Белый'),
       ('Футболка', 'Hunter', 'Преданность делает храбрым. Храбрость делает жертвенным. Жертвенность ведёт к смерти.',
        'Глашатай Странника', 1200.00, 'хлопок 60%, полиэстр 40%', 'Черный');

commit;
