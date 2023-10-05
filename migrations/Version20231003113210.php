<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231003113210 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE organisation DROP CONSTRAINT fk_e6e132b49e6b1585');
        $this->addSql('DROP INDEX idx_e6e132b49e6b1585');
        $this->addSql('ALTER TABLE organisation DROP organisation_id');
        $this->addSql('ALTER TABLE "user" ADD organisation_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE "user" ADD CONSTRAINT FK_8D93D6499E6B1585 FOREIGN KEY (organisation_id) REFERENCES organisation (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_8D93D6499E6B1585 ON "user" (organisation_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE organisation ADD organisation_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE organisation ADD CONSTRAINT fk_e6e132b49e6b1585 FOREIGN KEY (organisation_id) REFERENCES organisation (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX idx_e6e132b49e6b1585 ON organisation (organisation_id)');
        $this->addSql('ALTER TABLE "user" DROP CONSTRAINT FK_8D93D6499E6B1585');
        $this->addSql('DROP INDEX IDX_8D93D6499E6B1585');
        $this->addSql('ALTER TABLE "user" DROP organisation_id');
    }
}
