package tech.CaisseManager.Repo;

import tech.CaisseManager.Model.Banques;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BanquesRepo extends JpaRepository<Banques,Long> {
    void deleteBanquesById(Long id);
    Optional<Banques> findBanquesById(long id);

}
