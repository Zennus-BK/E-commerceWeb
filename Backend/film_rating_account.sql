use film_rating;
create table account
(
    id            int auto_increment
        primary key,
    avatar        varchar(255) null,
    date_of_birth datetime(6)  null,
    email         varchar(50)  not null,
    full_name     varchar(50)  null,
    password      varchar(255) not null,
    role          varchar(255) null,
    status        varchar(255) null,
    username      varchar(50)  not null,
    constraint UK_gex1lmaqpg0ir5g1f5eftyaa1
        unique (username)
);

INSERT INTO film_rating.account (id, avatar, date_of_birth, email, full_name, password, role, status, username) VALUES (2, 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/719.jpg', '1997-05-06 07:00:00', 'nicholas@hotmail.com', 'Nicholas Turner', '$2a$10$aWml5Z.wsWX7fDFAkRKnHunJf.RjAFjcVJOUvoDrrQMuA1EqfO9bC', 'ADMIN', 'ACTIVE', 'admin');
INSERT INTO film_rating.account (id, avatar, date_of_birth, email, full_name, password, role, status, username) VALUES (3, 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1120.jpg', '1992-03-03 07:00:00', 'inez@gmail.com', 'Inez Ritchie', '$2a$10$.3y7ywaFKig.VpKGSzq.uO4ih3eW8L1zmf7LVwiynI.XmUIizM0p6', 'USER', 'ACTIVE', 'user');
INSERT INTO film_rating.account (id, avatar, date_of_birth, email, full_name, password, role, status, username) VALUES (4, 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/411.jpg', '1997-05-30 07:00:00', 'Bartholome87@gmail.com', 'Judith Reilly', '$2a$10$9kRl7/Px7dgpT3msxo.fDua4g8nZgeH90FaWF9yaOK6M58jkXSyHm', 'USER', 'ACTIVE', 'Antonetta21');
INSERT INTO film_rating.account (id, avatar, date_of_birth, email, full_name, password, role, status, username) VALUES (5, 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/741.jpg', '1999-04-14 07:00:00', 'Mabelle_Gutkowski@gmail.com', 'Lloyd Haley', '$2a$10$wFl83OtkI5plUKvXOqkISO1kV2ilsIdKPTJoF.5iIdvXGRkm/X7ye', 'USER', 'ACTIVE', 'Jasmin_Deckow');