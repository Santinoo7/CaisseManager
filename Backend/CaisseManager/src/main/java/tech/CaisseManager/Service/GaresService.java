package tech.CaisseManager.Service;

import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import tech.CaisseManager.Repo.GaresRepo;
import tech.CaisseManager.Exception.UserNotFoundException;
import tech.CaisseManager.Model.Gares;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class GaresService {
    private final GaresRepo GaresRepo;
    @Autowired
    public GaresService(GaresRepo GaresRepo) {
        this.GaresRepo = GaresRepo;
    }

    public Gares addGares(Gares Gares){

        return GaresRepo.save(Gares);
    }


    public List<Gares> findAllGares(){
        return GaresRepo.findAll();
    }


    public Gares updateGares(Gares Gares){
        return GaresRepo.save(Gares);
    }


    public Gares findGaresById(Long id){
        return GaresRepo.findGaresById(id).
                orElseThrow(()-> new UserNotFoundException("User by id"+ id +"was not found"));
    }


    @Transactional
    public ResponseEntity<String> deleteGareById(Long id){
        GaresRepo.deleteGaresById(id);
        return ResponseEntity.ok("Deleted");
    }
}
