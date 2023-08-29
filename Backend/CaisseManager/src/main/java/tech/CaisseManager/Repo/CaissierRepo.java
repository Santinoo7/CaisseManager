package tech.CaisseManager.Repo;

import tech.CaisseManager.Model.Caissier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CaissierRepo extends JpaRepository<Caissier,Long> {
    void deleteCaissierById(long id);
    Optional<Caissier> findCaissierById(long id);

}
