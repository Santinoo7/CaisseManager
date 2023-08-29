package tech.CaisseManager.Service;

import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import tech.CaisseManager.Repo.CaissierRepo;
import tech.CaisseManager.Exception.UserNotFoundException;
import tech.CaisseManager.Model.Caissier;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CaissierService {
    private final CaissierRepo CaissierRepo;
    @Autowired
    public CaissierService(CaissierRepo CaissierRepo) {
        this.CaissierRepo = CaissierRepo;
    }

    public Caissier addCaissier(Caissier Caissier){

        return CaissierRepo.save(Caissier);
    }


    public List<Caissier> findAllCaissier(){
        return CaissierRepo.findAll();
    }


    public Caissier updateCaissier(Caissier Caissier){
        return CaissierRepo.save(Caissier);
    }


    public Caissier findCaissierById(Long id){
        return CaissierRepo.findCaissierById(id).
                orElseThrow(()-> new UserNotFoundException("User by id"+ id +"was not found"));
    }


    @Transactional
    public ResponseEntity<String> deleteCaisseById(Long id){
        CaissierRepo.deleteCaissierById(id);
        return ResponseEntity.ok("Deleted");
    }
}
