create database statistic;
use statistic;

create table regions (
    id int AUTO_INCREMENT,
    country text,
    city text,
    number_of_stores int,
    primary key (id)
);

create table stores (
    id int AUTO_INCREMENT,
    name_ text,
    region int,
    number_of_items int,
    items int,
    foreign key (region) references regions(id),
    primary key (id)
);

create table items (
    id int AUTO_INCREMENT,
    name_of_item text,
    price float,
    cost_price float,
    profit float,
    stores_id int,
    is_exported boolean,
    is_imported boolean,
    foreign key (stores_id) references stores(id),
    primary key (id)
);

create table purchases (
    id int AUTO_INCREMENT,
    date_of_purchase date,
    item int,
    num_of_sales int,
    foreign key (item) references items(id),
    primary key (id)
);

create table countries (
    id int AUTO_INCREMENT,
    name_ text,
    number_of_items int,
    items int,
    foreign key (items) references items (id),
    primary key (id)
);

create table exports (
    id int AUTO_INCREMENT,
    date_of_export date,
    item int,
    quantity int,
    foreign key (item) references items(id),
    primary key (id)
);

create table orders (
    id int AUTO_INCREMENT,
    date_of_order date,
    item int,
    quantity int,
    country text,
    foreign key (item) references items(id),
    primary key (id)
);


