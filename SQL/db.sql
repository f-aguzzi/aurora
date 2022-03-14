

CREATE TABLE IF NOT EXISTS Arnie (
    Numero INTEGER PRIMARY KEY NOT NULL,
    Data_registrazione DATETIME
);

CREATE TABLE IF NOT EXISTS Trattamenti (
    Arnia INTEGER NOT NULL,
    Data_registrazione DATETIME NOT NULL,
    Titolo VARCHAR(30) NOT NULL,
    Descrizione VARCHAR(200) NOT NULL,
    PRIMARY KEY(Arnia, Data_registrazione)
);

CREATE VIEW IF NOT EXISTS TrattamentiPerArnia AS
SELECT * FROM Trattamenti
ORDER BY Arnia;

CREATE VIEW IF NOT EXISTS ArniePerTrattamento AS
SELECT * FROM Trattamenti
ORDER BY Titolo;

