USE carbon_emission;

CREATE TABLE emissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    electricity DOUBLE NOT NULL,
    transport DOUBLE NOT NULL,        
    waste DOUBLE NOT NULL ,
    water DOUBLE NOT NULL,
    total_emission DOUBLE NOT NULL,
    emission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
