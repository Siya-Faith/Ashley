
CREATE TABLE blacklisted_tokens (
    token VARCHAR(255) PRIMARY KEY,
    blacklistedAt DATETIME NOT NULL,
    expiresAt DATETIME NOT NULL
);


CREATE TABLE password_reset_token (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    token VARCHAR(255) NOT NULL,
    userID INT NOT NULL,
    expiryDate DATETIME NOT NULL,
    FOREIGN KEY (userID) REFERENCES users(userID) ON DELETE CASCADE
);