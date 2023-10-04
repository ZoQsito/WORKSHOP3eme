<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231003123849 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE activity_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE possess_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE user_activity_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE activity (id INT NOT NULL, title VARCHAR(255) NOT NULL, description TEXT DEFAULT NULL, date DATE DEFAULT NULL, ville VARCHAR(255) NOT NULL, code_postal VARCHAR(255) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE possess (id INT NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE user_activity (id INT NOT NULL, users_id INT DEFAULT NULL, activity_id INT DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE INDEX IDX_4CF9ED5A67B3B43D ON user_activity (users_id)');
        $this->addSql('CREATE INDEX IDX_4CF9ED5A81C06096 ON user_activity (activity_id)');
        $this->addSql('ALTER TABLE user_activity ADD CONSTRAINT FK_4CF9ED5A67B3B43D FOREIGN KEY (users_id) REFERENCES "user" (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE user_activity ADD CONSTRAINT FK_4CF9ED5A81C06096 FOREIGN KEY (activity_id) REFERENCES activity (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE organisation RENAME COLUMN code_postale TO code_postal');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP SEQUENCE activity_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE possess_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE user_activity_id_seq CASCADE');
        $this->addSql('ALTER TABLE user_activity DROP CONSTRAINT FK_4CF9ED5A67B3B43D');
        $this->addSql('ALTER TABLE user_activity DROP CONSTRAINT FK_4CF9ED5A81C06096');
        $this->addSql('DROP TABLE activity');
        $this->addSql('DROP TABLE possess');
        $this->addSql('DROP TABLE user_activity');
        $this->addSql('ALTER TABLE organisation RENAME COLUMN code_postal TO code_postale');
    }
}
