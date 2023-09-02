package tech.CaisseManager.Controller;

import org.springframework.security.access.prepost.PreAuthorize;
import tech.CaisseManager.Model.Banques;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.CaisseManager.Model.Caisses;
import tech.CaisseManager.Service.BanquesService;
import tech.CaisseManager.Service.CaissesService;

import java.util.List;


@RestController
@PreAuthorize("hasRole('ROLE_ADMIN')")
@RequestMapping("/Banques")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600,allowCredentials = "true")
public class BanquesResource {
    private final BanquesService banquesService;
    public BanquesResource(BanquesService BanquesService) {
        this.banquesService =BanquesService;
    }
    @CrossOrigin()
    @GetMapping("/all")
    public ResponseEntity<List<Banques>> getAllBanques(){
        List<Banques> Banques = banquesService.findAllBanques();
        return new ResponseEntity<>(Banques, HttpStatus.OK);
    }@CrossOrigin()

    @GetMapping("/find/{id}")
    public ResponseEntity<Banques> getBanquesById(@PathVariable("id") long id){
        Banques Banques = banquesService.findBanquesById(id);
        return new ResponseEntity<>(Banques, HttpStatus.OK);
    }
    @CrossOrigin()
    @PostMapping("/add")
    public ResponseEntity<Banques> addBanques(@RequestBody Banques Banques){
        Banques newBanques = banquesService.addBanques(Banques);
        return new ResponseEntity<>(newBanques, HttpStatus.CREATED);
    }
    @CrossOrigin()
    @PutMapping("/update")

    public ResponseEntity<Banques> updateBanques(@RequestBody Banques Banques){
        Banques updateBanques = banquesService.updateBanques(Banques);
        return new ResponseEntity<>(updateBanques, HttpStatus.OK);
    }
    @CrossOrigin()

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> updateBanques(@PathVariable Long id){
        return banquesService.deleteBanquesById(id);
    }


}
