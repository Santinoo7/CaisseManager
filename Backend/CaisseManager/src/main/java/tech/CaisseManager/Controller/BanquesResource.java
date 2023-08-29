package tech.CaisseManager.Controller;

import tech.CaisseManager.Model.Banques;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.CaisseManager.Model.Caisses;
import tech.CaisseManager.Service.BanquesService;
import tech.CaisseManager.Service.CaissesService;

import java.util.List;

@RestController
@RequestMapping("/Banques")
public class BanquesResource {
    private final BanquesService banquesService;
    public BanquesResource(BanquesService BanquesService) {
        this.banquesService =BanquesService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Banques>> getAllBanques(){
        List<Banques> Banques = banquesService.findAllBanques();
        return new ResponseEntity<>(Banques, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Banques> getBanquesById(@PathVariable("id") long id){
        Banques Banques = banquesService.findBanquesById(id);
        return new ResponseEntity<>(Banques, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Banques> addBanques(@RequestBody Banques Banques){
        Banques newBanques = banquesService.addBanques(Banques);
        return new ResponseEntity<>(newBanques, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Banques> updateBanques(@RequestBody Banques Banques){
        Banques updateBanques = banquesService.updateBanques(Banques);
        return new ResponseEntity<>(updateBanques, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> updateBanques(@PathVariable Long id){
        return banquesService.deleteBanquesById(id);
    }


}
