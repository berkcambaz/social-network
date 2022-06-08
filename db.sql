CREATE TABLE `profile` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `tag` varchar(16) NOT NULL,
  `email` varchar(320) NOT NULL,
  `password` binary(60) NOT NULL,
  `date` int(11) NOT NULL,
  `bio` varchar(128) NOT NULL,
  `following_count` int(11) NOT NULL,
  `follower_count` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tag` (`tag`),
  UNIQUE KEY `email` (`email`)
)

CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `date` int(11) NOT NULL,
  `content` varchar(256) NOT NULL,
  `like_count` int(11) NOT NULL,
  PRIMARY KEY (`id`)
)

CREATE TABLE `like` (
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
)

CREATE TABLE `bookmark` (
  `post_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
)