<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource; 
use App\Repository\PossessRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PossessRepository::class)]
#[ApiResource]
class Possess
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    public function getId(): ?int
    {
        return $this->id;
    }
}
