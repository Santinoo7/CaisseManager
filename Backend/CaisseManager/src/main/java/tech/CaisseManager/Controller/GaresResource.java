package tech.CaisseManager.Controller;

import org.springframework.security.access.prepost.PreAuthorize;
import tech.CaisseManager.Model.Gares;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.CaisseManager.Service.GaresService;

import java.util.List;
@RestController
@RequestMapping("/Gares")
@PreAuthorize("hasRole('ROLE_ADMIN')")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600,allowCredentials = "true")
public class GaresResource {
    private final GaresService garesService;

    public GaresResource(GaresService GaresService) {
        this.garesService = GaresService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Gares>> getAllGares(){
        List<Gares> Gares = garesService.findAllGares();
        return new ResponseEntity<>(Gares, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Gares> getGaresById(@PathVariable("id") long id){
        Gares Gares = garesService.findGaresById(id);
        return new ResponseEntity<>(Gares, HttpStatus.OK);
    }
    @CrossOrigin()
    @PostMapping("/add")
    public ResponseEntity<Gares> addGares(@RequestBody Gares Gares){
        Gares newGares = garesService.addGares(Gares);
        return new ResponseEntity<>(newGares, HttpStatus.CREATED);
    }
    @CrossOrigin()
    @PutMapping("/update")
    public ResponseEntity<Gares> updateGares(@RequestBody Gares Gares){
        Gares updateGares = garesService.updateGares(Gares);
        return new ResponseEntity<>(updateGares, HttpStatus.OK);
    }
    @CrossOrigin()
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> updateGares(@PathVariable Long id){
        return garesService.deleteGareById(id);
    }

}
