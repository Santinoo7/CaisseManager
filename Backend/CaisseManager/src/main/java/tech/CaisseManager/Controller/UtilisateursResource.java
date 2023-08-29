package tech.CaisseManager.Controller;

import tech.CaisseManager.Model.Utilisateurs;
import tech.CaisseManager.Model.Utilisateurs;
import tech.CaisseManager.Model.Utilisateurs;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.CaisseManager.Service.UtilisateursService;
import tech.CaisseManager.Service.UtilisateursService;
import tech.CaisseManager.Service.UtilisateursService;

import java.util.List;

@RestController
@RequestMapping("/Utilisateurs")
public class UtilisateursResource {
    private final UtilisateursService utilisateursService;
    public UtilisateursResource(UtilisateursService UtilisateursService) {
        this.utilisateursService =UtilisateursService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<Utilisateurs>> getAllUtilisateurs(){
        List<Utilisateurs> Utilisateurs = utilisateursService.findAllUtilisateurs();
        return new ResponseEntity<>(Utilisateurs, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Utilisateurs> getUtilisateursById(@PathVariable("id") long id){
        Utilisateurs Utilisateurs = utilisateursService.findUtilisateursById(id);
        return new ResponseEntity<>(Utilisateurs, HttpStatus.OK);
    }
    @PostMapping("/add")
    public ResponseEntity<Utilisateurs> addUtilisateurs(@RequestBody Utilisateurs Utilisateurs){
        Utilisateurs newUtilisateurs = utilisateursService.addUtilisateurs(Utilisateurs);
        return new ResponseEntity<>(newUtilisateurs, HttpStatus.CREATED);
    }
    @PutMapping("/update")
    public ResponseEntity<Utilisateurs> updateUtilisateurs(@RequestBody Utilisateurs Utilisateurs){
        Utilisateurs updateUtilisateurs = utilisateursService.updateUtilisateurs(Utilisateurs);
        return new ResponseEntity<>(updateUtilisateurs, HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> updateUtilisateurs(@PathVariable Long id){
        return utilisateursService.deleteUtilisateursById(id);
    }


}