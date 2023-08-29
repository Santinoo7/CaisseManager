package tech.CaisseManager.Repo;

import tech.CaisseManager.Model.Utilisateurs;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UtilisateursRepo extends JpaRepository<Utilisateurs,Long> {
    void deleteUtilisateursById(Long id);
    Optional<Utilisateurs> findUtilisateursById(long id);

    Utilisateurs findAllByIsDisabledFalse();

}