create table review
(
    id          int auto_increment
        primary key,
    content     varchar(255) not null,
    post_date   datetime(6)  null,
    rating      float        not null,
    update_date datetime(6)  null,
    account_id  int          null,
    film_id     int          null,
    constraint FKari8avix634jwx0bskd1lf5lo
        foreign key (film_id) references film (id)
            on update cascade on delete set null,
    constraint FKcdh388xf1h79td68748wd9wcv
        foreign key (account_id) references account (id)
            on update cascade on delete set null
);

INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (1, 'Fantastic...but possibly overwhelming.', '2023-06-14 18:18:07.149000', 10, null, 3, 6);
INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (2, 'Wasnt expecting that.', '2023-06-14 18:19:08.792000', 8, null, 3, 8);
INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (3, 'Its honestly absurd how good the Spider-Verse movies are. Across the Spider-Verse is just as great, if not better than Into the Spider-Verse.', '2023-06-14 18:20:37.597000', 10, null, 3, 1);
INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (4, 'I struggled to get through this film. It was just a rehash of the first film, and tired magical natives tropes, offering nothing in the way of insight and intelligence.', '2023-06-14 18:22:29.039000', 3, null, 3, 12);
INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (5, 'Illuminations best since Despicable Me 1.', '2023-06-14 18:23:26.669000', 7, null, 3, 7);
INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (6, 'There is such a thing as too much', '2023-06-14 18:24:11.176000', 5, null, 3, 3);
INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (7, 'Really, really loved this movie. I know its become a bit of an overused adage nowadays but this feels like the kind of movie we just dont get anymore.', '2023-06-14 18:27:17.191000', 9, null, 4, 5);
INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (8, 'I know there are some flaws in the story but you have to accept that this kind of series is never made in Indian shows. Try to watch this rather then nonsense tv shows! ', '2023-06-14 18:28:01.197000', 9, null, 4, 10);
INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (9, 'A tremendous addition to the fantasy genre', '2023-06-14 18:28:24.965000', 8, null, 4, 8);
INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (10, 'Imagine a video game where you are shooting bad guys. Your hardware is old so everything is kind of slow and out of focus.', '2023-06-14 18:28:54.166000', 4, null, 4, 3);
INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (11, 'A scene between an intelligent raccoon, a rabbit with artificial legs, a walrus with wheels and an otter with metal arms made me cry', '2023-06-14 18:29:33.566000', 9, null, 4, 4);
INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (12, 'Having sat through some phase 4 films that failed to inspire... Guardians feels like a breath of fresh air. ', '2023-06-14 18:31:50.742000', 8, null, 5, 4);
INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (13, 'Guy Ritchies The Covenant is a great movie with an interesting story on an important subject matter. It has some intense action scenes and many moments of suspense.', '2023-06-14 18:32:47.701000', 7, null, 5, 9);
INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (14, 'First off this movie is for kids and fans of Nintendo and the Mario franchise. ', '2023-06-14 18:33:21.526000', 10, null, 5, 7);
INSERT INTO film_rating.review (id, content, post_date, rating, update_date, account_id, film_id) VALUES (15, 'The animation, flow of everything, genius character development, and action were all electrifying!', '2023-06-14 18:33:51.443000', 10, null, 5, 1);