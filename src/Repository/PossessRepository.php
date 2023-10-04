<?php

namespace App\Repository;

use App\Entity\Possess;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Possess>
 *
 * @method Possess|null find($id, $lockMode = null, $lockVersion = null)
 * @method Possess|null findOneBy(array $criteria, array $orderBy = null)
 * @method Possess[]    findAll()
 * @method Possess[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PossessRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Possess::class);
    }

//    /**
//     * @return Possess[] Returns an array of Possess objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Possess
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
