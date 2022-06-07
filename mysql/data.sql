USE desafiodb;

CREATE TABLE people (
    id INT(11) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
);

SET character_set_client = utf8;
SET character_set_connection = utf8;
SET character_set_results = utf8;
SET collation_connection = utf8_general_ci;
SET GLOBAL time_zone = '+3:00';

INSERT INTO people (name) VALUES ('Luiz');
INSERT INTO people (name) VALUES ('Elcio');
INSERT INTO people (name) VALUES ('Vander');
INSERT INTO people (name) VALUES ('Alex');
INSERT INTO people (name) VALUES ('Marta');
INSERT INTO people (name) VALUES ('Douglas');