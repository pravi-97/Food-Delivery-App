# Food Delivery App
Backend Service to calculate the cost offood delivery based on various factors.
## API
this app is hosted in render.com
API URL -> https://food-delivery-app-1v5h.onrender.com/api

## Installation
Clone this project to you local repo and open the project in VSCode and open a new treminal

to install the neessary packages enter the below command in terminal
```sh
npm install
```
to start the server enter the below command in terminal
```sh
node server
```
## ENV Variables

Save the secrets in a .env file.
To run this app locally you'll need to connect to a PostgreSQL database and save the secrets in the env file

DB_URI = "postgres://USER_ID:PASSWORD@URL/DB"  
save the above value in your .env file   
USER_ID : user id for your postgreSQL database  
PASSWORD: password for your postgreSQL database  
URL: url to connect to your database. (for local it'll be http://localhost:[PORT]) where PORT is the port number in which Postgres server is running  
DB: Name of your Database. (default name is postgres)  

## Setup PostgreSQL locally

Download Postgres by clicking [here](https://www.postgresql.org/download/) and install it on your machine. Refer this [YouTube](https://www.youtube.com/watch?v=HmziePvMwkE) video.

create the below mentioned tables by executing the queries mentuioned below

#ITEM Table
```sql
CREATE TABLE item (
	id serial4 NOT NULL,
	"type" varchar(50) NOT NULL,
	description text NOT NULL,
	CONSTRAINT item_pkey PRIMARY KEY (id)
);
```
#OGANIZATION Table
```sql
CREATE TABLE organization (
	id serial4 NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT organization_pkey PRIMARY KEY (id)
);
```
#PRICING Table
```sql
CREATE TABLE pricing (
	organization_id int4 NOT NULL,
	item_id int4 NOT NULL,
	"zone" varchar(20) NOT NULL,
	base_distance_in_kms int4 NOT NULL,
	km_price int4 NOT NULL,
	fix_price int4 NOT NULL,
	CONSTRAINT pricing_base_distance_in_kms_check CHECK ((base_distance_in_kms > 0)),
	CONSTRAINT pricing_fix_price_check CHECK ((fix_price > 0)),
	CONSTRAINT pricing_km_price_check CHECK ((km_price > 0)),
	CONSTRAINT pricing_pkey PRIMARY KEY (organization_id, item_id, zone)
);
```

Now insert some values into the database.

#ITEM Table
```sql
INSERT INTO item ("type", description) VALUES('perishable', 'Blueberries');
INSERT INTO item ("type", description) VALUES('perishable', 'Pork Chops');
INSERT INTO item ("type", description) VALUES('perishable', 'Lettuce');
INSERT INTO item ("type", description) VALUES('perishable', 'Greek Yogurt');
INSERT INTO item ("type", description) VALUES('perishable', 'Ground Turkey');
INSERT INTO item ("type", description) VALUES('perishable', 'Avocado');
INSERT INTO item ("type", description) VALUES('perishable', 'Halibut Fillet');
INSERT INTO item ("type", description) VALUES('perishable', 'Asparagus');
INSERT INTO item ("type", description) VALUES('perishable', 'Cottage Cheese');
INSERT INTO item ("type", description) VALUES('perishable', 'Chicken Breast');
INSERT INTO item ("type", description) VALUES('perishable', 'Grapes');
INSERT INTO item ("type", description) VALUES('perishable', 'Ground Chicken');
INSERT INTO item ("type", description) VALUES('perishable', 'Baby Spinach');
INSERT INTO item ("type", description) VALUES('perishable', 'Feta Cheese');
INSERT INTO item ("type", description) VALUES('perishable', 'Salmon Steak');
INSERT INTO item ("type", description) VALUES('non-perishable', 'Canned Soup');
INSERT INTO item ("type", description) VALUES('non-perishable', 'Quinoa');
INSERT INTO item ("type", description) VALUES('non-perishable', 'Peanut Butter');
INSERT INTO item ("type", description) VALUES('non-perishable', 'Dried Pasta');
INSERT INTO item ("type", description) VALUES('non-perishable', 'Oatmeal');
INSERT INTO item ("type", description) VALUES('non-perishable', 'Canned Tuna');
INSERT INTO item ("type", description) VALUES('non-perishable', 'White Rice');
INSERT INTO item ("type", description) VALUES('non-perishable', 'Canned Corn');
INSERT INTO item ("type", description) VALUES('non-perishable', 'Granola Bars');
INSERT INTO item ("type", description) VALUES('non-perishable', 'Dry Beans');
INSERT INTO item ("type", description) VALUES('non-perishable', 'Instant Noodles');
INSERT INTO item ("type", description) VALUES('non-perishable', 'Canned Tomatoes');
INSERT INTO item ("type", description) VALUES('non-perishable', 'Pasta Sauce');
INSERT INTO item ("type", description) VALUES('non-perishable', 'Honey');
INSERT INTO item ("type", description) VALUES('non-perishable', 'Cereal');
```
#OGANIZATION Table
```sql
INSERT INTO organization ("name") VALUES('ABC Corporation');
INSERT INTO organization ("name") VALUES('XYZ Enterprises');
INSERT INTO organization ("name") VALUES('Acme Industries');
INSERT INTO organization ("name") VALUES('Global Innovations Ltd');
INSERT INTO organization ("name") VALUES('Sunrise Solutions');
INSERT INTO organization ("name") VALUES('Pinnacle Partners');
INSERT INTO organization ("name") VALUES('Evergreen Enterprises');
INSERT INTO organization ("name") VALUES('Apex Solutions');
INSERT INTO organization ("name") VALUES('Summit Services');
INSERT INTO organization ("name") VALUES('Dynamic Ventures');
```
#PRICING Table
```sql
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(1, 11, 'central', 10, 150, 5000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(2, 14, 'central', 10, 150, 6000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(3, 17, 'central', 5, 150, 2000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(4, 20, 'central', 5, 150, 3000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(5, 23, 'central', 5, 150, 4000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(6, 26, 'central', 5, 150, 3000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(7, 29, 'central', 5, 150, 4000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(8, 32, 'central', 5, 150, 3000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(9, 35, 'central', 5, 150, 2000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(10, 38, 'central', 5, 150, 3000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(1, 13, 'pacific', 10, 100, 7000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(2, 16, 'pacific', 10, 100, 8000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(3, 19, 'pacific', 10, 100, 4000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(4, 22, 'pacific', 10, 100, 5000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(5, 25, 'pacific', 10, 100, 6000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(6, 28, 'pacific', 10, 100, 5000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(7, 31, 'pacific', 10, 100, 6000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(8, 34, 'pacific', 10, 100, 5000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(9, 37, 'pacific', 10, 100, 4000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(10, 40, 'pacific', 10, 100, 5000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(1, 12, 'eastern', 7, 180, 6000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(2, 15, 'eastern', 7, 180, 7000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(3, 18, 'eastern', 7, 180, 3000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(4, 21, 'eastern', 7, 180, 4000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(5, 24, 'eastern', 7, 180, 5000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(6, 27, 'eastern', 7, 180, 4000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(7, 30, 'eastern', 7, 180, 5000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(8, 33, 'eastern', 7, 180, 4000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(9, 36, 'eastern', 7, 180, 3000);
INSERT INTO pricing (organization_id, item_id, "zone", base_distance_in_kms, km_price, fix_price) VALUES(10, 39, 'eastern', 7, 180, 4000);
```

Now to test the working of the app open postman and query a get request withe the below body.
```json
{
    "zone" : "central",
    "organization_id" : 5,
    "total_distance" : 2,
    "item_type" : "perishable"
}
```

an appropriate response shall we returned like the one below
```json
{
    "total_price": 40
}
```

# Error Handling
If there is no Organization with the specified ID then the app should return an appropriate error code like the one below

```json
{
    "ErrorMessage": "No Organization with ID 51 found in zone central"
}
```

if food specified in the Pricing table is not available. it should respond with an error message like below
```json
{
    "ErrorMessage": "No item found for zone central and Organization 3"
}
```
if food_type specified in the request is not available it will return an error message like below
```json
{
    "ErrorMessage": "perishable not found for zone central and Organization 3"
}
```
if the request body does not have all the required fields like the one below.
```json
{
    "organization_id" : "",
    "item_type" : ""
}
```
the app should return appropriate message 
```json 
{
    "ErrorMessage": "zone is a required field, organization_id is a required field, total_distance is a required field, item_type is a required field. (should be either 'perishable' or 'non-perishable')"
}
```