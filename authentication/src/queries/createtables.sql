CREATE TABLE Users (
    userId SERIAL PRIMARY KEY,
    uniqueName VARCHAR(250) UNIQUE NOT NULL,
    name VARCHAR(300) NOT NULL,
    email VARCHAR(300) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    is_Verified BOOLEAN NOT NULL DEFAULT FALSE,
    pfp TEXT DEFAULT 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP
);

CREATE INDEX idx_is_verified ON Users (is_Verified);
CREATE INDEX idx_uniqueName ON Users (uniqueName);


