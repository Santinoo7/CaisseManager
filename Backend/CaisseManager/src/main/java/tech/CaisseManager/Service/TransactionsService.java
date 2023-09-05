package tech.CaisseManager.Service;

import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import tech.CaisseManager.Repo.TransactionsRepo;
import tech.CaisseManager.Exception.UserNotFoundException;
import tech.CaisseManager.Model.Transactions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class TransactionsService {
    private final TransactionsRepo TransactionsRepo;
    @Autowired
    public TransactionsService(TransactionsRepo TransactionsRepo) {
        this.TransactionsRepo = TransactionsRepo;
    }

    public Transactions addTransactions(Transactions Transactions){

        return TransactionsRepo.save(Transactions);
    }


    public List<Transactions> findAllTransactions(){
        return TransactionsRepo.findAll();
    }


    public Transactions updateTransactions(Transactions Transactions){
        return TransactionsRepo.save(Transactions);
    }


    public Transactions findTransactionsById(Long id){
        return TransactionsRepo.findTransactionsById(id).
                orElseThrow(()-> new UserNotFoundException("User by id"+ id +"was not found"));
    }


    @Transactional
    public ResponseEntity<String> deleteTransactionsById(Long id){
        TransactionsRepo.deleteTransactionsById(id);
        return ResponseEntity.ok("Deleted");
    }
}
