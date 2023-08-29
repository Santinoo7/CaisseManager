package tech.CaisseManager.Controller;

import tech.CaisseManager.Model.Caissier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.CaisseManager.Service.CaissierService;

import java.util.List;

@RestController
@RequestMapping("/Caissier")
public class CaissierResource {
    private final CaissierService caissierService;

    public CaissierResource(CaissierService CaissierService) {
        this.caissierService = CaissierService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Caissier>> getAllCaissier(){
        List<Caissier> Caissier = caissierService.findAllCaissier();
        return new ResponseEntity<>(Caissier, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Caissier> getCaissierById(@PathVariable("id") long id){
        Caissier Caissier = caissierService.findCaissierById(id);
        return new ResponseEntity<>(Caissier, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Caissier> addCaissier(@RequestBody Caissier Caissier){
        Caissier newCaissier = caissierService.addCaissier(Caissier);
        return new ResponseEntity<>(newCaissier, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Caissier> updateCaissier(@RequestBody Caissier Caissier){
        Caissier updateCaissier = caissierService.updateCaissier(Caissier);
        return new ResponseEntity<>(updateCaissier, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> updateCaissier(@PathVariable Long id){
        return caissierService.deleteCaisseById(id);
    }

}
