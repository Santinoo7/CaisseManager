package tech.CaisseManager.Service;

import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import tech.CaisseManager.Repo.BanquesRepo;
import tech.CaisseManager.Exception.UserNotFoundException;
import tech.CaisseManager.Model.Banques;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class BanquesService {
    private final tech.CaisseManager.Repo.BanquesRepo BanquesRepo;
    @Autowired
    public BanquesService(BanquesRepo BanquesRepo) {
        this.BanquesRepo = BanquesRepo;
    }

    public Banques addBanques(Banques Banques){
        return BanquesRepo.save(Banques);
    }


    public List<Banques> findAllBanques(){
        return BanquesRepo.findAll();
    }


    public Banques updateBanques(Banques Banques){
        return BanquesRepo.save(Banques);
    }


    public Banques findBanquesById(Long id){
        return BanquesRepo.findBanquesById(id).
                orElseThrow(()-> new UserNotFoundException("User by id"+ id +"was not found"));
    }
    @Transactional
    public ResponseEntity<String> deleteBanquesById(Long id){
        BanquesRepo.deleteBanquesById(id);
        return ResponseEntity.ok("Deleted");
    }
}
