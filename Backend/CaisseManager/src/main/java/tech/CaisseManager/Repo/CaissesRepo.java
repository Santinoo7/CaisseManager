package tech.CaisseManager.Repo;

import tech.CaisseManager.Model.Caisses;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CaissesRepo extends JpaRepository<Caisses,Long> {
    void deleteCaissesById(long id);
    Optional<Caisses> findCaissesById(long id);

}
