create table active_user
(
    id      int auto_increment
        primary key,
    uuid    varchar(255) null,
    user_id int          null,
    constraint UK_7odcqml0gw3qrf4t3li6lbaca
        unique (uuid),
    constraint FKeh93n89jv6oudhfm285kf0bef
        foreign key (user_id) references account (id)
            on update cascade on delete set null
);

INSERT INTO film_rating.active_user (id, uuid, user_id) VALUES (2, '5302b980-f3b5-4c4e-b869-94bae97da2f5', 2);
INSERT INTO film_rating.active_user (id, uuid, user_id) VALUES (3, 'ad3eea8c-0b3a-433a-b033-7202334baf7d', 3);
INSERT INTO film_rating.active_user (id, uuid, user_id) VALUES (4, '30d34249-9bd2-4e3d-a3b4-16e1229a762b', 4);
INSERT INTO film_rating.active_user (id, uuid, user_id) VALUES (5, '320e1a4c-5821-4f50-9f12-75d382a5666c', 5);