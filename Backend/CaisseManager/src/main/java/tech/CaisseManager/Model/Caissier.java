package tech.CaisseManager.Model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
public class Caissier implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private long id ;

    private String description ;
    private String montant ;
private LocalDate date ;
    @ManyToOne
    @JoinColumn(name="transactions_id", nullable=false,updatable = false)
    private Transactions transactions;

    public Caissier() {
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Transactions getTransactions() {
        return transactions;
    }

    public void setTransactions(Transactions transactions) {
        this.transactions = transactions;
    }

    public Caissier(long id, String description, String montant) {
        this.id = id;
        this.description = description;
        this.montant = montant;
    }

    public long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getMontant() {
        return montant;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setMontant(String montant) {
        this.montant = montant;
    }


}
