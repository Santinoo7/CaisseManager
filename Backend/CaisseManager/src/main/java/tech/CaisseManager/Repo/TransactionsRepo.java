package tech.CaisseManager.Repo;

import tech.CaisseManager.Model.Transactions;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TransactionsRepo extends JpaRepository<Transactions,Long> {
    void deleteTransactionsById(Long id);
    Optional<Transactions> findTransactionsById(long id);

}