package tech.CaisseManager.Controller;

import org.springframework.security.access.prepost.PreAuthorize;
import tech.CaisseManager.Model.Transactions;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tech.CaisseManager.Service.TransactionsService;

import java.util.List;
@RestController
@RequestMapping("/Transactions")
@PreAuthorize("hasAnyRole('ROLE_ADMIN','ROLE_CAISSIER')")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600,allowCredentials = "true")
public class TransactionsResource {
    private final TransactionsService garesService;

    public TransactionsResource(TransactionsService TransactionsService) {
        this.garesService = TransactionsService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Transactions>> getAllTransactions(){
        List<Transactions> Transactions = garesService.findAllTransactions();
        return new ResponseEntity<>(Transactions, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<Transactions> getTransactionsById(@PathVariable("id") long id){
        Transactions Transactions = garesService.findTransactionsById(id);
        return new ResponseEntity<>(Transactions, HttpStatus.OK);
    }
    @CrossOrigin()
    @PostMapping("/add")
    public ResponseEntity<Transactions> addTransactions(@RequestBody Transactions Transactions){
        Transactions newTransactions = garesService.addTransactions(Transactions);
        return new ResponseEntity<>(newTransactions, HttpStatus.CREATED);
    }
    @CrossOrigin()
    @PutMapping("/update")
    public ResponseEntity<Transactions> updateTransactions(@RequestBody Transactions Transactions){
        Transactions updateTransactions = garesService.updateTransactions(Transactions);
        return new ResponseEntity<>(updateTransactions, HttpStatus.OK);
    }
    @CrossOrigin()
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> updateTransactions(@PathVariable Long id){
        return garesService.deleteTransactionsById(id);
    }

}
