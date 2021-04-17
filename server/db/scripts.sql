CREATE DATABASE covid_db;

\c covid_db;

CREATE TABLE covid_patient( 
  Patient_Number VARCHAR(40) PRIMARY KEY,
  state_patient_number VARCHAR(32)  ,
  date_announced VARCHAR(20)  ,
  estimated_date VARCHAR(20) ,
  age VARCHAR(20) ,
  gender VARCHAR(10),
  Detected_City VARCHAR(40),
  Detected_District VARCHAR(40),
  Detected_State VARCHAR(40),
  State_code VARCHAR(10),
  Current_Status VARCHAR(100),
  Notes TEXT,
  suspected TEXT,
  nationality VARCHAR(300),
  type_of_transmission VARCHAR(30),
  status_change_date VARCHAR(300),
  source TEXT,
  source2 Text,
  source3 Text,
  backup_notes TEXT,
  num_cases VARCHAR(200)

);