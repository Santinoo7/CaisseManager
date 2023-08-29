package tech.CaisseManager.Controller;

import tech.CaisseManager.Model.Caisses;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.CaisseManager.Service.CaissesService;

import java.util.List;

@RestController
@RequestMapping("/Caisses")
public class CaissesResource {
    private final CaissesService caissesService;

    public CaissesResource(CaissesService CaissesService) {
        this.caissesService = CaissesService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Caisses>> getAllCaisses(){
        List<Caisses> Caisses = caissesService.findAllCaisses();
        return new ResponseEntity<>(Caisses, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Caisses> getCaissesById(@PathVariable("id") long id){
        Caisses Caisses = caissesService.findCaissesById(id);
        return new ResponseEntity<>(Caisses, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Caisses> addCaisses(@RequestBody Caisses Caisses){
        Caisses newCaisses = caissesService.addCaisses(Caisses);
        return new ResponseEntity<>(newCaisses, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Caisses> updateCaisses(@RequestBody Caisses Caisses){
        Caisses updateCaisses = caissesService.updateCaisses(Caisses);
        return new ResponseEntity<>(updateCaisses, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> updateCaisses(@PathVariable Long id){
        return caissesService.deleteCaisseById(id);
    }

}
