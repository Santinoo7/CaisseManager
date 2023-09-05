package tech.CaisseManager.Model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;

@Entity
public class Transactions implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private Long id ;
    private String name ;



    public Transactions() {
    }

    public Transactions(Long id, String name) {
        this.id = id;
        this.name = name;

    }
    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
}
