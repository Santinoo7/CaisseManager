package tech.CaisseManager.Repo;

import tech.CaisseManager.Model.Gares;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface GaresRepo extends JpaRepository<Gares,Long> {
    void deleteGaresById(Long id);
    Optional<Gares> findGaresById(long id);

}