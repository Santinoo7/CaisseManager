package tech.CaisseManager.Service;

import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import tech.CaisseManager.Repo.UtilisateursRepo;
import tech.CaisseManager.Exception.UserNotFoundException;
import tech.CaisseManager.Model.Utilisateurs;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UtilisateursService {
    private final UtilisateursRepo UtilisateursRepo;
    @Autowired
    public UtilisateursService(UtilisateursRepo UtilisateursRepo) {
        this.UtilisateursRepo = UtilisateursRepo;
    }

    public Utilisateurs addUtilisateurs(Utilisateurs Utilisateurs){
        return UtilisateursRepo.save(Utilisateurs);
    }
    

    public List<Utilisateurs> findAllUtilisateurs(){
        return UtilisateursRepo.findAll();
    }


    public Utilisateurs updateUtilisateurs(Utilisateurs Utilisateurs){
        return UtilisateursRepo.save(Utilisateurs);
    }


    public Utilisateurs findUtilisateursById(Long id){
        return UtilisateursRepo.findUtilisateursById(id).
                orElseThrow(()-> new UserNotFoundException("User by id"+ id +"was not found"));
    }


    @Transactional
    public ResponseEntity<String> deleteUtilisateursById(Long id){
        UtilisateursRepo.deleteUtilisateursById(id);
        return ResponseEntity.ok("Deleted");
    }
}
