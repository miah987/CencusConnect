import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('census');

export interface Person { 
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  province: string; // Ensure province is included here
  district: string;
  ward: string;
  date: string; // Consider using a Date type depending on your date format
  gender: string;
  maritalStatus: string;
}

export const initializeDB = async () => {
  try {
    // Create a temporary table with the new schema
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS person_temp (
        id INTEGER PRIMARY KEY NOT NULL,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        phone TEXT NOT NULL,
        email TEXT NOT NULL,
        province TEXT NOT NULL, // New column added
        district TEXT NOT NULL,
        ward TEXT NOT NULL,
        date TEXT NOT NULL,
        gender TEXT NOT NULL,
        maritalStatus TEXT NOT NULL,
      );
    `);

    // Copy data from the old table to the new one
    await db.execAsync(`
      INSERT INTO person_temp (id, firstName, lastName, phone, email, district, ward, date, gender, maritalStatus,)
      SELECT id, firstName, lastName, phone, email, district, ward, date, gender, maritalStatus, FROM person;
    `);

    // Drop the old table
    await db.execAsync(`DROP TABLE IF EXISTS person;`);

    // Rename the new table to the original name
    await db.execAsync(`ALTER TABLE person_temp RENAME TO person;`);

    console.log("Table initialized successfully with new column.");
  } catch (error) {
    console.log("Error initializing the database:", error);
  }
};

export const addPerson = async (
firstName: string, lastName: string, phone: string, email: string, province: string, district: string, ward: string, date: string, gender: string, maritalStatus: string) => {
  try {
    const result = await db.runAsync(
      'INSERT INTO person (firstName, lastName, phone, email, province, district, ward, date, gender, maritalStatus) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      firstName,
      lastName,
      phone,
      email,
      province,
      district,
      ward,
      date,
      gender,
      maritalStatus,
    );
    return result.lastInsertRowId; // Return the lastInsertRowId
  } catch (error) {
    console.error("Error adding person:", error);
  }
};

export const updatePerson = async (
id: number, firstName: string, lastName: string, phone: string, email: string, province: string, district: string, ward: string, date: string, gender: string, maritalStatus: string) => {
  try {
    await db.runAsync(
      'UPDATE person SET firstName = ?, lastName = ?, phone = ?, email = ?, province = ?, district = ?, ward = ?, date = ?, gender = ? WHERE id = ?,  maritalStatus = ?',

      firstName,
      lastName,
      phone,
      email,
      province,
      district,
      ward,
      date,
      gender,
      maritalStatus,
      id
    );
  } catch (error) {
    console.error("Error updating person:", error);
  }
};

export const deletePerson = async (id: number) => {
  try {
    await db.runAsync('DELETE FROM person WHERE id = ?', id);
  } catch (error) {
    console.error("Error deleting person:", error);
  }
};

export const getPersons = async () => {
  try {
    const allRows = await db.getAllAsync('SELECT * FROM person') as Person[];
    return allRows;
  } catch (error) {
    console.error("Error getting persons:", error);
    return [];
  }
};

export interface Persons {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  province: string; // Ensure province is included here
  district: string;
  ward: string;
  date: string; // Consider using a Date type depending on your date format
  gender: string;
  maritalStatus: string;
}
