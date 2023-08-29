package tech.CaisseManager.Model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Banques implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private long id ;
    private String name ;
    private String compte ;
    private String region ;

    public Banques() {
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCompte() {
        return compte;
    }

    public String getRegion() {
        return region;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setCompte(String compte) {
        this.compte = compte;
    }

    public void setRegion(String region) {
        this.region = region;
    }
}
