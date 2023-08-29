package tech.CaisseManager.Service;

import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import tech.CaisseManager.Repo.CaissesRepo;
import tech.CaisseManager.Exception.UserNotFoundException;
import tech.CaisseManager.Model.Caisses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class CaissesService {
    private final CaissesRepo CaissesRepo;
    @Autowired
    public CaissesService(CaissesRepo CaissesRepo) {
        this.CaissesRepo = CaissesRepo;
    }

    public Caisses addCaisses(Caisses Caisses){

        return CaissesRepo.save(Caisses);
    }


    public List<Caisses> findAllCaisses(){
        return CaissesRepo.findAll();
    }


    public Caisses updateCaisses(Caisses Caisses){
        return CaissesRepo.save(Caisses);
    }


    public Caisses findCaissesById(Long id){
        return CaissesRepo.findCaissesById(id).
                orElseThrow(()-> new UserNotFoundException("User by id"+ id +"was not found"));
    }


    @Transactional
    public ResponseEntity<String> deleteCaisseById(Long id){
        CaissesRepo.deleteCaissesById(id);
        return ResponseEntity.ok("Deleted");
    }
}
