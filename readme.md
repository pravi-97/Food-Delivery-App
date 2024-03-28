CREATE TABLE item (
	id SERIAL PRIMARY KEY,
	type varchar(50) not null,
	description TEXT
);
-------------------------------
CREATE TABLE organization (
	id varchar(50) unique not null,
	"name" varchar(50) not null
);
-------------------------------
CREATE TABLE Pricing (
	organization_id INTEGER REFERENCES Organization(id),
	item_id INTEGER REFERENCES Item(id),
	"zone" varchar(20) not null,
	base_distance_in_kms int not null check (base_distance_in_kms > 0),
	km_price int not null check (km_price > 0),
	fix_price int not null check (fix_price > 0),
    PRIMARY KEY (organization_id, item_id, zone)
);